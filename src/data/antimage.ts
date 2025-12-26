import { antiMageImg } from "../data/hero"

export interface HeaderSectionProps {
    name: string,
    roles: string[],
    description: string,
    attributeIcon: string,
    primaryAttribute: string,
    complexity: number,
    winRate: number,
    pickRate: number,
    kda: number,
    gpm: number,
    xpm: number,
    img: string
}

export const headerSectionData : HeaderSectionProps =
{
    name: "Anti-Mage",
    img: antiMageImg,
    roles: ["Melee","Carry","Escape","Nuker"],
    description: "The monks of Turstarkuri watched the rugged valleys below their mountain monastery as wave after wave of invaders swept through the lower kingdoms.",
    attributeIcon: "wind_power",
    primaryAttribute: "Agility",
    complexity: 1,
    winRate: 52.4,
    pickRate: 14.2,
    kda: 3.15,
    gpm: 624,
    xpm: 718,
}
