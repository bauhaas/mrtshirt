import { createContext, useContext } from "react";

const RarityContext = createContext();

export const useRarityContext = () => useContext(RarityContext);

export const RarityProvider = ({ children }) => {
  const rarities = [
    { value: "Common", color: "#2e2e2e" },
    { value: "Uncommon", color: "#ababab" },
    { value: "Rare", color: "#ffca00" },
    { value: "Mythic Rare", color: "#ff8600" },
    { value: "Special", color: "#fd6ee1" },
    { value: "Basic Land", color: "#000000" },
  ];

  return (
    <RarityContext.Provider value={rarities}>{children}</RarityContext.Provider>
  );
};
