import type { Ability } from "./Abilities";
import { createList } from "./InfoList";

export type Personality =
    | 'personality:aggressive'
    | 'personality:learned'
    | 'personality:polite'
    | 'personality:cautious'
    | 'personality:helpful'
    | 'personality:tricky'
    | 'personality:tenacious'
    | 'personality:curious'
    | 'personality:disciplined'
    | 'personality:selfish'
    | 'personality:resourceful';

export type SkillInfo = {
    readonly name: Skill;
    readonly difficulty: 1 | 2 | 3;
    readonly ability: Ability;
    readonly positive: boolean;
    readonly type: SkillType;
    readonly personality: Array<Personality>;
} | {
    readonly name: Skill;
    difficulty: 2,
    ability: 'skill_type:general',
    positive: true,
    readonly personality: Array<Personality>;
    type: SkillType
};

const SkillInfos: Record<Skill, Omit<SkillInfo, 'name'>> = {
    "skill:endurance": {
        difficulty: 2,
        ability: 'ability:build',
        positive: false,
        type: 'skill_type:basic',
        personality: ['personality:tenacious', 'personality:disciplined']
    },
    'skill:pain_threshold': {
        difficulty: 2,
        ability: 'ability:build',
        positive: true,
        type: 'skill_type:basic',
        personality: ['personality:tenacious']
    },
    'skill:knives': {
        difficulty: 1,
        ability: 'ability:activity',
        positive: true,
        type: 'skill_type:combat',
        personality: ['personality:tricky']
    },
    'skill:brawling': {
        difficulty: 1,
        ability: 'ability:build',
        positive: true,
        type: 'skill_type:combat',
        personality: ['personality:aggressive', 'personality:resourceful']
    },
    'skill:strength': {
        difficulty: 2,
        ability: 'ability:build',
        positive: true,
        type: 'skill_type:basic',
        personality: ['personality:tenacious']
    },
    'skill:magic_force': {
        difficulty: 3,
        ability: 'ability:magic',
        positive: true,
        type: 'skill_type:basic',
        personality: ['personality:tenacious']
    },
    'skill:elemental_focus': {
        difficulty: 3,
        ability: 'ability:magic',
        positive: true,
        type: 'skill_type:focus',
        personality: ['personality:aggressive']
    },
    'skill:polearms': {
        difficulty: 2,
        ability: 'ability:build',
        positive: true,
        type: 'skill_type:combat',
        personality: ['personality:aggressive', 'personality:disciplined']
    },
    'skill:maces': {
        difficulty: 1,
        ability: 'ability:build',
        positive: true,
        type: 'skill_type:combat',
        personality: ['personality:aggressive']
    },
    'skill:stalking': {
        difficulty: 2,
        ability: 'ability:build',
        positive: false,
        type: 'skill_type:movement',
        personality: ['personality:tricky', 'personality:cautious']
    },
    'skill:climbing': {
        difficulty: 1,
        ability: 'ability:build',
        positive: false,
        type: 'skill_type:movement',
        personality: ['personality:tenacious', 'personality:resourceful']
    },
    'skill:swimming': {
        difficulty: 1,
        ability: 'ability:build',
        positive: true,
        type: 'skill_type:movement',
        personality: ['personality:tenacious']
    },
    'skill:shields': {
        difficulty: 2,
        ability: 'ability:build',
        positive: false,
        type: 'skill_type:combat',
        personality: ['personality:disciplined', 'personality:cautious']
    },
    'skill:fistfighting': {
        difficulty: 2,
        ability: 'ability:activity',
        positive: true,
        type: 'skill_type:combat',
        personality: ['personality:aggressive', 'personality:tricky']
    },
    'skill:jumping': {
        difficulty: 2,
        ability: 'ability:activity',
        positive: true,
        type: 'skill_type:movement',
        personality: ['personality:tricky']
    },
    'skill:sprinting': {
        difficulty: 1,
        ability: 'ability:activity',
        positive: true,
        type: 'skill_type:movement',
        personality: []
    },
    'skill:throwing': {
        difficulty: 3,
        ability: 'ability:activity',
        positive: true,
        type: 'skill_type:combat',
        personality: ['personality:tricky']
    },
    'skill:reactions': {
        difficulty: 1,
        ability: 'ability:activity',
        positive: true,
        type: 'skill_type:basic',
        personality: ['personality:cautious']
    },
    'skill:martial_arts': {
        difficulty: 3,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:combat',
        personality: ['personality:disciplined']
    },
    'skill:swords': {
        difficulty: 3,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:combat',
        personality: ['personality:aggressive', 'personality:disciplined']
    },
    'skill:alchemy': {
        difficulty: 3,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:knowledge',
        personality: ['personality:learned', 'personality:curious']
    },
    'skill:bows': {
        difficulty: 2,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:combat',
        personality: ['personality:tenacious']
    },
    'skill:crossbows': {
        difficulty: 1,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:combat',
        personality: ['personality:tricky']
    },
    'skill:balance': {
        difficulty: 1,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:movement',
        personality: ['personality:disciplined', "personality:cautious"]
    },
    'skill:medicine': {
        difficulty: 2,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:knowledge',
        personality: ['personality:learned', 'personality:helpful']
    },
    'skill:personal_charm': {
        difficulty: 2,
        ability: 'ability:presence',
        positive: true,
        type: 'skill_type:basic',
        personality: ['personality:selfish', 'personality:tricky']
    },
    'skill:spot_hidden': {
        difficulty: 1,
        ability: 'ability:presence',
        positive: true,
        type: 'skill_type:basic',
        personality: ['personality:curious']
    },
    'skill:bamboozling': {
        difficulty: 1,
        ability: 'ability:presence',
        positive: true,
        type: 'skill_type:basic',
        personality: ['personality:tricky', 'personality:resourceful']
    },
    'skill:reasoning': {
        difficulty: 1,
        ability: 'ability:presence',
        positive: false,
        type: 'skill_type:knowledge',
        personality: ['personality:learned', 'personality:polite']
    },
    'skill:hiding': {
        difficulty: 3,
        ability: 'ability:presence',
        positive: false,
        type: 'skill_type:basic',
        personality: ['personality:tenacious', 'personality:tricky']
    },
    'skill:camouflage': {
        difficulty: 2,
        ability: 'ability:presence',
        positive: false,
        type: 'skill_type:knowledge',
        personality: ['personality:resourceful', "personality:tricky"]
    },
    'skill:bushcraft': {
        difficulty: 1,
        ability: 'ability:presence',
        positive: false,
        type: 'skill_type:knowledge',
        personality: ['personality:helpful', 'personality:resourceful']
    },
    'skill:enchantment': {
        difficulty: 3,
        ability: 'ability:magic',
        positive: true,
        type: 'skill_type:knowledge',
        personality: ['personality:learned']
    },
    'skill:magic_resistance': {
        difficulty: 3,
        ability: 'ability:magic',
        positive: false,
        type: 'skill_type:basic',
        personality: ['personality:cautious', "personality:selfish"]
    },
    'skill:body_focus': {
        difficulty: 3,
        ability: 'ability:build',
        positive: true,
        type: 'skill_type:focus',
        personality: ['personality:disciplined']
    },
    'skill:life_focus': {
        difficulty: 3,
        ability: 'ability:build',
        positive: false,
        type: 'skill_type:focus',
        personality: ['personality:helpful']
    },
    'skill:spacetime_focus': {
        difficulty: 3,
        ability: 'ability:activity',
        positive: true,
        type: 'skill_type:focus',
        personality: ['personality:curious']
    },
    'skill:nature_focus': {
        difficulty: 3,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:focus',
        personality: ['personality:resourceful']
    },
    'skill:spirit_focus': {
        difficulty: 3,
        ability: 'ability:presence',
        positive: true,
        type: 'skill_type:focus',
        personality: ['personality:polite']
    },
    'skill:shadow_focus': {
        difficulty: 3,
        ability: 'ability:presence',
        positive: false,
        type: 'skill_type:focus',
        personality: ['personality:tricky']
    },
    'skill:history': {
        difficulty: 2,
        ability: 'skill_type:general',
        positive: true,
        type: 'skill_type:knowledge',
        personality: ['personality:learned']
    },
    'skill:geography': {
        difficulty: 2,
        ability: 'skill_type:general',
        positive: true,
        type: 'skill_type:knowledge',
        personality: ['personality:learned', 'personality:curious']
    },
    'skill:architecture': {
        difficulty: 2,
        ability: 'skill_type:general',
        positive: true,
        type: 'skill_type:knowledge',
        personality: ['personality:resourceful']
    },
    'skill:law': {
        difficulty: 2,
        ability: 'skill_type:general',
        positive: true,
        type: 'skill_type:knowledge',
        personality: ['personality:learned', 'personality:polite']
    },
    'skill:etiquette': {
        difficulty: 2,
        ability: 'skill_type:general',
        positive: true,
        type: 'skill_type:knowledge',
        personality: ['personality:polite', 'personality:disciplined']
    },
    'skill:tinkering': {
        difficulty: 2,
        ability: 'ability:activity',
        positive: false,
        type: 'skill_type:basic',
        personality: ['personality:resourceful', 'personality:curious']
    },
    'skill:trick_fighting': {
        difficulty: 2,
        ability: 'ability:build',
        positive: false,
        type: 'skill_type:basic',
        personality: ['personality:aggressive', 'personality:tricky']
    }
};

