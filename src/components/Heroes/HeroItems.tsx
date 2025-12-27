import { ITEMS_URL } from '../../data/apiData';

const HeroItems = () => {
  return (
    <>
      <section>
        <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            inventory_2
          </span>{" "}
          Popular Items
        </h3>
        <div className="flex flex-col gap-4">
          {/* <!-- Early Game --> */}
          <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              Early Game
            </h5>
            <div className="flex gap-2 flex-wrap">
              <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Power Treads icon"
                  style={{ backgroundImage: `url(${ITEMS_URL}/tango.png)` }}
                ></div>
                <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">
                  54%
                </div>
              </div>
              <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Battle Fury icon"
                  style={{
                    backgroundImage: `url(${ITEMS_URL}/magic_wand.png)`,
                  }}
                ></div>
                <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">
                  51%
                </div>
              </div>
              <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Wraith Band icon"
                  style={{
                    backgroundImage: `url(${ITEMS_URL}/wraith_band.png)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* <!-- Core Items --> */}
          <div>
            <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              Core Items
            </h5>
            <div className="flex gap-2 flex-wrap">
              <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Manta Style icon"
                  style={{ backgroundImage: `url(${ITEMS_URL}/bfury.png)` }}
                ></div>
                <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">
                  62%
                </div>
              </div>
              <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Skull Basher icon"
                  style={{ backgroundImage: `url(${ITEMS_URL}/basher.png)` }}
                ></div>
                <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">
                  58%
                </div>
              </div>
              <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Butterfly icon"
                  style={{ backgroundImage: `url(${ITEMS_URL}/butterfly.png)` }}
                ></div>
                <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">
                  65%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            build_circle
          </span>{" "}
          Situational Items
        </h3>
        <div className="flex gap-2 flex-wrap">
          <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Black King Bar icon"
              style={{
                backgroundImage: `url(${ITEMS_URL}/black_king_bar.png)`,
              }}
            ></div>
            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">
              48%
            </div>
          </div>
          <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Abyssal Blade icon"
              style={{ backgroundImage: `url(${ITEMS_URL}/abyssal_blade.png)` }}
            ></div>
            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">
              42%
            </div>
          </div>
          <div className="group relative size-12 bg-border-dark rounded border border-white/10 hover:border-primary cursor-pointer overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Satanic icon"
              style={{ backgroundImage: `url(${ITEMS_URL}/satanic.png)` }}
            ></div>
            <div className="absolute bottom-0 right-0 bg-black/60 text-[10px] px-1 text-green-400 font-bold">
              39%
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroItems