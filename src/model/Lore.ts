const Lore: Record<string, Record<string, Promise<typeof import("*?raw")>>> = {
    en: {
        'character:skills': import('$lib/lore/character/skills_en.md?raw'),
        'rule:exploding_dice': import('$lib/lore/rule/exploding_dice_en.md?raw'),
        'rule:learning_skills': import('$lib/lore/rule/learning_skills_en.md?raw'),
        'character:abilities': import('$lib/lore/character/abilities_en.md?raw'),
        'ability:build': import('$lib/lore/ability/build_en.md?raw'),
        'ability:activity': import('$lib/lore/ability/activity_en.md?raw'),
        'ability:presence': import('$lib/lore/ability/presence_en.md?raw'),
        'ability:magic': import('$lib/lore/ability/magic_en.md?raw'),
        'character:ancestry': import('$lib/lore/character/ancestry_en.md?raw'),
        'ancestry:kalovin': import('$lib/lore/ancestry/kalovin_en.md?raw'),
        'ancestry:almarem': import('$lib/lore/ancestry/almarem_en.md?raw'),
        'ancestry:ilar': import('$lib/lore/ancestry/ilar_en.md?raw'),
        'ancestry:godora': import('$lib/lore/ancestry/godora_en.md?raw'),
        'ancestry:dwarvish': import('$lib/lore/ancestry/dwarvish_en.md?raw'),
        'ancestry:elven': import('$lib/lore/ancestry/elven_en.md?raw'),
        'ancestry:gnomish': import('$lib/lore/ancestry/gnomish_en.md?raw'),
        'ancestry:orcish': import('$lib/lore/ancestry/orcish_en.md?raw'),
        'skill:balance': import('$lib/lore/skill/balance_en.md?raw'),
        'skill:body_focus': import('$lib/lore/skill/body_focus_en.md?raw'),
        'skill:brawling': import('$lib/lore/skill/brawling_en.md?raw'),
        'skill:maces': import('$lib/lore/skill/maces_en.md?raw'),
        'skill:pain_threshold': import('$lib/lore/skill/pain_threshold_en.md?raw'),
        'skill:polearms': import('$lib/lore/skill/polearms_en.md?raw'),
        'skill:strength': import('$lib/lore/skill/strength_en.md?raw'),
        'skill:climbing': import('$lib/lore/skill/climbing_en.md?raw'),
        'skill:endurance': import('$lib/lore/skill/endurance_en.md?raw'),
        'skill:life_focus': import('$lib/lore/skill/life_focus_en.md?raw'),
        'skill:stalking': import('$lib/lore/skill/stalking_en.md?raw'),
        'skill:fistfighting': import('$lib/lore/skill/fistfighting_en.md?raw'),
        'skill:jumping': import('$lib/lore/skill/jumping_en.md?raw'),
        'skill:knives': import('$lib/lore/skill/knives_en.md?raw'),
        'skill:reactions': import('$lib/lore/skill/reactions_en.md?raw'),
        'skill:law': import('$lib/lore/skill/law_en.md?raw'),
    }
}


export const lore = async (id: string, lang: string | null | undefined): Promise<string> => (await Lore[lang ?? 'en'][id]).default;

