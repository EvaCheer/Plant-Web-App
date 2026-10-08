export const AddNewPlantButton = ({onClick}) => {
    return (
        <button className="group w-80 h-[460px] border-2 border-dashed border-[#C1DCBA] shadow-md rounded-lg
        flex items-center justify-center
            hover:bg-white hover:border-[#E5B84B] transition"
            onClick={onClick}>
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-4 rounded-full bg-[#E7EDDD] text-[#829976] text-xl
                flex items-center justify-center
                    group-hover:bg-[#FAF4E7] group-hover:scale-110 transition">
+
                </div>
                <h3 className="pb-2">Add new plant</h3>
                <p className="font-nunito text-xs font-light">Add another plant to your <br /> growing collection.</p>
            </div>
        </button>
    )
}