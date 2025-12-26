import { headerSectionData } from "../../data/antimage"


const HeaderSection = () => {
  return (
      <div className="relative w-full rounded-xl overflow-hidden min-h-50 flex flex-col justify-end group shadow-2xl">
          {/* <!-- Background Image with Overlay --> */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105" 
            data-alt="Abstract purple and blue gaming atmosphere" 
            style={{backgroundImage: `url(${headerSectionData.img})`}}
          >
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/60 to-transparent z-10"></div>
          {/* <!-- Content --> */}
          <div className="relative z-20 p-6 md:p-10 flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
            <div className="flex items-center gap-6 flex-1">
              <video 
                  className="w-70 -webkit-mask-image: linear-gradient(to top, transparent 10%, black 50%); mask-image: linear-gradient(to top, transparent 10%, black 50%);" 
                  poster="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png" 
                  preload="auto" 
                  autoPlay
                  loop 
                  playsInline
                  >
                  <source 
                      type="video/mp4; codecs=&quot;hvc1&quot;" 
                      src="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.mov"
                  />
                  <source 
                      type="video/webm" 
                      src="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm?undefined"
                  />
                  <img src="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png" alt="Antimage render" />
              </video>
              <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-2">
                      {
                      headerSectionData.roles.map((role, index) => (
                      <span 
                          key={role}
                          className={`${index === 0 ? 'bg-primary/20 text-blue-200 border-primary/30' : 'bg-white/10 text-gray-200 border-white/10'} px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider`}
                      >
                          {role}
                      </span>
                      ))}
                  </div>
                  <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">{headerSectionData.name}</h1>
                  <p className="text-gray-300 max-w-xl text-lg mt-1 font-body">{headerSectionData.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                    <div className="size-16 rounded-full border-4 border-primary flex items-center justify-center bg-[#1c212c]">
                        <span className="material-symbols-outlined text-green-400 text-3xl">{headerSectionData.attributeIcon}</span>
                    </div>
                    <span className="mt-2 text-sm font-bold text-gray-400">{headerSectionData.primaryAttribute.toUpperCase()}</span>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">Complexity</span>
                    <div className="flex gap-1 mt-1">
                        {[1, 2, 3].map((complexity) => (
                        <div 
                            key={complexity}
                            className={`h-2 w-6 rounded-sm ${complexity <= headerSectionData.complexity ? 'bg-white' : 'bg-white/30'}`}
                        ></div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
      </div>
  )
}

export default HeaderSection