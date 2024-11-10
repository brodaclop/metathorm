import type { Language } from "./Labels";

const CharacterKeys = [
    'character:level',
    'character:abilities',
    'character:skills',
    'character:info',
    'character:points',
    'character:ep',
    'character:fp',
    'character:mp',
    'character:kp',
    'character:weapons',
    'character:armours',
    'character:ancestry',
    'character:background',
    'character:ability',
    'character:public',
    'character:spells',
    'character:personality',
    'character:patron',
    'character:ip',
    'character:skill',
    'character:spirit_animals'
] as const;

export const CharacterLabels: Record<Language, Record<typeof CharacterKeys[number], string>> = {
    en: {
        'character:abilities': 'Abilities',
        'character:skills': 'Skills',
        'character:info': 'Info',
        'character:points': 'Points',
        'character:level': 'Level',
        'character:fp': 'Pain tolerance',
        'character:ep': 'Life force',
        'character:mp': 'Magic Power',
        'character:kp': 'Skill Points',
        'character:weapons': 'Weapons',
        'character:armours': 'Armours',
        'character:ancestry': 'Ancestry',
        'character:spells': 'Spells',
        'character:public': 'Public',
        'character:personality': 'Personality',
        'character:patron': 'Patron',
        'character:ip': 'Ideal Points',
        'character:background': 'Background',
        'character:skill': 'Skill',
        'character:ability': 'Ability',
        'character:spirit_animals': 'Spirit Animals'
    },
    hu: {
        'character:abilities': 'Tulajdonságok',
        'character:skills': 'Képzettségek',
        'character:info': 'Adatok',
        'character:points': 'Pontok',
        'character:level': 'Szint',
        'character:fp': 'Fájdalomtűrés',
        'character:ep': 'Életerő',
        'character:mp': 'Mágia Pont',
        'character:kp': 'Képzettség Pont',
        'character:weapons': 'Fegyverek',
        'character:armours': 'Páncélok',
        'character:ancestry': 'Származás',
        'character:background': 'Háttér',
        'character:skill': 'Képzettség',
        'character:ability': 'Tulajdonság',
        'character:spells': 'Varázslatok',
        'character:public': 'Nyilvános',
        'character:personality': 'Személyiség',
        'character:patron': 'Patrónus',
        'character:ip': 'Ideál',
        'character:spirit_animals': 'Totemállatok'
    }
};
