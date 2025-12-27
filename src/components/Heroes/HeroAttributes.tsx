const HeroAttributes = () => {
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
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-full bg-linear-to-br from-red-900 to-red-600 flex items-center justify-center shadow-lg shadow-red-900/20">
            <span className="material-symbols-outlined text-white">
              fitness_center
            </span>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">
              21 <span className="text-sm text-gray-400 font-normal">+1.6</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-red-400 font-bold">
              Strength
            </div>
          </div>
        </div>
        {/* <!-- Agility --> */}
        <div className="flex items-center gap-4 relative">
          <div className="absolute -top-3 -right-2 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">
            Primary
          </div>
          <div className="size-12 rounded-full bg-linear-to-br from-green-900 to-green-600 flex items-center justify-center shadow-lg shadow-green-900/20 ring-2 ring-primary ring-offset-2 ring-offset-[#1c212c]">
            <span className="material-symbols-outlined text-white">
              wind_power
            </span>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">
              24 <span className="text-sm text-gray-400 font-normal">+2.8</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-green-400 font-bold">
              Agility
            </div>
          </div>
        </div>
        {/* <!-- Intelligence --> */}
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-full bg-linear-to-br from-blue-900 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
            <span className="material-symbols-outlined text-white">
              psychology
            </span>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">
              12 <span className="text-sm text-gray-400 font-normal">+1.8</span>
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
            <div className="text-white font-bold text-lg">53 - 57</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs font-bold uppercase">
              Armor
            </div>
            <div className="text-white font-bold text-lg">5.0</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs font-bold uppercase">
              Move Speed
            </div>
            <div className="text-white font-bold text-lg">310</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs font-bold uppercase">
              Attack Range
            </div>
            <div className="text-white font-bold text-lg">150</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAttributes;
