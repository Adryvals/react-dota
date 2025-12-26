export interface HeroData {
    name: string
    imgUrl: string
    attribute: 'strength' | 'agility' | "intelligence" | "universal"
    altImg: string,
    winrate: number,
}

import abaddonImg from '../assets/heroes/abaddon.png'
import vengefulspiritImg from '../assets/heroes/vengefulspirit.png'
import witchDoctorImg from '../assets/heroes/witch_doctor.png'
import skeletonKingImg from '../assets/heroes/skeleton_king.png'

export const heroData: HeroData[] = [
    {
        name: "Abaddon",
        imgUrl: abaddonImg,
        attribute: "universal",
        altImg: "Dark shadowy knight character portrait",
        winrate: 56.4
    },
    {
        name: "Vengeful Spirit",
        imgUrl: vengefulspiritImg,
        attribute: "agility",
        altImg: "Mystical spirit character portrait",
        winrate: 55.1
    },
    {
        name: "Witch Doctor",
        attribute: "intelligence",
        imgUrl: witchDoctorImg,
        altImg: "Tribal doctor character portrait",
        winrate: 54.8
    },
    {
        name: "Wraith King",
        imgUrl: skeletonKingImg,
        attribute: "strength",
        altImg: "Undead king character portrait",
        winrate: 53.9
    }


]