export const FormField = ({htmlFor, label, children}) => {
    return (
        <div className="flex flex-col gap-1 bg-[#F5EEE4] rounded-md p-2">
            <label htmlFor={htmlFor}>{label}</label>
            {children}
        </div>
    )
}