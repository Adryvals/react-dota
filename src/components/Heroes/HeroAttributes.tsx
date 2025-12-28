import { HERO_ATTRIBUTE, HERO_ATTRIBUTE_URL } from "../../data/apiData";
import type { HeroInterface } from "../../interfaces/hero";

interface HeroAttributesProps {
  hero: HeroInterface;
}

const primary = (
  <div className="absolute -top-3 -right-2 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
    Primary
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeroAttributes = ({ hero }: HeroAttributesProps) => {
  return (
    <section>
      <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          bar_chart
        </span>{" "}
        Attributes
      </h3>
      <div className="bg-[#1c212c] rounded-xl p-6 border border-border-dark grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Strength --> */}
        <div
          className={`flex items-center gap-4 ${
            hero.attributes?.primaryAttribute == HERO_ATTRIBUTE.STRENGTH
              ? "relative"
              : ""
          }`}
        >
          {hero.attributes?.primaryAttribute == HERO_ATTRIBUTE.STRENGTH
            ? primary
            : null}
          <div className="size-10 rounded-full bg-linear-to-br from-red-900 to-red-600 flex items-center justify-center shadow-lg shadow-red-900/20">
            <img src={HERO_ATTRIBUTE_URL.STRENGTH} alt="" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">
              {hero.attributes?.baseStrength}{" "}
              <span className="text-sm text-gray-400 font-normal">
                +{hero.attributes?.plusStrength}
              </span>
            </div>
            <div className="text-xs uppercase tracking-wider text-red-400 font-bold">
              Strength
            </div>
          </div>
        </div>
        {/* <!-- Agility --> */}
        <div
          className={`flex items-center gap-4 ${
            hero.attributes?.primaryAttribute == HERO_ATTRIBUTE.AGILITY
              ? "relative"
              : ""
          }`}
        >
          {hero.attributes?.primaryAttribute == HERO_ATTRIBUTE.AGILITY
            ? primary
            : null}
          <div className="size-10 rounded-full bg-linear-to-br from-green-900 to-green-600 flex items-center justify-center shadow-lg shadow-green-900/20 ring-2 ring-primary ring-offset-2 ring-offset-[#1c212c]">
            <img src={HERO_ATTRIBUTE_URL.AGILITY} alt="" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">
              {hero.attributes?.baseAgility}{" "}
              <span className="text-sm text-gray-400 font-normal">
                +{hero.attributes?.plusAgility}
              </span>
            </div>
            <div className="text-xs uppercase tracking-wider text-green-400 font-bold">
              Agility
            </div>
          </div>
        </div>
        {/* <!-- Intelligence --> */}
        <div
          className={`flex items-center gap-4 ${
            hero.attributes?.primaryAttribute == HERO_ATTRIBUTE.INTELLIGENCE
              ? "relative"
              : ""
          }`}
        >
          {hero.attributes?.primaryAttribute == HERO_ATTRIBUTE.INTELLIGENCE
            ? primary
            : null}
          <div className="size-10 rounded-full bg-linear-to-br from-blue-900 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
            <img src={HERO_ATTRIBUTE_URL.INTELLIGENCE} alt="" />
          </div>
          <div>
            <div className="text-xl font-bold text-white">
              {hero.attributes?.baseIntelligence}{" "}
              <span className="text-sm text-gray-400 font-normal">
                +{hero.attributes?.plusIntelligence}
              </span>
            </div>
            <div className="text-xs uppercase tracking-wider text-blue-400 font-bold">
              Intelligence
            </div>
          </div>
        </div>
        {/* <!-- Combat Stats Sub-grid --> */}
        <div className="col-span-1 md:col-span-3 mt-4 pt-4 border-t border-border-dark grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-gray-500 text-xs font-bold uppercase">
              Attack Dmg
            </div>
            <div className="text-white font-bold text-lg">
              {hero.attributes?.attackDamageMin} -{" "}
              {hero.attributes?.attackDamageMax}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-xs font-bold uppercase">
              Armor
            </div>
            <div className="text-white font-bold text-lg">
              {hero.attributes?.armor}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-xs font-bold uppercase">
              Move Speed
            </div>
            <div className="text-white font-bold text-lg">
              {hero.attributes?.moveSpeed}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-xs font-bold uppercase">
              Attack Range
            </div>
            <div className="text-white font-bold text-lg">
              {hero.attributes?.attackRange}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAttributes;
