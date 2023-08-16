import { XCircle } from "lucide-react";

const SelectedTypes = ({ selectedTypes, onSelect }) => {
  return (
    <div className="flex flex-wrap items-center mx-40">
      {selectedTypes.map((type) => (
        <span
          key={type}
          className="inline-flex items-center bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {type}
          <button
            type="button"
            onClick={() => onSelect(selectedTypes.filter((t) => t !== type))}
            className="ml-2 text-red-500 "
          >
            <XCircle />
          </button>
        </span>
      ))}
    </div>
  );
};

export default SelectedTypes;
