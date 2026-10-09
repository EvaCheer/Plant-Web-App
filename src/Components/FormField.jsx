export const FormField = ({ htmlFor, label, children, action}) => {
  return (
    <div className="flex flex-col gap-1 rounded-md p-2">
      <div className="flex justify-between items-center
      text-[#426040] text-xs font-semibold tracking-[.10em]">
        <label htmlFor={htmlFor}>{label}</label>
        {action}
      </div>
      {children}
    </div>
  );
};
