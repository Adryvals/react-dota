import { ABILITIES_URL } from "../../data/apiData"
import type { HeroInterface } from "../../interfaces/hero"

interface HeroAbilitiesProps {
  hero: HeroInterface
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeroAbilities = ({ hero: _hero }: HeroAbilitiesProps) => {
    return (
        <section>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">bolt</span> Abilities
            </h3>
            <div className="flex flex-col gap-4">
                {/* <!-- Ability 1 --> */}
                <div className="bg-[#1c212c] rounded-xl border border-border-dark overflow-hidden group hover:border-primary/50 transition-all">
                    <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
                        <div className="shrink-0">
                            <div className="size-20 rounded-lg bg-indigo-900/50 flex items-center justify-center border-2 border-indigo-500/30 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)" }}>
                                <img src={ABILITIES_URL + "antimage_mana_break.png"} alt="Mana Break" />
                                {/* <!-- Simulated passive badge --> */}
                                <div className="absolute bottom-0 w-full bg-indigo-900/80 text-[10px] text-center text-white font-bold uppercase py-0.5">Passive</div>
                            </div>
                        </div>
                        <div className="grow">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-bold text-white">Mana Break <span className="material-symbols-outlined text-4xl text-indigo-300">broken_image</span></h4>
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
                                style={{ backgroundImage: "linear-gradient(135deg, #4338ca 0%, #312e81 100%)" }}>
                                <img src={ABILITIES_URL + "antimage_blink.png"} alt="Blink" />
                            </div>
                        </div>
                        <div className="grow">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-bold text-white">Blink <span className="material-symbols-outlined text-4xl text-indigo-300">flash_on</span></h4>
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
                                style={{ backgroundImage: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)" }}>
                                <img src={ABILITIES_URL + "antimage_counterspell.png"} alt="Counterspell" />

                            </div>
                        </div>
                        <div className="grow">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-bold text-white">Counterspell <span className="material-symbols-outlined text-4xl text-indigo-300">shield</span></h4>
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
                                <img src={ABILITIES_URL + "antimage_mana_void.png"} alt="Counterspell" />
                            </div>
                        </div>
                        <div className="grow">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-bold text-white uppercase tracking-wide">Mana Void <span className="material-symbols-outlined text-4xl text-white relative z-10">explosion</span></h4>
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
    )
}

export default HeroAbilities