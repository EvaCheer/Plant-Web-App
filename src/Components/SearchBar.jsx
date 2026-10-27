export const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search",
  className = "",
  inputClassName = "",
}) => {

    const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form
      className={`relative w-full ${className}`}
      onSubmit={handleSubmit}
    >
      <svg
        aria-hidden="true"
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#999998] w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 4 4" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full font-nunito text-[#426040] text-sm bg-white border border-gray-200 rounded-md
                   p-2 pl-10 placeholder:text-[#999998] placeholder:font-light
                   focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B]
                   focus:outline-none ${inputClassName}`}
      />
    </form>
  );
};