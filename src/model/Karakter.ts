import { E, type EvalExpression } from "../logic/Expression";
import type { Entity } from "./Entity";
import { TOTAL_EP, TOTAL_FP } from "./Rules";
import type { Weapon } from "./Weapon";
import type { Ability } from "./Abilities";
import type { Action } from "./Action";
import { Background } from "./Background";
import { v4 } from "uuid";
import { Ancestry } from "./Ancestry";
import { Spell, type SpellInfo } from "./Spell";
import { entries } from "./InfoList";
import { calculateWeaponAction } from "./calculations/WeaponAction";
import { calculateSpellAction } from "./calculations/SpellAction";
import { Skill } from "./Skills";
import type { Armour } from "./Armour";


export interface Level {
    fpRoll: number;
}

export interface Character extends Entity {
    abilities: Record<Ability, number>;
    background: Background;
    ancestry: Ancestry;
    levels: Array<Level>;
    skills: Partial<Record<Skill, number>>;
    inventory: {
        weapons: Array<Weapon>;
        armours: Array<Armour>;
    };
    current: {
        fp: number;
        ep: number;
        mp: number;
        kp: number;
        armourWorn?: number;
    }
}

export interface CharacterInfo extends Entity {
    background: Background;
    ancestry: Ancestry;
    level: number;
}

export type CharacterTemplate = Pick<Character, 'name' | 'abilities' | 'background' | 'ancestry'>;

export interface CalculatedCharacter {
    fp: EvalExpression;
    ep: EvalExpression;
    skills: Partial<Record<Skill, number>>;
    actions: Array<Action>;
    weapons: Array<Weapon>;
    spells: Array<SpellInfo>;
}


const calculateUnarmed = (skills: Partial<Record<Skill, number>>): Array<Weapon> => {
    const ret: Array<Weapon> = [];
    const fraction = (skill: Skill, divisor: number) => Math.max(1, Math.floor((skills[skill] ?? 0) / divisor))

    if (skills['skill:brawling']) {
        ret.push({
            id: 'skill:brawling',
            name: 'skill:brawling',
            skill: 'skill:brawling',
            speed: fraction('skill:strength', 1),
            attack: fraction('skill:strength', 0.5),
            defence: fraction('skill:strength', 1),
            reach: 0,
            damage: fraction('skill:strength', 2),
            hands: 1,
            actions: {
                'action:attack-cq': 1,
                'action:defend-cq': 1,
            }
        });
    }
    if (skills['skill:fistfighting']) {
        ret.push({
            id: 'skill:fistfighting',
            name: 'skill:fistfighting',
            skill: 'skill:fistfighting',
            speed: fraction('skill:reactions', 1),
            attack: fraction('skill:reactions', 0.5),
            defence: fraction('skill:reactions', 1.5),
            reach: 0,
            damage: fraction('skill:reactions', 1),
            hands: 1,
            actions: {
                'action:attack-cq': 2,
                'action:defend-cq': 2,
            }
        });
    }
    if (skills['skill:martial_arts']) {
        ret.push({
            id: 'skill:martial_arts',
            name: 'skill:martial_arts',
            skill: 'skill:martial_arts',
            speed: fraction('skill:balance', 1),
            attack: fraction('skill:balance', 0.5),
            defence: fraction('skill:balance', 0.5),
            reach: 0,
            damage: fraction('skill:balance', 0.5),
            hands: 1,
            actions: {
                'action:attack-cq': 3,
                'action:defend-cq': 3,
            }
        });
    }
    return ret;
}

const calculateSkills = (character: Character): Partial<Record<Skill, number>> => {
    const hindrance = character.current.armourWorn !== undefined ? character.inventory.armours[character.current.armourWorn].hindrance : 0;
    return Object.fromEntries(entries(character.skills).map(([skill, level]) => [skill, Math.max(0, Skill.get(skill).type === 'skill_type:movement' ? level - hindrance : level)]));
}

export const calculateCharacter = (character: Character): CalculatedCharacter => {
    const level = character.levels.length;
    const { abilities } = character;
    const skills = calculateSkills(character);

    const weapons: Array<Weapon> = [...character.inventory.weapons, ...calculateUnarmed(skills)];

    const spells: Array<SpellInfo> = entries(skills).flatMap(([key, value]) => Spell.available(key, value));

    const actions: Array<Action> = [
        ...weapons.map(w => calculateWeaponAction(skills, w)),
        ...spells.map(s => calculateSpellAction(skills, s))
    ];

    return {
        spells,
        weapons,
        actions,
        skills,
        ep: E.evaluate(TOTAL_EP, { 'character:level': level }),
        fp: E.evaluate(TOTAL_FP, {
            'character:level': level,
            'expr:fp_roll': character.levels.map(l => l.fpRoll),
            ...abilities,
            ...skills
        })
    }
};

export const levelUpCharacter = (character: Character, fpRoll: number): Character => {
    character.levels.push({ fpRoll });
    character.current.kp += 30;
    const calc = calculateCharacter(character);
    character.current.ep = calc.ep.result;
    character.current.fp = calc.fp.result;
    return character;
}

export const createCharacter = (template: CharacterTemplate): Character => {
    const ancestryInfo = Ancestry.get(template.ancestry);
    const abilities: Record<Ability, number> = Object.fromEntries(Object.entries(template.abilities).map(([key, value]) => [key, value + (ancestryInfo.abilities[key as Ability] ?? 0)])) as Record<Ability, number>;

    return levelUpCharacter({
        name: template.name,
        id: v4(),
        skills: Background.get(template.background).skills,
        background: template.background,
        ancestry: template.ancestry,
        abilities,
        inventory: {
            weapons: [],
            armours: [],
        },
        levels: [],
        current: {
            ep: 0,
            fp: 0,
            mp: 0,
            kp: 0
        }
    }, 20);
}