import type { Weapon } from "./Weapon";

export const WEAPON_LIST: Array<Omit<Weapon, 'id'>> = [
    {
        name: 'Bollock dagger',
        attack: 4,
        damage: 3,
        defence: 1,
        hands: 0.5,
        reach: 1,
        skill: 'skill:knives',
        speed: 8,
        actions: {
            "action:attack-cq": 0,
            "action:close-in": -2,
            "action:defend-cq": 0,
            "action:defend": -3,
            "action:disengage": 0,
            "action:keep-close": 0,
            'action:attack-range': -4,
        }
    },
    {
        name: 'Quillon dagger',
        attack: 4,
        damage: 2,
        defence: 3,
        hands: 0.5,
        reach: 1,
        skill: 'skill:knives',
        speed: 8,
        actions: {
            "action:attack-cq": 0,
            "action:close-in": -1,
            "action:defend-cq": 0,
            "action:defend": -3,
            "action:disengage": 0,
            "action:keep-close": 0,
            'action:attack-range': -4,
        }
    },
    {
        name: 'Baselard',
        attack: 5,
        damage: 3,
        defence: 4,
        hands: 0.5,
        reach: 1,
        skill: 'skill:knives',
        speed: 7,
        actions: {
            "action:attack-cq": 0,
            "action:close-in": -1,
            "action:defend-cq": 0,
            "action:defend": -3,
            "action:disengage": 0,
            "action:keep-close": 0,
            'action:attack-range': -4,
        }
    },
    {
        name: 'Throwing Knife',
        attack: 5,
        damage: 3,
        defence: 1,
        hands: 0.5,
        reach: 1,
        skill: 'skill:knives',
        speed: 6,
        actions: {
            "action:attack-cq": -2,
            "action:close-in": -3,
            "action:defend-cq": -3,
            "action:defend": -4,
            'action:attack-range': 0,
        }
    },


]