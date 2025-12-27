const Footer = () => {
  return (
    <footer className="bg-dark border-t border-border-dark pt-12 pb-8 px-4 md:px-10">
      <div className="max-w-300 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 text-white mb-4">
            <div className="size-6 text-primary">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path>
              </svg>
            </div>
            <span className="font-display font-bold text-lg">DOTA2STATS</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            The ultimate companion for your Dota 2 journey. Analyze matches,
            track progress, and master the meta with community-powered insights.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Hero Stats
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Global Trends
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Pro Circuit
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Items Database
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Guides
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                API Documentation
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-300 mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs">
          © 2024 Dota2Stats. Dota 2 is a registered trademark of Valve
          Corporation.
        </p>
        <div className="flex gap-4">
          <a
            className="text-gray-500 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              public
            </span>
          </a>
          <a
            className="text-gray-500 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              alternate_email
            </span>
          </a>
          <a
            className="text-gray-500 hover:text-white transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              rss_feed
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
