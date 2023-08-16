import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, XCircle } from "lucide-react";
import Header from "@/components/Header";
import { useFetchCards } from "@/hooks/useFetchCards";
import { useRarityContext } from "@/contexts/rarityContext";
import CardList from "./components/CardList";
import SearchField from "./components/SearchField";

const inter = Inter({ subsets: ["latin"] });

function TypeAutocomplete({ options, selectedTypes, onSelect }) {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleSelectOption = (option) => {
    if (!selectedTypes.includes(option)) {
      onSelect([...selectedTypes, option]);
      setInputValue("");
    }
  };

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selectedTypes.includes(option)
  );

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        className="border rounded px-2 py-1"
      />
      {showSuggestions && (
        <div className="absolute bg-white border rounded shadow w-full">
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => handleSelectOption(option)}
              className="px-2 py-1 cursor-pointer hover:bg-gray-500 rounded"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SelectedTypes({ selectedTypes, onSelect }) {
  return (
    <div className="flex flex-wrap items-center mb-2 group">
      {selectedTypes.map((type) => (
        <span
          key={type}
          className="inline-flex items-center bg-gray-200 group-hover:bg-gray-400 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {type}
          <button
            type="button"
            onClick={() => onSelect(selectedTypes.filter((t) => t !== type))}
            className="ml-2 text-red-500 group-hover:text-red-500"
          >
            <XCircle />
          </button>
        </span>
      ))}
    </div>
  );
}

function RarityField({ options, value, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowSuggestions(true);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    onChange(option);
    setShowSuggestions(false);
  };

  const handleClearClick = () => {
    setInputValue(""); // Clear the input field
    onChange(""); // Call the onChange with an empty value to reset the selected rarity
  };

  return (
    <div className="relative inline-block">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        className="border rounded px-2 py-1"
      />
      {showSuggestions && (
        <ul className="absolute z-10 mt-1 bg-white border rounded shadow">
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-2 py-1 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {value && (
        <button
          type="button"
          onClick={handleClearClick}
          className="absolute right-0 top-0 mt-1 mr-2"
        >
          <Trash2 />
        </button>
      )}
    </div>
  );
}

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
        <SearchField htmlFor="searchType" label="Type">
          <TypeAutocomplete
            options={availableTypes}
            selectedTypes={selectedTypes}
            onSelect={(newSelectedTypes) => setSelectedTypes(newSelectedTypes)}
          />
        </SearchField>
        <SearchField htmlFor="searchRarity" label="Rarity">
          <RarityField
            options={rarities.map((rarity) => rarity.value)}
            value={searchRarity}
            onChange={(newValue) => setSearchRarity(newValue)}
          />
        </SearchField>
        <SearchField htmlFor="searchName" label="Name">
          <input
            type="text"
            id="searchName"
            value={searchName}
            onChange={(event) => setSearchName(event.target.value)}
            className="border rounded px-2 py-1"
          />
        </SearchField>
      </div>
      <SelectedTypes
        selectedTypes={selectedTypes}
        onSelect={setSelectedTypes}
      />

      <CardList filteredCards={filteredCards} />
    </div>
  );
}
