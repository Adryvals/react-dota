import { API_HEROS, HERO_ANIMATION, HERO_ATTRIBUTE, HERO_ATTRIBUTE_URL } from "../data/apiData";
import { API_HERO_STATS } from "../data/heroStats";

export interface HeroInterface {
    id: number | 1,
    name: string | null,
    img: string | null
    roles: string[] | null,
    description: string | null,
    complexity: number | 0,
    metaData: HeroMetaData | null
    attributes: HeroAttributes | null,
    abilities: HeroAbilities[] | null,
    animation: string | null
}

export interface RolesData {
    name: string | null,
    isPrimary: boolean | false
}

export interface HeroMetaData
{
    winRate: number | 0,
    pickRate: number | 0,
    kda: number | 0,
    gpm: number | 0,
    xpm: number | 0,
}

export interface HeroAttributes {
    attributeIcon: string | null,
    primaryAttribute: string | null,

    baseStrength: number | 0,
    plusStrength: number | 0,

    baseAgility: number | 0,
    plusAgility: number | 0,

    baseIntelligence: number | 0,
    plusIntelligence: number | 0,

    attackDamageMin: number | 0,
    attackDamageMax: number | 0,

    armor: number | 0,

    moveSpeed: number | 0,

    attackRange: number | 0,
}

export interface HeroAbilities {
    name: string | null,
    description: string | null,
    img: string | null,
    manaCost: number | null,
    cooldown: number | null,
    passiveTrait: boolean | false,
}

let result : HeroInterface = { 
    id: 0,
    name: "",
    img: "",
    abilities: [],
    attributes: 
    {
        attributeIcon: "",
        armor: 0,
        attackDamageMax: 0,
        attackDamageMin: 0,
        attackRange: 0,
        baseAgility: 0,
        baseIntelligence: 0,
        baseStrength: 0,
        moveSpeed: 0,
        plusAgility: 0,
        plusIntelligence: 0,
        plusStrength: 0,
        primaryAttribute: ""
    },
    complexity: 0,
    description: "",
    metaData: null,
    roles: null,
    animation: HERO_ANIMATION + ""
};

export function getHeroes() : HeroInterface[]
{
    const heroes = new Array<HeroInterface>;

    API_HEROS.map((hero) => {
        const heroData : HeroInterface = { 
            id: hero.id,
            name: hero.name_english_loc,
            img: hero.image,
            abilities: [],
            attributes: 
            {
                attributeIcon: hero.attribute_img,
                armor: 0,
                attackDamageMax: 0,
                attackDamageMin: 0,
                attackRange: 0,
                baseAgility: 0,
                baseIntelligence: 0,
                baseStrength: 0,
                moveSpeed: 0,
                plusAgility: 0,
                plusIntelligence: 0,
                plusStrength: 0,
                primaryAttribute: 
                    hero.primary_attr == 0 ? HERO_ATTRIBUTE_URL.STRENGTH :
                    hero.primary_attr == 1 ? HERO_ATTRIBUTE_URL.AGILITY :
                    hero.primary_attr == 2 ? HERO_ATTRIBUTE_URL.INTELLIGENCE :
                    HERO_ATTRIBUTE_URL.UNIVERSAL,
            },
            complexity: hero.complexity,
            description: "",
            metaData: null,
            roles: null,
            animation: HERO_ANIMATION
        };

        heroes.push(heroData)
    })

    return heroes;
}

export function getHeroById(name:string) : HeroInterface
{
    API_HEROS.map((hero) => {
        if (name == hero.name_english_loc.toString())
        {
            result = { 
                id: hero.id,
                name: hero.name_english_loc,
                img: hero.image,
                abilities: [],
                attributes: 
                {
                    attributeIcon: hero.attribute_img,
                    armor: 0,
                    attackDamageMax: 0,
                    attackDamageMin: 0,
                    attackRange: 0,
                    baseAgility: 0,
                    baseIntelligence: 0,
                    baseStrength: 0,
                    moveSpeed: 0,
                    plusAgility: 0,
                    plusIntelligence: 0,
                    plusStrength: 0,
                    primaryAttribute: 
                        hero.primary_attr == 0 ? HERO_ATTRIBUTE.STRENGTH :
                        hero.primary_attr == 1 ? HERO_ATTRIBUTE.AGILITY :
                        hero.primary_attr == 2 ? HERO_ATTRIBUTE.INTELLIGENCE :
                        HERO_ATTRIBUTE.UNIVERSAL,
                },
                complexity: hero.complexity,
                description: "",
                metaData: {
                    gpm: 0,
                    kda:0,
                    pickRate: 0,
                    winRate: 0,
                    xpm: 0
                },
                roles: null,
                animation: HERO_ANIMATION + hero.name.replace("npc_dota_hero_", "")
            };
        }
    })

    API_HERO_STATS.map((hero) => {
        if (result && result.attributes)
        {
            if (hero.id === result.id)
            {
                result.roles = hero.roles
                result.attributes.armor = hero.base_armor
                result.attributes.attackDamageMax = hero.base_attack_max
                result.attributes.attackDamageMin = hero.base_attack_min
                result.attributes.attackRange = hero.attack_range
                result.attributes.baseAgility = hero.base_agi
                result.attributes.baseIntelligence = hero.base_int
                result.attributes.baseStrength = hero.base_str
                result.attributes.moveSpeed = hero.move_speed
                result.attributes.plusAgility = hero.agi_gain
                result.attributes.plusIntelligence = hero.int_gain
                result.attributes.plusStrength = hero.str_gain
            }
        }
    });

    return result
} 