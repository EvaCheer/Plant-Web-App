export const AddNewPlantButton = ({onClick}) => {
    return (
        <button className="w-80 border border-2 border-dashed border-[#C1DCBA] shadow-md rounded-lg
            hover:bg-white hover:border-[#E5B84B] transition"
            onClick={onClick}>
            <span className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#E7EDDD] text-[#829976] text-xl
                flex items-center justify-center
                    hover:bg-[#FAF4E7] hover:scale-110">
+
                </div>
                <h3 className="pb-2">Add new plant</h3>
                <p className="font-nunito text-xs font-light">Add another plant to your <br /> growing collection.</p>
            </span>
        </button>
    )
}