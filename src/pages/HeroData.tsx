import HeaderSection from "../components/Heroes/HeaderSection"
import HeroAbilities from "../components/Heroes/HeroAbilities"
import HeroGamesStats from "../components/Heroes/HeroGamesStats"
import { ITEMS_URL } from "../data/apiData"

export const HeroData = () => {
    return (
        <div className="layout-container flex h-full grow flex-col items-center bg-background-dark text-slate-900 dark:text-white overflow-x-hidden">
            <div className="w-full flex flex-col px-4 md:px-6 py-6 gap-6">
                
                {/* <!-- Hero Header Section --> */}
                <HeaderSection />

                {/* <!-- Stats Bar --> */}
                <HeroGamesStats />
                
                {/* <!-- Tabs --/> */}
                <div className="border-b border-border-dark">
                    <div className="flex gap-8 overflow-x-auto">
                        <a className="border-b-2 border-primary text-white pb-3 px-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap" href="#">Overview</a>
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
                        <HeroAbilities />
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
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Power Treads icon" style={{backgroundImage: `url(${ITEMS_URL}/tango.png)`}}></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">54%</div>
                                        </div>
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Battle Fury icon" style={{backgroundImage: `url(${ITEMS_URL}/magic_wand.png)`}}></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">51%</div>
                                        </div>
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Wraith Band icon" style={{backgroundImage: `url(${ITEMS_URL}/wraith_band.png)`}}></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Core Items --> */}
                                <div>
                                    <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Core Items</h5>
                                    <div className="flex gap-2 flex-wrap">
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Manta Style icon" style={{backgroundImage: `url(${ITEMS_URL}/bfury.png)`}}></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">62%</div>
                                        </div>
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Skull Basher icon" style={{backgroundImage: `url(${ITEMS_URL}/basher.png)`}}></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">58%</div>
                                        </div>
                                        <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-cover bg-center" data-alt="Butterfly icon" style={{backgroundImage: `url(${ITEMS_URL}/butterfly.png)`}}></div>
                                            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">65%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">build_circle</span> Situational Items
                            </h3>
                            <div className="flex gap-2 flex-wrap">
                                <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center" data-alt="Black King Bar icon" style={{backgroundImage: `url(${ITEMS_URL}/black_king_bar.png)`}}></div>
                                    <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">48%</div>
                                </div>
                                <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center" data-alt="Abyssal Blade icon" style={{backgroundImage: `url(${ITEMS_URL}/abyssal_blade.png)`}}></div>
                                    <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">42%</div>
                                </div>
                                <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center" data-alt="Satanic icon" style={{backgroundImage: `url(${ITEMS_URL}/satanic.png)`}}></div>
                                    <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">39%</div>
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
