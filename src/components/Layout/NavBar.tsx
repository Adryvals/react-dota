interface NavLinksItems{
    link: string,
    name: string,
}

const NavBar = () => {
  const NavItems: NavLinksItems[] = [
    { link: "#heroes", name: "Heroes" },
    { link: "#items", name: "Items" },
    { link: "#pro-circuit", name: "Pro Circuit" },
    { link: "#global-trends", name: "Global Trends" },
    { link: "#guides", name: "Guides" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-dark/95 backdrop-blur-md">
        <div className="flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-10 max-w-360 mx-auto">
          <div className="flex items-center gap-4 text-white">
            <div className="size-8 text-primary">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path>
              </svg>
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] font-display">
              DOTA2STATS
            </h2>
          </div>
          <div className="hidden md:flex flex-1 justify-center gap-8">
            {
                NavItems.map((item, idx) => (
                    <a key={idx}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium leading-normal"
                    href={item.link}
                    >{item.name}</a>
                ))
            }
          </div>
          <div className="flex gap-3">
            <button className="hidden sm:flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-border-dark hover:bg-[#3b4354] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Login</span>
            </button>
            <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-[0_0_15px_rgba(19,91,236,0.5)]">
              <span className="truncate">Sign Up</span>
            </button>
          </div>
        </div>
      </header>
  )
}

export default NavBar