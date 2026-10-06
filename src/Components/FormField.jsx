export const FormField = ({ htmlFor, label, children, action}) => {
  return (
    <div className="flex flex-col gap-1 bg-[#FFFCF1] border border-[#899988] rounded-md p-2">
      <div className="flex justify-between items-center">
        <label htmlFor={htmlFor}>{label}</label>
        {action}
      </div>
      {children}
    </div>
  );
};