export type SkillType = 'skill_type:combat' | 'skill_type:focus' | 'skill_type:basic' | 'skill_type:movement' | 'skill_type:knowledge';

export type Skill = 'skill:endurance' |
    'skill:pain_threshold' |
    'skill:knives' |
    'skill:brawling' |
    'skill:strength' |
    'skill:magic_force' |
    'skill:elemental_focus' |
    'skill:polearms' |
    'skill:maces' |
    'skill:shields' |
    'skill:stalking' |
    'skill:climbing' |
    'skill:fistfighting' |
    'skill:jumping' |
    'skill:sprinting' |
    'skill:throwing' |
    'skill:reactions' |
    'skill:martial_arts' |
    'skill:swords' |
    'skill:alchemy' |
    'skill:bows' |
    'skill:crossbows' |
    'skill:balance' |
    'skill:medicine' |
    'skill:personal_charm' |
    'skill:spot_hidden' |
    'skill:bamboozling' |
    'skill:reasoning' |
    'skill:hiding' |
    'skill:camouflage' |
    'skill:bushcraft' |
    'skill:enchantment' |
    'skill:magic_resistance' |
    'skill:body_focus' |
    'skill:life_focus' |
    'skill:spacetime_focus' |
    'skill:nature_focus' |
    'skill:spirit_focus' |
    'skill:shadow_focus' |
    'skill:history' |
    'skill:geography' |
    'skill:architecture' |
    'skill:law' |
    'skill:etiquette' |
    'skill:swimming' |
    'skill:tinkering' |
    'skill:trick_fighting'
    ;

export const Skill = createList(SkillInfos);