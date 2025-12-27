const HeroLore = () => {
  return (
    <section>
      <div className="bg-[#1c212c] p-6 rounded-xl border border-border-dark">
        <h3 className="text-white font-bold mb-2">Lore</h3>
        <p className="text-sm text-gray-400 font-body italic">
          "Magic is an abomination."
        </p>
        <p className="text-sm text-gray-400 font-body mt-2 line-clamp-3">
          The monks of Turstarkuri watched the rugged valleys below their
          mountain monastery as wave after wave of invaders swept through the
          lower kingdoms. Ascetic and pragmatic, in their remote monastic eyrie
          they remained aloof from mundane strife.
        </p>
        <button className="mt-3 text-primary text-xs font-bold uppercase tracking-wide hover:underline">
          Read Full Lore
        </button>
      </div>
    </section>
  );
};

export default HeroLore;
