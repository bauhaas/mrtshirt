import { Inter } from "next/font/google";
import { useState } from "react";
import Header from "@/components/Header";
import { useFetchCards } from "@/hooks/useFetchCards";
import { useRarityContext } from "@/contexts/rarityContext";
import CardList from "./components/CardList";
import SearchFieldWrapper from "./components/SearchFieldWrapper";
import RarityField from "./components/RarityField";
import TypeField from "./components/TypeField";
import SelectedTypes from "./components/SelectedTypes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchRarity, setSearchRarity] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const { cards, availableTypes } = useFetchCards();

  const rarities = useRarityContext();

  const filteredCards = cards.filter((card) => {
    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.some((type) => card.types.includes(type)); // Use `some` instead of `every`

    const matchesRarity = searchRarity === "" || card.rarity === searchRarity;
    const matchesName =
      searchName === "" ||
      card.name.toLowerCase().includes(searchName.toLowerCase());

    return matchesType && matchesRarity && matchesName;
  });

  return (
    <div className="bg-slate-600 min-h-screen">
      <Header />
      <div className="flex flex-row items-center min-h-fit justify-center gap-2 min-w-fit m-2 ">
        <SearchFieldWrapper htmlFor="searchType" label="Type">
          <TypeField
            options={availableTypes}
            selectedTypes={selectedTypes}
            onSelect={(newSelectedTypes) => setSelectedTypes(newSelectedTypes)}
          />
        </SearchFieldWrapper>
        <SearchFieldWrapper htmlFor="searchRarity" label="Rarity">
          <RarityField
            options={rarities.map((rarity) => rarity.value)}
            value={searchRarity}
            onChange={(newValue) => setSearchRarity(newValue)}
          />
        </SearchFieldWrapper>
        <SearchFieldWrapper htmlFor="searchName" label="Name">
          <input
            type="text"
            id="searchName"
            value={searchName}
            onChange={(event) => setSearchName(event.target.value)}
            className="border rounded px-2 py-1"
          />
        </SearchFieldWrapper>
      </div>
      <SelectedTypes
        selectedTypes={selectedTypes}
        onSelect={setSelectedTypes}
      />
      <CardList filteredCards={filteredCards} />
    </div>
  );
}
