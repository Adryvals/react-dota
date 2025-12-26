import { HEROES_URL } from './apiData';

export interface HeroData {
    name: string
    imgUrl: string
    attribute: 'strength' | 'agility' | "intelligence" | "universal"
    altImg: string,
    winrate: number,
    url: string,
}

export const abaddonImg = `${HEROES_URL}abaddon.png` //'../assets/heroes/abaddon.png'
export const vengefulspiritImg = `${HEROES_URL}vengefulspirit.png`
export const witchDoctorImg = `${HEROES_URL}witch_doctor.png`
export const skeletonKingImg = `${HEROES_URL}skeleton_king.png`
export const antiMageImg = `${HEROES_URL}antimage.png`

export const heroData: HeroData[] = [
    {
        name: "Abaddon",
        imgUrl: abaddonImg,
        attribute: "universal",
        altImg: "Dark shadowy knight character portrait",
        winrate: 56.4,
        url: "/heroes/abaddon"
    },
    {
        name: "Vengeful Spirit",
        imgUrl: vengefulspiritImg,
        attribute: "agility",
        altImg: "Mystical spirit character portrait",
        winrate: 55.1,
        url: "/heroes/vengeful-spirit"
    },
    {
        name: "Witch Doctor",
        attribute: "intelligence",
        imgUrl: witchDoctorImg,
        altImg: "Tribal doctor character portrait",
        winrate: 54.8,
        url: "/heroes/witch-doctor"
    },
    {
        name: "Wraith King",
        imgUrl: skeletonKingImg,
        attribute: "strength",
        altImg: "Undead king character portrait",
        winrate: 53.9,
        url: "/heroes/wraith-king"
    },
    {
        name: "Anti-Mage",
        imgUrl: antiMageImg,
        attribute: "agility",
        altImg: "Armored swordsman character portrait",
        winrate: 53.7,
        url: "/heroes/antimage"
    }
]