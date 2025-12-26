interface NewsArticlesProps {
    name: string
    url: string
    img: string
    altImg: string
    content: string
    type: string
    publishedAt: string,
    linkName: string
}

const articleList : NewsArticlesProps[] = [
    {
        name: "Gameplay Update 7.35d",
        url: "",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBZM-_fFgohoPhBxJFJQX088E9a2cGWL0kXC-q41YnHJSnPBaz99eyMYPZuy4-GsInooZbwl2pAsf9M6bO3wiFiPkTcq0rzvl9kYdDZy_CEavneJR5Gtb2uMctThxWmvcEVpjkGLay76HOz7zZAY9PJOlKfKTnice6F0QnOZtJnleWrPjh1IyiCugO2lmeM37-Z2spXWEa09LgqHUxVWrXaVH32jFre1pvh9gIo0TzzkBNmpC-2L8JJ93Il6ze30_24cGjUQqWUNo",
        altImg: "Futuristic interface with code",
        content: `A focused update tweaking some of the meta outliers.
                Chen, Dragon Knight, and Lifestealer receive adjustments
                ahead of the upcoming qualifiers.`,
        type: "Patch Notes",
        publishedAt: "2 hours ago",
        linkName: "Read Analysis",
    },
    {
        name: "The International 2024 Qualifiers",
        url: "",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx8LD8-OV4ox1L62co8S5htN24Ect6o6R3-xs0QWlEhfdrZgDWagkIQLAiVY9n_kBX7h6i7PZr7oCiHho_OMhJa48nNhuuDwjKrfKm2us6vG3MYwt-GgJ46wJvNce0sGQEjVXRglehfm6I8TR-7jWCh1GV6iUuHZukANgA_koDN9iJVsS4YvuNmGHtzbByTXCDacM8_5OcuyvieBIrTiJijaN2-R-VqbVbOSV_WGpeD_0awemCP0pUBn_C2_lIllohsjr0qkXpSg4",
        altImg: "Esports arena crowd",
        content: `The road to the Aegis begins here. Check out our
                  comprehensive guide to the regional qualifiers,
                  brackets, and teams to watch.`,
        type: "Esports",
        publishedAt: "Yesterday",
        linkName: "Full Recap",
    },
] 

const Article = ({name, linkName, url, img, altImg, content, type, publishedAt}: NewsArticlesProps) => {
    return (
        <article className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl bg-card-dark border border-border-dark hover:border-primary/30 transition-all group cursor-pointer">
            <div className="w-full sm:w-48 aspect-video rounded-lg overflow-hidden bg-gray-800 shrink-0 relative">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img
                alt={altImg}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={img}
            />
            </div>
            <div className="flex flex-col justify-between py-1">
            <div>
                <div className="flex gap-3 text-xs mb-2">
                <span className={`${type === 'Esports' ? 'text-news-esports' : 'text-primary'} font-bold uppercase tracking-wider`}>
                    {type}
                </span>
                <span className="text-gray-500">{publishedAt}</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                {content}
                </p>
            </div>
            <div className="mt-4 flex items-center text-primary text-sm font-bold group-hover:translate-x-1 transition-transform">
                {linkName}{" "}
                <span className="material-symbols-outlined text-sm ml-1">
                arrow_right_alt
                </span>
            </div>
            </div>
        </article>
    )
}

const NewsSection = () => {
  return (
    <div className="w-full bg-news-section py-12 px-4 md:px-10 border-t border-border-dark">
        <div className="max-w-300 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">

            {/* News Feed */}
            <div className="flex flex-col flex-2 gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-4">
                Latest News
                </h2>
                <a
                className="text-gray-400 hover:text-white text-sm"
                href="#"
                >
                View Archive
                </a>
            </div>
            {articleList && articleList.map((article) => (
                <Article 
                    key={article.name} 
                    altImg={article.altImg} 
                    content={article.content}  
                    img={article.img}
                    name={article.name}
                    publishedAt={article.publishedAt}
                    type={article.type}
                    url={article.url}
                    linkName={article.linkName}
                />
            ))}

            </div>
            {/* <!-- Community Sidebar --> */}
            <div className="flex flex-col flex-1 gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] border-l-4 border-primary pl-4">
                Community Hub
                </h2>
            </div>
            <div className="flex flex-col gap-4 bg-[#161920] p-6 rounded-xl border border-border-dark">
                <div className="flex items-center gap-3 pb-4 border-b border-border-dark">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">forum</span>
                </div>
                <div>
                    <h4 className="text-white font-bold">
                    Trending Discussions
                    </h4>
                    <p className="text-xs text-gray-500">1.2k Active Users</p>
                </div>
                </div>
                <a className="group" href="#">
                <p className="text-gray-300 text-sm font-medium group-hover:text-primary transition-colors truncate">
                    New matchmaking system thoughts?
                </p>
                <p className="text-xs text-gray-600 mt-1">
                    245 replies • 12m ago
                </p>
                </a>
                <a className="group" href="#">
                <p className="text-gray-300 text-sm font-medium group-hover:text-primary transition-colors truncate">
                    Guide: How to counter Meepo in 7.35
                </p>
                <p className="text-xs text-gray-600 mt-1">
                    89 replies • 1h ago
                </p>
                </a>
                <a className="group" href="#">
                <p className="text-gray-300 text-sm font-medium group-hover:text-primary transition-colors truncate">
                    Pro Circuit Rostermania Megathread
                </p>
                <p className="text-xs text-gray-600 mt-1">
                    1.5k replies • 3h ago
                </p>
                </a>
                <button className="mt-2 w-full py-2 bg-border-dark hover:bg-[#3b4354] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors">
                Join Discussion
                </button>
            </div>
            <div className="rounded-xl overflow-hidden relative min-h-[160px] flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply transition-opacity group-hover:opacity-90"></div>
                <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=400&amp;auto=format&amp;fit=crop')] bg-cover bg-center"
                data-alt="Controller and gaming setup"
                ></div>
                <div className="relative z-20 text-center p-4">
                <h3 className="text-white font-bold text-xl mb-1">
                    Dota Plus Assistant
                </h3>
                <p className="text-white/80 text-xs mb-3">
                    Get real-time suggestions in-game
                </p>
                <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-bold rounded-full">
                    Download App
                </span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewsSection