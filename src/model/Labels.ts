import type { Ability } from "./Abilities";
import type { ActionRoll, ActionVariant } from "./Action";
import type { Background } from "./Background";
import type { ExpressionNames, RuleLabels } from "./Rules";
import type { Skill, SkillType } from "./Skills";
import type { Ancestry } from "./Ancestry";
import type { Spell, SpellDurations, SpellTargets } from "./Spell";
import type { ArmourLabels } from "./Armour";

type GenericLabels = 'label:name' |
    'label:action' |
    'label:weapon' |
    'label:learn' |
    'label:edit' |
    'label:delete' |
    'label:new' |
    'label:create_character' |
    'label:character' |
    'character:skill' |
    'label:difficulty' |
    'label:type' |
    'label:rule' |
    'label:dice_roller' |
    'label:average' |
    'label:at_least' |
    'label:exactly' |
    'label:roll' |
    'label:wear' |
    'label:skill_check_success_probabilities' |
    'label:lore' |
    'label:close-quarters' |
    'label:in-range' |
    'label:out-of-range' |
    'label:any-range' |
    'label:range' |
    'label:counters' |
    'label:countered-by' |
    'label:reaction' |
    'label:armour' |
    'label:levelup' |
    'label:save' |
    'action:move' |
    'label:select-character' |
    'label:new-character' |
    'label:spell' |
    'label:spell_target' |
    'label:spell_duration' |
    'label:world' |
    'label:download_character' |
    'label:upload_character' |
    'label:previous_versions' |
    'label:restore_version' |
    'label:revert_to_saved' |
    'label:spell_strength' |
    'label:spell_count' |
    'label:notes' |
    'label:back_to_list' |
    'label:npcs' |
    'label:encounters' |
    'label:copy' |
    'label:paste' |
    'label:weapon:select_template' |
    'label:weapon:paste_here' |
    'label:logout' |
    'world:concept' |
    'world:realm' |
    'world:settlement' |
    'world:organisation' |
    'tableplop:roll' |
    'tableplop:synchronise' |
    'tableplop:export' |
    'tableplop:unsynchronise'
    ;

export const Keys = [
    'action:title',
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
    'character:spells',

    'weapon:speed',
    'weapon:difficulty',
    'weapon:skill',
    'weapon:reach',
    'weapon:attack',
    'weapon:defence',
    'weapon:hands',

    'label:difficulty:1',
    'label:difficulty:2',
    'label:difficulty:3',

    'skill_type:general',
    'weapon:effective_skill'

] as const;

export type LabelCollection = Record<Values, string>;

export type Values = typeof Keys[number] | Skill | Ability | ExpressionNames;

type Valueless = Background | ActionVariant | ActionRoll | Ancestry | Spell | SkillType | GenericLabels | RuleLabels | ArmourLabels | SpellTargets | SpellDurations;

