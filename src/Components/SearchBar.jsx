export const SearchBar = () => {
  return (
    <form className="relative">
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
        value="Search"
        className="font-nunito text-[#999998] text-sm font-thin bg-white border border-gray-200 rounded-md
                   p-2 pl-10
                   focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B]
                   focus:outline-none"
      />
    </form>
  );
};
