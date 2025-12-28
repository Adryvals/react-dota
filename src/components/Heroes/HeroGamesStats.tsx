import type { HeroInterface } from "../../interfaces/hero"

interface HeroGamesStatsProps {
  hero: HeroInterface
}

const HeroGamesStats = ({ hero }: HeroGamesStatsProps) => {
  return (
    <div>
        <div className="flex flex-wrap gap-4 w-full">
            <div className="flex-1 min-w-35 bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                <span className="text-green-400 text-2xl font-bold">{hero.metaData!.winRate}%</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Win Rate</span>
            </div>
            <div className="flex-1 min-w-35 bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                <span className="text-white text-2xl font-bold">{hero.metaData!.pickRate}%</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Pick Rate</span>
            </div>
            <div className="flex-1 min-w-35 bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                <span className="text-blue-400 text-2xl font-bold">{hero.metaData!.kda}</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">KDA Ratio</span>
            </div>
            <div className="flex-1 min-w-35 bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                <span className="text-yellow-400 text-2xl font-bold">{hero.metaData!.gpm}</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">GPM</span>
            </div>
            <div className="flex-1 min-w-35 bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                <span className="text-orange-400 text-2xl font-bold">{hero.metaData!.xpm}</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">XPM</span>
            </div>
        </div>
    </div>
  )
}

export default HeroGamesStats