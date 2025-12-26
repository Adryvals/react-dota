interface LiveMatchDataInterface
{
    live: boolean,
    name: string
    icon: string
    matchName: string
    time: string
    visitors: string
    visitorsWatch: boolean
    winProbability: string
    winProbabilityWatch: boolean
    ratingVisibility: boolean
    rating: number
}

const liveMatchData : LiveMatchDataInterface[] = [
    { 
        live: true,
        name: "Live Pro Match", 
        icon: "bar_chart", 
        matchName: "Team Spirit vs GG", 
        time: "Game 3 - 35:20", 
        visitorsWatch: true, 
        visitors: "22k", 
        winProbabilityWatch: false,
        winProbability: '35%',
        ratingVisibility: false,
        rating: 20,
    },
    {
        live: true,
        name: "Live Pro Match",
        icon: "swords", 
        matchName: "Liquid vs AR", 
        time: "Drafting Phase", 
        visitors: "1k", 
        winProbabilityWatch:true, 
        winProbability: '50%',
        rating: 20,
        ratingVisibility:false,
        visitorsWatch:false,
    },
    {
        live: false,
        name: "Result",
        icon: "trophy", 
        matchName: "Secret vs OG", 
        time: "2 - 1 Final", 
        rating: 25,
        ratingVisibility: true,
        visitors: "8k", 
        winProbability: '35%',
        visitorsWatch: false,
        winProbabilityWatch: false,
    },
]

const StatsCard = ({ live, name, icon, matchName, time, visitors, visitorsWatch, winProbability, winProbabilityWatch, ratingVisibility, rating }: LiveMatchDataInterface) => {
  return (
    <div className="flex min-w-70 flex-1 flex-col gap-3 rounded-xl p-5 bg-card-dark border border-border-dark hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg">
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
            {   
                live 
                ? <span className="size-2 rounded-full bg-red-500 animate-pulse"></span> 
                : <span className="material-symbols-outlined text-gray-400 text-[10px]">history</span>  
            }
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                {name}
            </p>
            </div>
            <span className="material-symbols-outlined text-gray-500 text-sm">
            {icon}
            </span>
        </div>
        <div>
            <p className="text-white text-lg font-bold">
            {matchName}
            </p>
            <p className="text-primary text-sm font-medium">
            {time}
            </p>
        </div>
        <div className="flex items-end justify-between mt-1">            
            { visitorsWatch && 
                <>
                    <div>
                        <p className="text-gray-400 text-xs">Net Worth Lead</p>
                        <p className="text-white font-mono font-bold text-xl">
                            {visitors} <span className="text-[#0bda5e] text-sm ml-1">▲</span>
                        </p>
                    </div>
                    <div className="h-1 w-20 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0bda5e] w-[75%]"></div>
                    </div>
                </>
            }
            { winProbabilityWatch && 
                <>
                    <div>
                        <p className="text-gray-400 text-xs">Win Probability</p>
                        <p className="text-white font-mono font-bold text-xl">
                            {winProbability} <span className="text-gray-500 text-sm ml-1">-</span>
                        </p>
                    </div>
                        <div className="h-1 w-20 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-500 w-[50%]"></div>
                    </div>
                </>
            }
            { ratingVisibility &&
                <>
                    <div>
                        <p className="text-gray-400 text-xs">Rating Change</p>
                        <p className="text-[#0bda5e] font-mono font-bold text-xl">
                        {rating > 0 ? "+" : "-" } {rating} <span className="text-[#0bda5e] text-sm ml-1">▲</span>
                        </p>
                    </div>
                    <div className="flex -space-x-2">
                        <div className="size-6 rounded-full bg-gray-600 border border-card-dark"></div>
                        <div className="size-6 rounded-full bg-gray-500 border border-card-dark"></div>
                        <div className="size-6 rounded-full bg-gray-400 border border-card-dark"></div>
                    </div>
                </>
            }
        </div>
    </div>
)};

const LiveMatchStats = () => {
  return (
    <div className="w-full bg-dark z-20 -mt-10 px-4 md:px-10 pb-12">
        <div className="max-w-300 mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
                { liveMatchData && liveMatchData.map((match, index) => (
                    <StatsCard 
                        key={index}
                        icon={match.icon} 
                        live={match.live}
                        matchName={match.matchName}
                        name={match.name}
                        rating={match.rating}
                        ratingVisibility={match.ratingVisibility}
                        time={match.time}
                        visitors={match.visitors}
                        visitorsWatch={match.visitorsWatch}
                        winProbability={match.winProbability}
                        winProbabilityWatch={match.winProbabilityWatch}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default LiveMatchStats