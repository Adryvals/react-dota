import HeaderSection from "../components/Heroes/HeaderSection"
import HeroAbilities from "../components/Heroes/HeroAbilities"
import HeroAttributes from "../components/Heroes/HeroAttributes"
import HeroGamesStats from "../components/Heroes/HeroGamesStats"
import HeroItems from "../components/Heroes/HeroItems"
import HeroTalentTree from "../components/Heroes/HeroTalentTree"

import { useParams } from "react-router-dom"
import { getHeroById } from "../interfaces/hero"

export const HeroData = () => {


    const params = useParams()
    const result = getHeroById(params.name!)

    return (
        <div className="layout-container flex h-full grow flex-col items-center bg-background-dark text-slate-900 dark:text-white overflow-x-hidden">
            <div className="w-full flex flex-col px-4 md:px-6 py-6 gap-2">
                {/* <!-- Hero Header Section --> */}
                <HeaderSection hero={result} />

                {/* <!-- Stats Bar --> */}
                <HeroGamesStats hero={result} />
                
                {/* <!-- Main Content Grid --> */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">

                    {/* <!-- Left Column (2/3 width on large screens) --> */}
                    <div className="xl:col-span-2 flex flex-col gap-3">

                        {/* <!-- Attributes Section --> */}
                        <HeroAttributes hero={result} />

                        {/* <!-- Abilities Section --> */}
                        <HeroAbilities hero={result} />

                    </div>

                    {/* <!-- Right Column (1/3 width) --> */}
                    <div className="flex flex-col gap-3">

                        {/* <!-- Talent Tree</div> --> */}
                        <HeroTalentTree hero={result} />

                        {/* <!-- Popular Items --> */}
                        <HeroItems hero={result} />
                    </div>
                </div>
            </div>
        </div>
    )
}
