import Hero from "../components/Dashboard/HeroSection";
import LiveMatchStats from "../components/Dashboard/LiveMatchStats";
import MetaSection from "../components/Dashboard/MetaSection";
import NewsSection from "../components/Dashboard/NewsSection";

const Dashboard = () => {
  return (
    <div className="bg-background-dark text-slate-900 dark:text-white overflow-x-hidden">
      <main className="flex flex-col items-center w-full">

        {/*<!-- Hero Section --> */}
        <Hero />

        {/* <!-- Live Stats Ticker --> */}
        <LiveMatchStats />

        {/* <!-- Meta Snapshot Section --> */}
        <MetaSection />

        {/* <!-- News & Community Section --> */}
        <NewsSection />
      </main>
      {/* <!-- Footer --> */}
      
    </div>
  );
}

export default Dashboard