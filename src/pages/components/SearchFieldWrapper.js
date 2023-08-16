const SearchFieldWrapper = ({ htmlFor, label, children }) => (
  <div className="flex flex-row gap-2 justify-between items-center">
    <label htmlFor={htmlFor} className="text-white">
      {label}
    </label>
    {children}
  </div>
);

export default SearchFieldWrapper;
