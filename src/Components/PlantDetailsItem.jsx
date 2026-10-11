export const PlantDetailsItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="font-nunito">
      <div className="flex gap-2 items-center">
        <Icon size={16} />
        <p className="text-sm font-light">{label}</p>
      </div>


      <p>{value}</p>
    </div>
  );
};
