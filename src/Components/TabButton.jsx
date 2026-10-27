export const TabButton = ({ label, isActive, icon: Icon, onClick }) => {
  return (
      <button
        onClick={onClick}
        className={`flex flex-1 items-center justify-center 
             font-nunito text-sm
             gap-1 p-2 rounded-md h-7 transition-colors ${
               isActive
                 ? "bg-[#F2F7EC] text-[#426040] shadow-sm"
                 : "text-[#777D70]"
             }`}
      >
       {Icon && <Icon size={16} />}
        {label}
      </button>
  );
};
