import { E, type EvalExpression, type Expression } from "../../logic/Expression";
import { ACTION_VARIANT_PROPERTIES, type Action, type ActionDistance, type ActionVariant, type ActionVariantInfo, type Roll } from "../Action";
import { keys } from "../InfoList";
import { ATTACK_AP, WEAPON_ATK, WEAPON_DEF } from "../Rules";
import { Skill } from "../Skills";
import type { Weapon } from "../Weapon";

const ROLLS: Partial<Record<ActionVariant, Expression>> = {
    'action:attack': WEAPON_ATK,
    'action:attack-cq': WEAPON_ATK,
    'action:attack-range': WEAPON_ATK,
    'action:keep-away': WEAPON_ATK,
    //'action:disarm': WEAPON_DISARM,
    'action:defend': WEAPON_DEF,
    'action:defend-cq': WEAPON_DEF,
    'action:defend-range': WEAPON_DEF,
    'action:close-in': WEAPON_DEF,
    'action:disengage': WEAPON_DEF,
    'action:keep-close': WEAPON_ATK
};

const APS: Partial<Record<ActionVariant, Expression>> = {
    'action:attack': ATTACK_AP,
    'action:attack-cq': ATTACK_AP,
    'action:attack-range': ATTACK_AP,
    //'action:disarm': ATTACK_AP,
    'action:close-in': ATTACK_AP,
    'action:disengage': ATTACK_AP,
};

export const calculateWeaponAction = (skills: Partial<Record<Skill, number>>, weapon: Weapon): Action => ({
    name: weapon.name,
    variants: keys(weapon.actions).map(v => calculateVariant(v, skills, weapon))
});

const ReachMultipliers: Record<ActionDistance, number> = {
    'close-quarters': -2,
    'in-range': 2,
    'out-of-range': 0
};

const calculateSkill = (characterSkill?: number, actionModifier = 0): number => {
    if (characterSkill) {
        return actionModifier + (characterSkill ?? 0);
    } else {
        return Math.min(0, actionModifier)
    }
}

const calculateVariant = (name: ActionVariant, skills: Partial<Record<Skill, number>>, weapon: Weapon): ActionVariantInfo => {
    const ap = APS[name];
    const roll = ROLLS[name] as Expression;
    const damage = name === 'action:attack' || name === 'action:attack-cq' ? weapon.damage : 0;
    const skill = calculateSkill(skills[weapon.skill], weapon.actions[name]);
    const difficulty = Skill.get(weapon.skill).difficulty;

    const rolls: Array<Roll> = [];
    const args = {
        'weapon:speed': weapon.speed,
        'weapon:attack': weapon.attack,
        'weapon:defence': weapon.defence,
        'weapon:difficulty': difficulty,
        'weapon:skill': skill,
        'weapon:reach': ReachMultipliers[ACTION_VARIANT_PROPERTIES[name].distance] * weapon.reach,
    };
    if (ap) {
        rolls.push(apRoll(E.evaluate(ap, args)));
    }
    rolls.push(d100roll(E.evaluate(roll, args)));
    if (damage) {
        rolls.push(damageRoll(damage));
    }
    return {
        name,
        rolls
    }
}

const d100roll = (roll: EvalExpression): Roll => ({
    name: 'action:roll',
    roll,
    rollString: `1d100 + ${roll.result}`,
});

const apRoll = (roll: EvalExpression): Roll => ({
    name: 'action:ap',
    roll
});

const damageRoll = (dice: number): Roll => ({
    name: 'label:damage',
    roll: E.constant(`${dice}d5!`),
    rollString: `${dice}d5!`
})