export const PlantInfoItem = ({icon, value}) => {
    return (
        <div className="flex gap-4">
            <img src={icon} className="w-5 h-5 object-contain shrink-0" alt="" />
            <p>{value}</p>
        </div>
    )
}