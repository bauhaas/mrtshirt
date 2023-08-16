import { useState } from "react";
import SuggestionsList from "./OptionsList";

const TypeField = ({ options, selectedTypes, onSelect }) => {
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
      !selectedTypes.includes(option),
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
        <SuggestionsList
          filteredOptions={filteredOptions}
          onClickHandler={handleSelectOption} // or handleOptionClick depending on the context
        />
      )}
    </div>
  );
};

export default TypeField;
