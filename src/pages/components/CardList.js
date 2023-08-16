const { useRarityContext } = require("@/contexts/rarityContext");

const CardList = ({ filteredCards }) => {
  const rarities = useRarityContext();

  if (filteredCards.length === 0) {
    return (
      <p className="text-center text-red-500 font-semibold mt-4">
        No card found
      </p>
    );
  }

  return (
    <ul className="flex flex-row flex-wrap flex-start gap-4 p-4 h-full w-full">
      {filteredCards.map((card) => (
        <li
          key={card.id}
          className="cursor-pointer h-80 p-2 rounded-lg shadow-md bg-gradient-to-tr from-yellow-700 from-10% via-yellow-200 via-50% to-yellow-700 to-90%"
          style={{ flex: `0 0 calc(100% / 5 - 1rem)` }}
        >
          <div className="h-full w-full flex items-center flex-col bg-slate-300">
            <p className="font-bold text-lg">{card.name}</p>
            <p>Type: {card.type}</p>
            <p className="font-bold text-xs bg-white p-2 rounded-full self-end">
              {card.number}
            </p>
            <p
              className="p-2 rounded-lg min-w-fit w-24 text-center text-white"
              style={{
                backgroundColor: rarities.find(
                  (rarity) => rarity.value === card.rarity
                )?.color,
              }}
            >
              {card.rarity}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
