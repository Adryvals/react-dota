export const HeroData = () => {
    return (
        <div className="layout-container flex h-full grow flex-col items-center bg-background-dark text-slate-900 dark:text-white overflow-x-hidden">
            <div className="w-full flex flex-col px-4 md:px-6 py-6 gap-6">
                {/* <!-- Hero Header Section --> */}
                <div className="relative w-full rounded-xl overflow-hidden min-h-100 flex flex-col justify-end group shadow-2xl">
                    {/* <!-- Background Image with Overlay --> */}
                    <div className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105" data-alt="Abstract purple and blue gaming atmosphere" /*style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKnXrnwT_SyBRyJgZEd5tk_EjErGbek5QFIdWMkjE5O9PINiVCxZh0aVNBl9ZngwyzEYqCDX2uo0wMOli-j7NH7PH38xcAtFtqrWESK1VCy65OZM8saLR_vUhnN3mVwy6Q-cIvvz6gLSBaYTyBBwc8ffJWrdZeZP97-4RasyGnfuWOAcmC7ZTBaEHege3SgVyM_Rqwe7NKnnEhsi_k7MHV_fqQq8oT91F5gILW6ofYktIOCiN_uOYc4wAyMybnTYTUP_lYTDAQMgg");'*/>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/60 to-transparent z-10"></div>
                    {/* <!-- Content --> */}
                    <div className="relative z-20 p-6 md:p-10 flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-primary/20 text-blue-200 border border-primary/30 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Melee</span>
                                <span className="bg-white/10 text-gray-200 border border-white/10 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Carry</span>
                                <span className="bg-white/10 text-gray-200 border border-white/10 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Escape</span>
                                <span className="bg-white/10 text-gray-200 border border-white/10 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Nuker</span>
                            </div>
                            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">Anti-Mage</h1>
                            <p className="text-gray-300 max-w-xl text-lg mt-1 font-body">The monks of Turstarkuri watched the rugged valleys below their mountain monastery as wave after wave of invaders swept through the lower kingdoms.</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-center">
                                <div className="size-16 rounded-full border-4 border-primary flex items-center justify-center bg-[#1c212c]">
                                    <span className="material-symbols-outlined text-green-400 text-3xl">wind_power</span>
                                </div>
                                <span className="mt-2 text-sm font-bold text-gray-400">AGILITY</span>
                            </div>
                            <div className="h-12 w-px bg-white/20"></div>
                            <div className="flex flex-col items-end">
                                <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">Complexity</span>
                                <div className="flex gap-1 mt-1">
                                    <div className="h-2 w-6 bg-white rounded-sm"></div>
                                    <div className="h-2 w-6 bg-white/30 rounded-sm"></div>
                                    <div className="h-2 w-6 bg-white/30 rounded-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Stats Bar --> */}
                <div className="flex flex-wrap gap-4 w-full">
                    <div className="flex-1 min-w-[140px] bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                        <span className="text-green-400 text-2xl font-bold">52.4%</span>
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Win Rate</span>
                    </div>
                    <div className="flex-1 min-w-[140px] bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                        <span className="text-white text-2xl font-bold">14.2%</span>
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">Pick Rate</span>
                    </div>
                    <div className="flex-1 min-w-[140px] bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                        <span className="text-blue-400 text-2xl font-bold">3.15</span>
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">KDA Ratio</span>
                    </div>
                    <div className="flex-1 min-w-[140px] bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                        <span className="text-yellow-400 text-2xl font-bold">624</span>
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">GPM</span>
                    </div>
                    <div className="flex-1 min-w-[140px] bg-[#1c212c] border border-border-dark rounded-lg p-4 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                        <span className="text-orange-400 text-2xl font-bold">718</span>
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-1">XPM</span>
                    </div>
                </div>
                {/* <!-- Tabs --/> */}
                <div className="border-b border-border-dark">
                    <div className="flex gap-8 overflow-x-auto">
                        <a className="border-b-2 border-primary text-white pb-3 px-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap" href="#">Overview</a>
                        <a className="border-b-2 border-transparent text-gray-500 hover:text-white pb-3 px-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors" href="#">Abilities</a>
                        <a className="border-b-2 border-transparent text-gray-500 hover:text-white pb-3 px-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors" href="#">Talents</a>
                        <a className="border-b-2 border-transparent text-gray-500 hover:text-white pb-3 px-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors" href="#">Item Builds</a>
                        <a className="border-b-2 border-transparent text-gray-500 hover:text-white pb-3 px-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors" href="#">Lore</a>
                    </div>
                </div>
                {/* <!-- Main Content Grid --> */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* <!-- Left Column (2/3 width on large screens) --> */}
                    <div className="xl:col-span-2 flex flex-col gap-8">
                        {/* <!-- Attributes Section --> */}
                        <section>
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">bar_chart</span> Attributes
                            </h3>
                            <div className="bg-[#1c212c] rounded-xl p-6 border border-border-dark grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* <!-- Strength --> */}
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-linear-to-br from-red-900 to-red-600 flex items-center justify-center shadow-lg shadow-red-900/20">
                                        <span className="material-symbols-outlined text-white">fitness_center</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">21 <span className="text-sm text-gray-400 font-normal">+1.6</span></div>
                                        <div className="text-xs uppercase tracking-wider text-red-400 font-bold">Strength</div>
                                    </div>
                                </div>
                                {/* <!-- Agility --> */}
                                <div className="flex items-center gap-4 relative">
                                    <div className="absolute -top-3 -right-2 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">Primary</div>
                                    <div className="size-12 rounded-full bg-linear-to-br from-green-900 to-green-600 flex items-center justify-center shadow-lg shadow-green-900/20 ring-2 ring-primary ring-offset-2 ring-offset-[#1c212c]">
                                        <span className="material-symbols-outlined text-white">wind_power</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">24 <span className="text-sm text-gray-400 font-normal">+2.8</span></div>
                                        <div className="text-xs uppercase tracking-wider text-green-400 font-bold">Agility</div>
                                    </div>
                                </div>
                                {/* <!-- Intelligence --> */}
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-linear-to-br from-blue-900 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
                                        <span className="material-symbols-outlined text-white">psychology</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">12 <span className="text-sm text-gray-400 font-normal">+1.8</span></div>
                                        <div className="text-xs uppercase tracking-wider text-blue-400 font-bold">Intelligence</div>
                                    </div>
                                </div>
                                {/* <!-- Combat Stats Sub-grid --> */}
                                <div className="col-span-1 md:col-span-3 mt-4 pt-4 border-t border-border-dark grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <div className="text-gray-500 text-xs font-bold uppercase">Attack Dmg</div>
                                        <div className="text-white font-bold text-lg">53 - 57</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs font-bold uppercase">Armor</div>
                                        <div className="text-white font-bold text-lg">5.0</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs font-bold uppercase">Move Speed</div>
                                        <div className="text-white font-bold text-lg">310</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-xs font-bold uppercase">Attack Range</div>
                                        <div className="text-white font-bold text-lg">150</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Abilities Section --> */}
                        <section>
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">bolt</span> Abilities
                            </h3>
                            <div className="flex flex-col gap-4">
                                {/* <!-- Ability 1 --> */}
                                <div className="bg-[#1c212c] rounded-xl border border-border-dark overflow-hidden group hover:border-primary/50 transition-all">
                                    <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
                                        <div className="shrink-0">
                                            <div className="size-20 rounded-lg bg-indigo-900/50 flex items-center justify-center border-2 border-indigo-500/30 relative overflow-hidden" /*style="background-image: linear-gradient(135deg, #312e81 0%, #1e1b4b 100%);"*/>
                                                <span className="material-symbols-outlined text-4xl text-indigo-300">broken_image</span>
                                                {/* <!-- Simulated passive badge --> */}
                                                <div className="absolute bottom-0 w-full bg-indigo-900/80 text-[10px] text-center text-white font-bold uppercase py-0.5">Passive</div>
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-white">Mana Break</h4>
                                                <div className="flex gap-2">
                                                    {/* <!-- No Mana Cost/CD for passive --> */}
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-body">Burns mana from enemies on each attack. Mana Break deals 50% of the mana burned as physical damage to the target.</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 text-sm bg-dark p-3 rounded-lg border border-border-dark">
                                                <div>
                                                    <span className="text-gray-500 block text-xs font-bold uppercase">Mana Burned</span>
                                                    <span className="text-white font-mono">28 / 40 / 52 / 64</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500 block text-xs font-bold uppercase">Max Mana Burn</span>
                                                    <span className="text-white font-mono">1.6% / 2.4% / 3.2% / 4.0%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Ability 2 --> */}
                                <div className="bg-[#1c212c] rounded-xl border border-border-dark overflow-hidden group hover:border-primary/50 transition-all">
                                    <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
                                        <div className="shrink">
                                            <div 
                                                className="size-20 rounded-lg bg-indigo-900/50 flex items-center justify-center border-2 border-indigo-500/30 relative overflow-hidden" 
                                                /*style="background-image: linear-gradient(135deg, #4338ca 0%, #312e81 100%);"*/>
                                                <span className="material-symbols-outlined text-4xl text-indigo-300">flash_on</span>
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-white">Blink</h4>
                                                <div className="flex gap-3 items-center">
                                                    <div className="flex items-center gap-1 text-blue-400 text-xs font-bold bg-blue-400/10 px-2 py-1 rounded">
                                                        <span className="size-2 rounded-full bg-blue-400"></span> 45
                                                    </div>
                                                    <div className="flex items-center gap-1 text-white text-xs font-bold bg-white/10 px-2 py-1 rounded">
                                                        <span className="material-symbols-outlined text-[14px]">schedule</span> 12/10/8/6
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-body">Short distance teleportation that allows Anti-Mage to move in and out of combat.</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 text-sm bg-dark p-3 rounded-lg border border-border-dark">
                                                <div>
                                                    <span className="text-gray-500 block text-xs font-bold uppercase">Range</span>
                                                    <span className="text-white font-mono">925 / 1000 / 1075 / 1150</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500 block text-xs font-bold uppercase">Cast Point</span>
                                                    <span className="text-white font-mono">0.4s</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Ability 3 --> */}
                                <div className="bg-[#1c212c] rounded-xl border border-border-dark overflow-hidden group hover:border-primary/50 transition-all">
                                    <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
                                        <div className="shrink">
                                            <div
                                                className="size-20 rounded-lg bg-indigo-900/50 flex items-center justify-center border-2 border-indigo-500/30 relative overflow-hidden" 
                                                /*style="background-image: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);"*/>
                                                <span className="material-symbols-outlined text-4xl text-indigo-300">shield</span>
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-white">Counterspell</h4>
                                                <div className="flex gap-3 items-center">
                                                    <div className="flex items-center gap-1 text-blue-400 text-xs font-bold bg-blue-400/10 px-2 py-1 rounded">
                                                        <span className="size-2 rounded-full bg-blue-400"></span> 45
                                                    </div>
                                                    <div className="flex items-center gap-1 text-white text-xs font-bold bg-white/10 px-2 py-1 rounded">
                                                        <span className="material-symbols-outlined text-[14px]">schedule</span> 15/11/7/3
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-body">Passively increases magic resistance. Can be activated to create an anti-magic shell which blocks and reflects targeted spells back to foes.</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 text-sm bg-dark p-3 rounded-lg border border-border-dark">
                                                <div>
                                                    <span className="text-gray-500 block text-xs font-bold uppercase">Magic Res</span>
                                                    <span className="text-white font-mono">15% / 25% / 35% / 45%</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500 block text-xs font-bold uppercase">Duration</span>
                                                    <span className="text-white font-mono">1.2s</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Ultimate --> */}
                                <div className="bg-linear-to-r from-[#1c212c] to-[#1e1b4b] rounded-xl border border-indigo-500/30 overflow-hidden group hover:border-indigo-400 transition-all shadow-lg shadow-indigo-900/10">
                                    <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
                                        <div className="shrink">
                                            <div className="size-20 rounded-lg bg-indigo-600 flex items-center justify-center border-2 border-white/20 relative overflow-hidden shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=200&amp;auto=format&amp;fit=crop')] bg-cover opacity-50 mix-blend-overlay" data-alt="Energy texture"></div>
                                                <span className="material-symbols-outlined text-4xl text-white relative z-10">explosion</span>
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-white uppercase tracking-wide">Mana Void</h4>
                                                <div className="flex gap-3 items-center">
                                                    <div className="flex items-center gap-1 text-blue-400 text-xs font-bold bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20">
                                                        <span className="size-2 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,1)]"></span> 100/200/300
                                                    </div>
                                                    <div className="flex items-center gap-1 text-white text-xs font-bold bg-white/10 px-2 py-1 rounded border border-white/10">
                                                        <span className="material-symbols-outlined text-[14px]">schedule</span> 70
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-body">For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies. The main target is also mini-stunned.</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4 text-sm bg-black/20 p-3 rounded-lg border border-white/5">
                                                <div>
                                                    <span className="text-indigo-300 block text-xs font-bold uppercase">Dmg / Mana</span>
                                                    <span className="text-white font-mono">0.8 / 0.95 / 1.1</span>
                                                </div>
                                                <div>
                                                    <span className="text-indigo-300 block text-xs font-bold uppercase">Stun</span>
                                                    <span className="text-white font-mono">0.3s</span>
                                                </div>
                                                <div>
                                                    <span className="text-indigo-300 block text-xs font-bold uppercase">Radius</span>
                                                    <span className="text-white font-mono">500</span>
                                                </div>
                                                <div>
                                                    <span className="text-indigo-300 block text-xs font-bold uppercase">Range</span>
                                                    <span className="text-white font-mono">600</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* <!-- Right Column (1/3 width) --> */}
                    <div className="flex flex-col gap-8">
                        {/* <!-- Talent Tree</div> --> */}
                        <section>
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">account_tree</span> Talent Tree
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
                        {/* <!-- Popular Items --> */}
                        <section>
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">inventory_2</span> Popular Items
                            </h3>
                            <div className="flex flex-col gap-4">
                                {/* <!-- Early Game --> */}
                                <div>
                                    <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Early Game</h5>
                                    <div className="flex gap-2 flex-wrap">
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Power Treads icon" /*style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDp25RPsNOyVfMR3vLkDSbcLeBmmE6xdv2EzBuqJ6huRLuILUDZuTDfXsG-lgxSI-SvihlJM4LJV-pZzSR-WLYC4J5_UHgOZyLzABk_dxVBe1QYQdWkd9gQmQPA84anUL8QgvJ-Oi16wSsrEOKaN3q2krUc25cD6zZlwwkz2p-M2GEI-ul_gRDidJmNUlGWhRMYSMy5bpTBvvQuu5oMOnwwUAmKBy_Vn66AVGQuxoOKyntRa-Mpdx9w8-QnLsMiI35owvuTM2F8geQ');"*/></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">54%</div>
                                        </div>
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Battle Fury icon" /*style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVVOyn06FIRez6dFOlINPKDPcC6BYTTefwqSg37N1AC1oJADA47nSuQBECpGDcebfM3YSyGhqij1CeB7PZbxSkxq5Ob_oWurTgmsUnPoxOvRWQtxuI1Nv3bVyz7697rtAA8rhail0y8Zs8DFBl4Gj7_hi7CMsbBz-h6hvkb_oPWWByhBZC0CCvnpnx7tQxxd7kaXQv7OoBi_7T7CT8i_NZBkUTLTvq_AbsYIs63_QKp6KUXf3woprhi5HC49au_LJ5OI5zVx-glfw');"*/></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">51%</div>
                                        </div>
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Wraith Band icon" /*style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKmPAW-iVSYo2f6Trq39MzwWjzLOkpWxBzdzaB7uscyOdGs7rVEZZXkq5rf3Z6YyXrKl3MDfrSNLTAT9UobqYXGa8RlsJTolCHlgxKxSqEmNI93sr0w1kyxDeP1buLcCU-nI8In1Av-rGQ1ban4DfMi5iQ7-GBs3e70p2DmScTG40WhrXqzjBS5RTXM1-QWR1FaecKzaJRMRCRykpUvh8QXYIMXhZ1DSpLGIZFknHCJfoVRzZBHle1beADCUgqQWzBlWy0H7V0jCY');"*/></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Core Items --> */}
                                <div>
                                    <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Core Items</h5>
                                    <div className="flex gap-2 flex-wrap">
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Manta Style icon" /*style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxTXnRjEfQtCtkTmRzTQ-D14R7J3a8FsfQLBRXBm2ks_lJ1cjmzq9PX5orH2c22M2oh4Bc9JEqaNA6D0xaHTAZGYtr6Jya6QdHiBLS0IgVWzuVOKmOn_SEa7E93JdyhSTf2pAdc7CLUfkcUw-kZLlh5BAOPr8Zk9RxGvIjLWnso6LDIdDTD8-cfpbtuftejUDomjuXYhD7kuicakiszV7-sYS1RxEuEIMe_BcEMxdTrfAW11qdqCwXhpUshW3cnJ90s-LQ1nsTtRc');"*/></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">62%</div>
                                        </div>
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Skull Basher icon" /*style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRTO7iGvelwj1u2zXdRcaOQbCdWUOzTDWJVHVI8mLzLok5jN-7I5HBn7Nfwkv1txanRXGo_f2FPMMGlI1Qmp-fJJ9iRUpcacbLdoPOxlG3xN7kCehiF91Oi86IXXQ0lyRhCV7OFRahHa4bH8AwGhgjPRNZEA1vqMxtceW9S21mmOrvCWtDCRrVPKktg0_INqdvwGwVN-zlZ32Z1ZaxRvzjECzyfC_OggamITdg0FBykD1ETawmnhuCDEXTp49jgjHBjjmu5Fwkvbc');"*/></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">58%</div>
                                        </div>
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Butterfly icon" /*style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAI75dq1MoEmZ6TJc96cedijZbjGxRQqu61r45TSeNwNUWDABdXB4nr017HlLyU-kJA9SMrfdLKSAvb0Srba8-uLopPAu3ZDkkpQFvmHf2qKekGSZTnaQE5Xq_g7eBoLRn0l6pJU0su2bmrl1QUfvY6p-i5tMI8qIZoS_6z0OaC1Ya3Ln-v0cknQiljhe62fm0bldg73VaxE-ArqvHCSd3co5KCtA_lt0GXCcaJBdxruIJbY6BWT_-8W_RWoVivTsqOPJv0axgITig');"*/></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">65%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- Small Lore Widget --> */}
                        <section>
                            <div className="bg-[#1c212c] p-6 rounded-xl border border-border-dark">
                                <h3 className="text-white font-bold mb-2">Lore</h3>
                                <p className="text-sm text-gray-400 font-body italic">
                                    "Magic is an abomination."
                                </p>
                                <p className="text-sm text-gray-400 font-body mt-2 line-clamp-3">
                                    The monks of Turstarkuri watched the rugged valleys below their mountain monastery as wave after wave of invaders swept through the lower kingdoms. Ascetic and pragmatic, in their remote monastic eyrie they remained aloof from mundane strife.
                                </p>
                                <button className="mt-3 text-primary text-xs font-bold uppercase tracking-wide hover:underline">Read Full Lore</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
