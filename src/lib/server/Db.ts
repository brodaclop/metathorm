import type { KVNamespace } from "@cloudflare/workers-types";
import type { Character, CharacterInfo } from "../../model/Karakter";
import { error, fail } from "@sveltejs/kit";

let initialised = false;

const ensureInit = async (platform: App.Platform) => {
    if (!initialised) {
        await platform.env.D1_DB.exec(
            'CREATE TABLE IF NOT EXISTS Characters (' +
            'id string primary key,' +
            'user string not null,' +
            'name string not null,' +
            'ancestry string not null,' +
            'background string not null,' +
            'level integer not null,' +
            'payload text not null' +
            ')'
        );
        //await platform.env.D1_DB.exec('drop table if exists CharacterArchive');
        await platform.env.D1_DB.exec(
            'CREATE TABLE IF NOT EXISTS CharacterArchive (' +
            'key integer primary key autoincrement, ' +
            'id string not null,' +
            'user string not null,' +
            'timestamp integer not null,' +
            'payload text not null' +
            ')'
        );

        initialised = true;
    }
}

export const listCharacters = async (platform: App.Platform): Promise<Array<CharacterInfo>> => {
    ensureInit(platform);
    const stmt = platform.env.D1_DB.prepare('select id, name, background, ancestry, level from Characters');
    return (await stmt.all()).results.map(({ id, name, background, ancestry, level }) => ({
        id,
        name,
        background,
        ancestry,
        level
    } as CharacterInfo));
}

export const loadAllCharacters = async (platform: App.Platform): Promise<Array<Character>> => {
    ensureInit(platform);
    const stmt = platform.env.D1_DB.prepare('select payload from Characters');
    return (await stmt.all()).results.map(({ payload }) => JSON.parse(payload as string));
}

const arciveCharacter = async (platform: App.Platform, id: string) => {
    ensureInit(platform);
    let char: Character | undefined = undefined;
    try {
        char = await loadCharacter(platform, id);
    } catch (e) {

    }
    if (char) {
        await platform.env.D1_DB.prepare('insert into CharacterArchive (id, user, payload, timestamp) VALUES (?1,?2,?3, ?4)')
            .bind(char.id, 'global', JSON.stringify(char), Date.now())
            .run();
    }



}

export const loadArchiveVersions = async (platform: App.Platform, id: string): Promise<Array<{ char: Character, timestamp: number }>> => {
    ensureInit(platform);
    const stmt = platform.env.D1_DB.prepare('select payload, timestamp from CharacterArchive where id=? order by key desc').bind(id);
    return (await stmt.all()).results.map(({ payload, timestamp }) => ({ char: JSON.parse(payload as string), timestamp: timestamp as number }));
}

export const saveCharacter = async (platform: App.Platform, char: Character) => {
    ensureInit(platform);
    await arciveCharacter(platform, char.id);
    const res = await platform.env.D1_DB.prepare('insert into Characters (id, user, name, ancestry, background, level, payload) VALUES (?1,?2,?3,?4,?5,?6,?7) ON CONFLICT(id) DO UPDATE SET user=?2, name=?3, ancestry=?4, background=?5, level=?6, payload=?7')
        .bind(char.id, 'global', char.name, char.ancestry, char.background, char.levels.length, JSON.stringify(char))
        .run();
}

export const deleteCharacter = async (platform: App.Platform, char: Pick<Character, 'id'>) => {
    ensureInit(platform);
    const { success } = await platform.env.D1_DB.prepare('delete from Characters where id = ?')
        .bind(char.id)
        .run();
}

export const loadCharacter = async (platform: App.Platform, id: string): Promise<Character> => {
    ensureInit(platform);
    const stmt = platform.env.D1_DB.prepare('select payload from Characters where id = ?').bind(id);
    const found = await stmt.first();
    if (!found) {
        throw new Error('Character not found with id: ' + id);
    }
    return upgrade(JSON.parse(found.payload as string));
}


const upgrade = (character: Character): Character => {
    // changed action:counter to action:keep-away
    character.inventory.weapons.forEach(w => {
        if ('action:counter' in w.actions) {
            w.actions['action:keep-away'] = w.actions['action:counter'] as number;
            delete w.actions['action:counter'];
        }
    });
    // temporarily removed action:disarm
    character.inventory.weapons.forEach(w => {
        if ('action:disarm' in w.actions) {
            delete w.actions['action:disarm'];
        }
    });
    // added armours to inventory
    character.inventory.armours = character.inventory.armours ?? [];
    return character;
}