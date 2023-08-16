import { Trash2 } from "lucide-react";
import { useState } from "react";
import SuggestionsList from "./OptionsList";

const RarityField = ({ options, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase()),
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
    setInputValue("");
    onChange("");
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
        <SuggestionsList
          filteredOptions={filteredOptions}
          onClickHandler={handleOptionClick} // or handleOptionClick depending on the context
        />
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
};

export default RarityField;
