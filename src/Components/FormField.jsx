export const FormField = ({htmlFor, label, children}) => {
    return (
        <div className="flex flex-col gap-1 bg-[#F8F1E9] border border-[#899988] rounded-md p-2">
            <label htmlFor={htmlFor}>{label}</label>
            {children}
        </div>
    )
}