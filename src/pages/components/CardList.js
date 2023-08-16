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
    <ul className="flex flex-row flex-wrap  justify-center flex-start gap-4 p-4 h-full w-full items-center">
      {filteredCards.map((card) => (
        <li
          key={card.id}
          className="cursor-pointer h-80 p-2 rounded-lg shadow-md bg-gradient-to-tr from-yellow-700 from-10% via-yellow-200 via-50% to-yellow-700 to-90% flex-none w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"
        >
          <div className="h-full w-full flex flex-col items-center bg-gradient-to-tr from-slate-400 from-10% via-slate-100 via-50% to-slate-400 to-90% p-4">
            <div className="flex flex-col items-center flex-grow">
              <p className="font-bold text-lg min-w-fit">{card.name}</p>
              <p className="font-light text-sm min-w-fit">{card.type}</p>
            </div>
            <p
              className="p-2 rounded-lg text-center text-white min-w-fit w-24"
              style={{
                backgroundColor: rarities.find(
                  (rarity) => rarity.value === card.rarity,
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
