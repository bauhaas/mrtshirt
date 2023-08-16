const SuggestionsList = ({ filteredOptions, onClickHandler }) => (
  <ul className="absolute bg-white border rounded shadow">
    {filteredOptions.map((option) => (
      <li
        key={option}
        onClick={() => onClickHandler(option)}
        className="px-2 py-1 cursor-pointer hover:bg-gray-300 rounded"
      >
        {option}
      </li>
    ))}
  </ul>
);

export default SuggestionsList;
