export interface HeroData {
    name: string
    imgUrl: string
    attribute: 'strength' | 'agility' | "intelligence" | "universal"
    altImg: string,
    winrate: number,
}

export const heroData: HeroData[] = [
    {
        name: "Abaddon",
        imgUrl: "/src/assets/heroes/abaddon.png",
        attribute: "universal",
        altImg: "Dark shadowy knight character portrait",
        winrate: 56.4
    },
    {
        name: "Vengeful Spirit",
        imgUrl: "src/assets/heroes/vengefulspirit.png",
        attribute: "agility",
        altImg: "Mystical spirit character portrait",
        winrate: 55.1
    },
    {
        name: "Witch Doctor",
        attribute: "intelligence",
        imgUrl: "src/assets/heroes/witch_doctor.png",
        altImg: "Tribal doctor character portrait",
        winrate: 54.8
    },
    {
        name: "Wraith King",
        imgUrl: "src/assets/heroes/skeleton_king.png",
        attribute: "strength",
        altImg: "Undead king character portrait",
        winrate: 53.9
    }


]