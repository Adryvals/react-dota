const HeroTalentTree = () => {
  return (
    <section>
      <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">
          account_tree
        </span>{" "}
        Talent Tree
      </h3>
      <div className="bg-[#1c212c] rounded-xl p-6 border border-border-dark relative overflow-hidden">
        {/* <!-- Center Line --> */}
        <div className="absolute left-1/2 top-6 bottom-6 w-px bg-border-dark -translate-x-1/2"></div>
        <div className="flex flex-col gap-6 relative z-10">
          {/* <!-- Level 25 --> */}
          <div className="flex items-center justify-between gap-4 group">
            <div className="flex-1 text-right text-xs md:text-sm text-gray-400 hover:text-white cursor-pointer transition-colors py-1">
              -50s Mana Void CD
            </div>
            <div className="size-8 rounded-full bg-dark border-2 border-yellow-500 text-yellow-500 font-bold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.2)] shrink-0 z-20">
              25
            </div>
            <div className="flex-1 text-left text-xs md:text-sm text-white font-medium hover:text-primary cursor-pointer transition-colors py-1">
              +1s Mana Void Stun
            </div>
          </div>
          {/* <!-- Level 20 --> */}
          <div className="flex items-center justify-between gap-4 group">
            <div className="flex-1 text-right text-xs md:text-sm text-white font-medium hover:text-primary cursor-pointer transition-colors py-1">
              +250 Blink Range
            </div>
            <div className="size-8 rounded-full bg-dark border-2 border-border-dark text-gray-400 font-bold text-xs flex items-center justify-center shrink-0 z-20 group-hover:border-gray-500 group-hover:text-white transition-colors">
              20
            </div>
            <div className="flex-1 text-left text-xs md:text-sm text-gray-400 hover:text-white cursor-pointer transition-colors py-1">
              +0.1 Mana Void Dmg
            </div>
          </div>
          {/* <!-- Level 15 --> */}
          <div className="flex items-center justify-between gap-4 group">
            <div className="flex-1 text-right text-xs md:text-sm text-gray-400 hover:text-white cursor-pointer transition-colors py-1">
              +150 Mana Void Radius
            </div>
            <div className="size-8 rounded-full bg-dark border-2 border-border-dark text-gray-400 font-bold text-xs flex items-center justify-center shrink-0 z-20 group-hover:border-gray-500 group-hover:text-white transition-colors">
              15
            </div>
            <div className="flex-1 text-left text-xs md:text-sm text-white font-medium hover:text-primary cursor-pointer transition-colors py-1">
              +0.6% Max Mana Burn
            </div>
          </div>
          {/* <!-- Level 10 --> */}
          <div className="flex items-center justify-between gap-4 group">
            <div className="flex-1 text-right text-xs md:text-sm text-white font-medium hover:text-primary cursor-pointer transition-colors py-1">
              +9 Strength
            </div>
            <div className="size-8 rounded-full bg-dark border-2 border-border-dark text-gray-400 font-bold text-xs flex items-center justify-center shrink-0 z-20 group-hover:border-gray-500 group-hover:text-white transition-colors">
              10
            </div>
            <div className="flex-1 text-left text-xs md:text-sm text-gray-400 hover:text-white cursor-pointer transition-colors py-1">
              -1s Blink Cooldown
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTalentTree;
