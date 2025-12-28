import type { HeroInterface } from "../../interfaces/hero";

interface HeaderSectionProps {
  hero: HeroInterface;
}

const getAttributeColor = (attribute: string | null | undefined): string => {
  switch(attribute) {
    case HERO_ATTRIBUTE.STRENGTH:
      return "red-800";
    case HERO_ATTRIBUTE.AGILITY:
      return "news-esports";
    case HERO_ATTRIBUTE.INTELLIGENCE:
      return "primary";
    case HERO_ATTRIBUTE.UNIVERSAL:
      return "fuchsia-800";
    default:
      return "#4f46e5";
  }
}

import { HERO_ATTRIBUTE } from "../../data/apiData";

const HeaderSection = ({ hero }: HeaderSectionProps) => {

  const attribute = getAttributeColor(hero.attributes?.primaryAttribute);

  console.log(attribute)


  return (
    <div className="relative w-full rounded-xl overflow-hidden min-h-50 flex flex-col justify-end group shadow-2xl">
      {/* <!-- Background Image with Overlay --> */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
        data-alt="Abstract purple and blue gaming atmosphere"
        style={{ backgroundImage: `url(${hero.img})` }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/60 to-transparent z-10"></div>
      {/* <!-- Content --> */}
      <div className="relative z-20 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center">
          {/* <!-- Hero Display Animation --> */}
          <div className="hidden sm:flex">
              <video
              className="w-40 -webkit-mask-image: linear-gradient(to top, transparent 10%, black 50%); mask-image: linear-gradient(to top, transparent 10%, black 50%);"
              poster={`${hero.animation}.png`}
              preload="auto"
              autoPlay
              loop
              playsInline
            >
              <source
                type='video/mp4; codecs="hvc1"'
                src={`${hero.animation}.mov`}
              />
              <source
                type="video/webm"
                src={`${hero.animation}.webm?undefined`}
              />
              <img
                src={`${hero.animation}.png`}
                alt={`${hero.name} render`}
              />
            </video>

          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-2">
              {hero.roles && hero.roles.map((role, index) => (
                <span
                  key={role}
                  className={`${
                    index === 0
                      ? "bg-primary/20 text-blue-200 border-primary/30"
                      : "bg-white/10 text-gray-200 border-white/10"
                  } px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider`}
                >
                  {role}
                </span>
              ))}
            </div>
            <h1 className="text-white text-2xl md:text-5xl font-bold tracking-tight drop-shadow-lg">
              {hero!.name}
            </h1>
            <p className="text-sm text-gray-400 font-body italic">
              "Magic is an abomination."
            </p>
            <p className="text-gray-300 text-lg mt-1 font-body">
              {hero.description}  
              <button className="pl-0.5 text-primary font-body uppercase tracking-wide hover:underline">
                Read Full Lore
              </button>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className={`border-${attribute} size-10 rounded-full border-4 flex items-center justify-center bg-[#1c212c]`}>
                {hero.attributes?.attributeIcon && <img src={hero.attributes.attributeIcon} alt="" />}
            </div>
            <span className="mt-2 text-sm font-bold text-gray-400">
              {hero.attributes?.primaryAttribute?.toUpperCase()}
            </span>
          </div>
          <div className="h-12 w-px bg-white/20"></div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">
              Complexity
            </span>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3].map((complexity) => (
                <div
                  key={complexity}
                  className={`h-2 w-6 rounded-sm ${
                    complexity <= hero.complexity
                      ? "bg-white"
                      : "bg-white/30"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
