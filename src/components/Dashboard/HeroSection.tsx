
const Hero = () => {
  return (
    <div className="w-full relative bg-dark">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-dark z-10 pointer-events-none"></div>
            <div
            className={`absolute inset-0 bg-hero bg-cover bg-center opacity-30 z-0`}
            data-alt="Dark futuristic gaming battle scene with blue neon lights"
            ></div>
            <div className="relative z-20 layout-container flex flex-col items-center py-20 px-4 md:px-10">
            <div className="flex flex-col gap-6 items-center justify-center max-w-200 text-center mt-10">
                <div className="flex flex-col gap-2">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                    Real-Time Analytics
                </span>
                <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-2xl font-display">
                    MASTER THE META
                </h1>
                <h2 className="text-gray-400 text-lg md:text-xl font-normal leading-normal max-w-150 mx-auto mt-2">
                    Elevate your game with deep stats, live match tracking, and
                    community-driven guides for every hero.
                </h2>
                </div>
                <label className="flex flex-col w-full max-w-150 mt-8 group">
                <div className="flex items-stretch rounded-xl h-14 shadow-2xl shadow-primary/10 transition-shadow group-focus-within:shadow-primary/30">
                    <div className="text-[#9da6b9] flex border border-darkblue bg-darklight items-center justify-center pl-5 rounded-l-xl border-r-0 group-focus-within:border-primary group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                        search
                    </span>
                    </div>
                    <input
                    className="form-input flex w-full flex-1 resize-none overflow-hidden text-white focus:outline-0 focus:ring-0 border border-darkblue bg-darklight placeholder:text-[#9da6b9] px-4 border-r-0 border-l-0 text-base font-normal leading-normal group-focus-within:border-primary transition-colors"
                    placeholder="Search Player ID, Match ID, or Hero..."
                    />
                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-darkblue bg-darklight pr-2 group-focus-within:border-primary transition-colors">
                    <button className="flex min-w-25 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all">
                        <span className="truncate">ANALYZE</span>
                    </button>
                    </div>
                </div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Hero