export type Labels = Valueless | Values;
export const Labels_en: Record<Labels, string> = {
    'ability:build': 'Build',
    'ability:presence': 'Presence',
    'ability:activity': 'Activity',
    'ability:magic': 'Magic',

    'action:title': 'Actions',
    'action:attack': 'Attack',
    'action:attack-cq': 'Attack (Close Quarters)',
    'action:ap': 'Action Points',
    'action:roll': 'Roll',
    'label:damage': 'Damage',
    'action:defend': 'Defend',
    'action:defend-cq': 'Defend (Close Quarters)',
    'action:keep-away': 'Keep away',
    'action:close-in': 'Close in',
    'action:disengage': 'Disengage',
    'action:keep-close': 'Keep close',
    'action:attack-range': 'Attack (Ranged)',
    'action:defend-range': 'Defend (Ranged)',
    'action:move': 'Movement',
    'action:step-in': 'Step In',
    'action:step-out': 'Step Out',
    'action:do-nothing': 'Do Nothing',
    'action:cast': 'Cast',
    'action:cast-slow': 'Cast (Slow)',
    'action:cast-snap': 'Cast (Snapshot)',
    'action:trip': 'Trip/Topple Over',
    'action:hidden-weapon': 'Hidden Weapon',
    'action:knockout': 'Knockout',
    'action:spin-behind': 'Spin Behind',

    'armour:dr': 'Damage Reduction',
    'armour:hindrance': 'Hindrance',

    'label:name': 'Name',
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

    'background:bruiser': 'Bruiser',
    'background:sneak': 'Sneak',
    'background:hedge_wizard': 'Hedge Wizard',
    'background:tinker': 'Tinker',
    'background:assassin': 'Assassin',
    'background:rover': 'Rover',
    'background:charmer': 'Charmer',
    'background:witch': 'Witch',

    'expr:fp_base': 'Pain Tolerance Base',
    'expr:fp_per_level': 'Level Pain Tolerance',
    'expr:fp_total': 'Pain Tolerance Total',
    'expr:fp_roll': 'Pain Tolerance Roll',
    'expr:effective_spell_skill': 'Effective Skill',
    'expr:spell_level': 'Spell Level',
    'expr:spell_focus_skill': 'Focus skill',
    'expr:spell_speed': 'Spell speed',
    'expr:skill_level': 'Skill level',
    'expr:skill_ability': 'Ability',
    'expr:skill_difficulty': 'Difficulty',

    'label:action': 'Action',
    'label:weapon': 'Weapon',
    'label:difficulty:1': 'Easy',
    'label:difficulty:2': 'Average',
    'label:difficulty:3': 'Hard',
    'label:learn': 'Learn',
    'label:edit': 'Edit',
    'label:delete': 'Delete',
    'label:new': 'New',
    'label:character': 'Character',
    'label:create_character': 'Create Character',
    'character:background': 'Background',
    'character:skill': 'Skill',
    'label:difficulty': 'Difficulty',
    'character:ability': 'Ability',
    'label:type': 'Type',
    'label:rule': 'Rule',
    'label:dice_roller': 'Dice Roller',
    'label:average': 'Average',
    'label:at_least': 'Result is at Least...',
    'label:exactly': 'Result is exactly...',
    'label:roll': 'Roll',
    'label:skill_check_success_probabilities': 'Skill check success probabilities',
    'label:lore': 'Lore',
    'label:close-quarters': 'Close Quarters',
    'label:in-range': 'In Measure',
    'label:out-of-range': 'Out Of Measure',
    'label:any-range': 'Any Range',
    'label:range': 'Range',
    'label:counters': 'Counters',
    'label:countered-by': 'Countered by',
    'label:reaction': 'Reaction',
    'label:armour': 'Armour',
    'label:wear': 'Wear',
    'label:levelup': 'Level Up',
    'label:save': 'Save',
    'label:select-character': 'Select character',
    'label:new-character': 'New character',
    'label:spell': 'Spell',
    'label:spell_target': 'Target',
    'label:spell_duration': 'Duration',
    'label:world': 'World',
    'label:download_character': 'Download character',
    'label:upload_character': 'Upload character',
    'label:previous_versions': 'Previous versions',
    'label:restore_version': 'Restore',
    'label:revert_to_saved': 'Revert to saved',
    'label:spell_strength': 'Strength',
    'label:spell_count': 'Count',
    'label:notes': 'Notes',
    'label:back_to_list': 'Back to list',
    'label:npcs': 'Non-Player Characters',
    'label:encounters': 'Encounters',
    'label:copy': 'Copy',
    'label:paste': 'Paste',
    'label:weapon:select_template': 'Weapon Collection',
    'label:weapon:paste_here': 'Paste copied weapon here...',
    'label:logout': 'Logout',

    'rule:skills': 'Skills',
    'rule:exploding_dice': 'Exploding dice',
    'rule:combat': 'Combat',
    'rule:magic': 'Magic',
    'rule:changes': 'Rule Changes',

    'skill:endurance': 'Endurance',
    'skill:pain_threshold': 'Pain Threshold',
    'skill:brawling': 'Brawling',
    'skill:knives': 'Knives',
    'skill:strength': 'Strength',
    'skill:magic_force': 'Magic Force',
    'skill:elemental_focus': 'Elemental Focus',
    'skill:climbing': 'Climbing',
    'skill:maces': 'Maces',
    'skill:polearms': 'Polearms',
    'skill:stalking': 'Stalking',
    'skill:fistfighting': 'Fistfighting',
    'skill:jumping': 'Jumping',
    'skill:sprinting': 'Sprinting',
    'skill:throwing': 'Throwing Weapons',
    'skill:reactions': 'Reactions',
    'skill:martial_arts': 'Martial Arts',
    'skill:alchemy': 'Alchemy',
    'skill:bows': 'Bows',
    'skill:crossbows': 'Crossbows',
    'skill:swords': 'Swords',
    'skill:balance': 'Balance',
    'skill:medicine': 'Medicine',
    'skill:personal_charm': 'Personal Charm',
    'skill:spot_hidden': 'Spot Hidden',
    'skill:bamboozling': 'Bamboozling',
    'skill:reasoning': 'Reasoning',
    'skill:hiding': 'Hiding',
    'skill:camouflage': 'Camouflage',
    'skill:bushcraft': 'Bushcraft',
    'skill:enchantment': 'Enchantment',
    'skill:magic_resistance': 'Magic Resistance',
    'skill:body_focus': 'Body Focus',
    'skill:life_focus': 'Life Focus',
    'skill:spacetime_focus': 'Spacetime Focus',
    'skill:nature_focus': 'Nature Focus',
    'skill:spirit_focus': 'Spirit Focus',
    'skill:shields': 'Shields',
    'skill:shadow_focus': 'Shadow Focus',
    'skill:history': 'History',
    'skill:geography': 'Geography',
    'skill:architecture': 'Architecture',
    'skill:law': 'Law',
    'skill:etiquette': 'Etiquette',
    'skill:swimming': 'Swimming',
    'skill:tinkering': 'Tinkering',
    'skill:trick_fighting': 'Trick Fighting',

    'skill_type:basic': 'Basic',
    'skill_type:combat': 'Combat',
    'skill_type:focus': 'Focus',
    'skill_type:movement': 'Movement',
    'skill_type:knowledge': 'Knowledge',
    'skill_type:general': 'General',

    'ancestry:elven': 'Elven',
    'ancestry:orcish': 'Orcish',
    'ancestry:gnomish': 'Gnomish',
    'ancestry:dwarvish': 'Dwarvish',
    'ancestry:almarem': 'Almarem',
    'ancestry:godora': 'Godora',
    'ancestry:ilar': 'Ilar',
    'ancestry:kalovin': 'Kalovin',

    // 'spell:endure_weather': 'Endure Weather',
    // 'spell:fire_bolt': 'Fire Bolt',
    // 'spell:lightning_strike': 'Lightning Strike',
    'spell:suppress_pain': 'Suppress Pain',
    'spell:maintain_body_temperature': 'Maintain Body Temperature',
    'spell:hardened_skin': 'Hardened Skin',
    'spell:iron_fist': 'Iron Fist',
    'spell:jump': 'Jump',
    'spell:shout': 'Shout',
    'spell:sustenance': 'Sustenance',
    'spell:convert_life_to_magic': 'Life to Magic',
    'spell:sense_life': 'Sense Life',
    'spell:lend_life': 'Lend Life',
    'spell:heal': 'Heal',
    'spell:farsight': 'Farsight',
    'spell:extinguish_magic': 'Extinguish Magic',
    'spell:borrow_time': 'Borrow Time',
    'spell:lantern': 'Lantern',
    'spell:cleaning': 'Cleaning',
    'spell:sense_poison': 'Sense Poison',
    'spell:call_animals': 'Call Animals',
    'spell:thicket': 'Thicket',
    'spell:shelter': 'Shelter',
    'spell:lightning_strike': 'Lightning Strike',
    'spell:cloak_of_shadow': 'Cloak of Shadows',
    'spell:shadow_leap': 'Shadow Leap',
    'spell:whispering_shadows': 'Whispering Shadows',
    'spell:drain_magic': 'Drain Magic',
    'spell:darken': 'Darken',
    'spell:light_fire': 'Light Fire',
    'spell:fire_arrow': 'Fire Arrow',
    'spell:extinguish_fire': 'Extinguish Fire',
    'spell:heat_material': 'Heat Material',
    'spell:flameball': 'Flameball',
    'spell:tapestry_of_flame': 'Tapestry of Flame',
    'spell:magic_bolt': 'Magic Bolt',
    'spell:steel_will': 'Steel Will',
    'spell:message': 'Message',
    'spell:read_emotions': 'Read Emotions',
    'spell:commune_with_spirits': 'Commune with Spirits',
    'spell:write_memories': 'Write Memories',
    'spell:blunt_senses': 'Blunt Senses',
    'spell:fool_senses': 'Fool Senses',
    'spell:spirit_shroud': 'Spirit Shroud',
    'spell:telekinesis': 'Telekinesis',
    'spell:strike_from_afar': 'Strike From Afar',
    'spell:silence_of_forests': 'Silence of Forestst',
    'spell:slow_metabolism': 'Slow Metabolism',
    'spell:suspended_animation': 'Suspended Animation',
    'spell:insignificance': 'Insignificance',


    'spell_duration:instant': 'instant',
    'spell_duration:round': 'round',
    'spell_duration:hour': 'hour',
    'spell_duration:day': 'day',

    'spell_target:self': 'self',
    'spell_target:touch': 'touch',
    'spell_target:point': 'point',
    'spell_target:other': 'other',

    'tableplop:roll': 'roll',
    'tableplop:synchronise': 'Synchronise with Tableplop character',
    'tableplop:export': 'Export to Tableplop',
    'tableplop:unsynchronise': 'Remove Tableplop character synchronisation',


    'weapon:speed': 'Speed',
    'weapon:difficulty': 'Difficulty',
    'weapon:skill': 'Skill',
    'weapon:effective_skill': 'Effective Skill',
    'weapon:attack': 'Attack',
    'weapon:defence': 'Defence',
    'weapon:hands': 'Hands',
    'weapon:reach': 'Reach',

    'world:concept': 'Concept',
    'world:realm': 'Realm',
    'world:settlement': 'Settlement',
    'world:organisation': 'Organisatoin',


};

