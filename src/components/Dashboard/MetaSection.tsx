import { Link } from "react-router-dom";
import { heroData, type HeroData } from "../../data/hero";

const heroList:HeroData[] = heroData;

const HeroCard = ({name, winrate, imgUrl, altImg} : HeroData) => {
    return (
          <div className="flex gap-4 rounded-xl border border-border-dark bg-card-dark p-4 items-center hover:bg-[#232730] transition-colors group cursor-pointer">
            <div className="relative size-16 shrink-0 rounded-lg overflow-hidden border border-gray-700 group-hover:border-primary transition-colors">
              <img
                  alt={altImg}
                  className="w-full h-full object-cover"
                  src={imgUrl}
              />
              </div>
              <div className="flex flex-col flex-1">
              <h2 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                  <Link to={`/heroes/${name}`}> {name} </Link>
              </h2>
              <div className="flex items-center gap-2 mt-1">
                  <span className="text-news-esports text-sm font-bold">
                  {winrate}%
                  </span>
                  <span className="text-gray-500 text-xs">Win Rate</span>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-news-esports w-[56.4%]"></div>
              </div>
            </div>
        </div>
    );
}

const MetaSection = () => {
  return (
        <div className="w-full max-w-300 px-4 md:px-10 py-8 bg-background-[] dark:bg-background-dark">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-4">
              Meta Snapshot{" "}
              <span className="text-gray-500 font-normal text-lg ml-2">
                Highest Win Rates
              </span>
            </h2>
            <a
              className="text-primary hover:text-white text-sm font-bold flex items-center gap-1 transition-colors"
              href="#"
            >
              View All Heroes{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                heroList && heroList.map((hero) => (
                    <HeroCard attribute={hero.attribute} name={hero.name} altImg={hero.altImg} imgUrl={hero.imgUrl} winrate={hero.winrate} key={hero.name} />
                ))
            }
          </div>
        </div>
  )
}

export default MetaSection