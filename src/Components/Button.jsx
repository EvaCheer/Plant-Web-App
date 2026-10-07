export const Button = ({
  value,
  onClick,
  type,
  className = "",
  variant = "primary",
}) => {
  const variants = {
    primary: "bg-[#426040] text-[#FFFCF1] hover:opacity-90",
    watered: "bg-[#F9FBF7] border border-gray-200 text-[#96AC97]",
  };

  return (
    <button
      type={type}
      className={`px-4 py-2 font-nunito text-sm rounded-lg transition ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};