export const Labels_hu: Record<Labels, string> = {
    'ability:build': 'Testalkat',
    'ability:presence': 'Jelenlét',
    'ability:activity': 'Aktivitás',
    'ability:magic': 'Mágia',

    'action:title': 'Akciók',
    'action:attack': 'Támadás',
    'action:attack-cq': 'Támadás (Belharc)',
    'action:ap': 'Akciópont',
    'action:roll': 'Dobás',
    'action:cast': 'Varázslás',
    'action:cast-slow': 'Varázslás (Lassú)',
    'action:cast-snap': 'Varázslás (Csípőből)',

    'action:defend': 'Védekezés',
    'action:defend-cq': 'Védekezés (Belharc)',
    'action:keep-away': 'Távoltartás',
    'action:close-in': 'Közelkerülés',
    'action:disengage': 'Eltávolodás',
    'action:keep-close': 'Közeltartás',
    'action:attack-range': 'Támadás (Távolról)',
    'action:defend-range': 'Védekezés (Távolról)',
    'action:move': 'Mozgás',
    'action:step-in': 'Belépés',
    'action:step-out': 'Kilépés',
    'action:do-nothing': 'Semmi',
    'action:trip': 'Gáncsolás/Felborítás',
    'action:hidden-weapon': 'Rejtett fegyver',
    'action:knockout': 'Leütés',
    'action:spin-behind': 'Mögéperdülés',

    'ancestry:elven': 'Elf',
    'ancestry:orcish': 'Ork',
    'ancestry:gnomish': 'Gnóm',
    'ancestry:dwarvish': 'Törp',
    'ancestry:almarem': 'Almarem',
    'ancestry:godora': 'Godora',
    'ancestry:ilar': 'Ilar',
    'ancestry:kalovin': 'Kalovin',

    'armour:dr': 'Sebzéscsökkentés',
    'armour:hindrance': 'Akadály',

    'background:bruiser': 'Balhés',
    'background:sneak': 'Sunyi',
    'background:hedge_wizard': 'Sufnimágus',
    'background:tinker': 'Ezermester',
    'background:assassin': 'Orgyilkos',
    'background:rover': 'Kóborló',
    'background:charmer': 'Bájgúnár',
    'background:witch': 'Vajákos',

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

    'expr:fp_base': 'Fájdalomtűrés Alap',
    'expr:fp_per_level': 'Szintenkénti Fájdalomtűrés',
    'expr:fp_total': 'Fájdalomtűrés',
    'expr:fp_roll': 'Fájdalomtűrés Dobás',
    'expr:effective_spell_skill': 'Hatásos Képzettség',
    'expr:spell_level': 'Varázslat Szintje',
    'expr:spell_focus_skill': 'Fókusz képzettség',
    'expr:spell_speed': 'Varázslat sebessége',
    'expr:skill_level': 'Képzettség szintje',
    'expr:skill_ability': 'Tulajdonság',
    'expr:skill_difficulty': 'Nehézség',

    'label:action': 'Akció',
    'label:damage': 'Sebzés',
    'label:difficulty:1': 'Könnyű',
    'label:difficulty:2': 'Átlagos',
    'label:difficulty:3': 'Nehéz',
    'label:learn': 'Tanulás',
    'label:edit': 'Szerkeszt',
    'label:delete': 'Töröl',
    'label:new': 'Új',
    'label:character': 'Karakter',
    'label:create_character': 'Új karakter',
    'label:difficulty': 'Nehézség',
    'label:type': 'Típus',
    'label:dice_roller': 'Kocka Szimulátor',
    'label:average': 'Átlag',
    'label:at_least': 'Az eredmény legalább...',
    'label:exactly': 'Az eredmény pontosan...',
    'label:name': 'Név',
    'label:roll': 'Dobás',
    'label:skill_check_success_probabilities': 'Sikeres képzettségpróba esélye',
    'label:lore': 'Kódex',
    'label:close-quarters': 'Belharc',
    'label:in-range': 'Közelharc',
    'label:out-of-range': 'Távol',
    'label:any-range': 'Bármely távolság',
    'label:range': 'Távolság',
    'label:counters': 'Ennek ál ellen',
    'label:countered-by': 'Ez ál ellen neki',
    'label:reaction': 'Reakció',
    'label:armour': 'Páncél',
    'label:wear': 'Visel',
    'label:levelup': 'Szintlépés',
    'label:save': 'Mentés',
    'label:select-character': 'Válassz karaktert',
    'label:new-character': 'Új karakter',
    'label:weapon': 'Fegyver',
    'label:rule': 'Szabály',
    'label:spell': 'Varázslat',
    'label:spell_target': 'Célpont',
    'label:spell_duration': 'Időtartam',
    'label:world': 'Világ',
    'label:download_character': 'Karakter letöltése',
    'label:upload_character': 'Karakter feltöltése',
    'label:previous_versions': 'Korábbi verziók',
    'label:restore_version': 'Visszaállít',
    'label:revert_to_saved': 'Vissza a legutóbbi mentéshez',
    'label:spell_strength': 'Erősítés',
    'label:spell_count': 'Darab',
    'label:notes': 'Jegyzetek',
    'label:back_to_list': 'Vissza a listához',
    'label:npcs': 'Nem-Játékos Karakterek',
    'label:encounters': 'Találkozások',
    'label:copy': 'Másolás',
    'label:paste': 'Beilleszt',
    'label:weapon:select_template': 'Fegyvergyűjtemény',
    'label:weapon:paste_here': 'Másolt fegyver beillesztése...',
    'label:logout': 'Kilépés',

    'rule:skills': 'Képzettségek',
    'rule:exploding_dice': 'Robbantott kockadobás',
    'rule:combat': 'Harc',
    'rule:magic': 'Mágia',
    'rule:changes': 'Szabályváltozások',

    'skill:endurance': 'Állóképesség',
    'skill:pain_threshold': 'Fájdalomküszöb',
    'skill:brawling': 'Bunyó',
    'skill:knives': 'Kés',
    'skill:strength': 'Erő',
    'skill:magic_force': 'Mágikus erő',
    'skill:elemental_focus': 'Őselemi fókusz',
    'skill:climbing': 'Mászás',
    'skill:maces': 'Buzogány',
    'skill:polearms': 'Szálfegyver',
    'skill:stalking': 'Lopakodás',
    'skill:fistfighting': 'Ökölharc',
    'skill:jumping': 'Ugrás',
    'skill:sprinting': 'Sprintelés',
    'skill:throwing': 'Dobófegyver',
    'skill:reactions': 'Reflex',
    'skill:martial_arts': 'Harcművészet',
    'skill:alchemy': 'Alkímia',
    'skill:bows': 'Íjászat',
    'skill:crossbows': 'Számszeríj',
    'skill:shields': 'Pajzs',
    'skill:swords': 'Kard',
    'skill:balance': 'Egyensúly',
    'skill:medicine': 'Orvoslás',
    'skill:personal_charm': 'Személyes varázs',
    'skill:spot_hidden': 'Rejtett dolgok felfedezése',
    'skill:bamboozling': 'Szemfényvesztés',
    'skill:reasoning': 'Érvelés',
    'skill:hiding': 'Rejtőzés',
    'skill:camouflage': 'Álcázás',
    'skill:bushcraft': 'Túlélés',
    'skill:enchantment': 'Bájolás',
    'skill:magic_resistance': 'Mágiaellenállás',
    'skill:body_focus': 'Testi fókusz',
    'skill:life_focus': 'Élet fókusz',
    'skill:spacetime_focus': 'Téridő fókusz',
    'skill:nature_focus': 'Természet fókusz',
    'skill:spirit_focus': 'Szellem fókusz',
    'skill:shadow_focus': 'Árnyék fókusz',
    'skill:history': 'Történelem',
    'skill:geography': 'Földrajz',
    'skill:architecture': 'Építészet',
    'skill:law': 'Jog',
    'skill:etiquette': 'Etikett',
    'skill:swimming': 'Úszás',
    'skill:tinkering': 'Bütykölés',
    'skill:trick_fighting': 'Cseles harc',

    'skill_type:basic': 'Alap',
    'skill_type:combat': 'Harci',
    'skill_type:focus': 'Fókusz',
    'skill_type:movement': 'Mozgás',
    'skill_type:knowledge': 'Tudás',
    'skill_type:general': 'Általános',

    // 'spell:fire_bolt': 'Tűznyíl',
    // 'spell:lightning_strike': 'Villámcsapás',
    // 'spell:endure_weather': 'Időjárás Elviselése',
    'spell:suppress_pain': 'Fájdalom elnyomása',
    'spell:maintain_body_temperature': 'Testhőmérséklet fenntartása',
    'spell:hardened_skin': 'Keményített bőr',
    'spell:iron_fist': 'Vasököl',
    'spell:jump': 'Ugrás',
    'spell:shout': 'Kiáltás',
    'spell:sustenance': 'Önfenntartás',
    'spell:convert_life_to_magic': 'Életből Mágia',
    'spell:sense_life': 'Élet érzékelése',
    'spell:lend_life': 'Élet kölcsönadása',
    'spell:heal': 'Gyógyítás',
    'spell:farsight': 'Távolbalátás',
    'spell:extinguish_magic': 'Mágia kioltása',
    'spell:borrow_time': 'Kölcsönzött idő',
    'spell:lantern': 'Lámpás',
    'spell:cleaning': 'Tisztítás',
    'spell:sense_poison': 'Méreg érzékelése',
    'spell:call_animals': 'Állatok hívása',
    'spell:thicket': 'Burján',
    'spell:shelter': 'Menedék',
    'spell:lightning_strike': 'Villámcsapás',
    'spell:cloak_of_shadow': 'Árnyékköpeny',
    'spell:shadow_leap': 'Árnyugrás',
    'spell:whispering_shadows': 'Suttogó Árnyak',
    'spell:drain_magic': 'Mágia elszívása',
    'spell:darken': 'Sötétítés',
    'spell:light_fire': 'Tűzgyújtás',
    'spell:fire_arrow': 'Tűznyíl',
    'spell:extinguish_fire': 'Tűzkoppintás',
    'spell:heat_material': 'Anyag hevítése',
    'spell:flameball': 'Lánglabda',
    'spell:tapestry_of_flame': 'Tűzkárpit',
    'spell:magic_bolt': 'Varázsnyíl',
    'spell:steel_will': 'Acélos akarat',
    'spell:message': 'Üzenet',
    'spell:read_emotions': 'Érzelmek olvasása',
    'spell:commune_with_spirits': 'Szellemtanács',
    'spell:write_memories': 'Emlékírás',
    'spell:blunt_senses': 'Érzéktompítás',
    'spell:fool_senses': 'Érzékcsalódás',
    'spell:spirit_shroud': 'Szellemfátyol',
    'spell:telekinesis': 'Telekinézis',
    'spell:strike_from_afar': 'Távoli csapás',
    'spell:silence_of_forests': 'Erdők csendje',
    'spell:slow_metabolism': 'Anyagcsere lassítása',
    'spell:suspended_animation': 'Tetszhalál',
    'spell:insignificance': 'Jelentéktelenség',

    'spell_duration:instant': 'azonnali',
    'spell_duration:round': 'kör',
    'spell_duration:hour': 'óra',
    'spell_duration:day': 'nap',

    'spell_target:self': 'varázsló',
    'spell_target:touch': 'érintés',
    'spell_target:point': 'mutatás',
    'spell_target:other': 'egyéb',

    'tableplop:roll': 'dobás',
    'tableplop:synchronise': 'Tableplop karakter szinkronizálása',
    'tableplop:export': 'Exportálás Tableplopra',
    'tableplop:unsynchronise': 'Tableplop karakter szinkronizálás megszüntetése',

    'weapon:speed': 'Sebesség',
    'weapon:difficulty': 'Nehézség',
    'weapon:skill': 'Képzettség',
    'weapon:effective_skill': 'Hatásos Képzettség',
    'weapon:attack': 'Támadás',
    'weapon:hands': 'Kéz',
    'weapon:defence': 'Védekezés',
    'weapon:reach': 'Ütőtáv',

    'world:concept': 'Fogalom',
    'world:realm': 'Birodalom',
    'world:settlement': 'Település',
    'world:organisation': 'Szervezet',

};

export const convertToDescription = <T extends string>(ob: Record<T, string>): Record<string, string> => Object.fromEntries(Object.entries(ob).map(([key, value]) => ([`description:${key}`, value as string])));

export type Language = 'en' | 'hu';


