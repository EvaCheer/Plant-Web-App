import { PlantCardNew } from "./PlantCardNew";
import { AddNewPlantButton } from "./AddNewPlantButton";

export const PlantsList = ({ plants, onWater, onRemove, onClick, onAddNewPlant}) => {
  return (
    <div className="font-lora text-[#426040] font-medium grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {plants.map((plant) => {
        return (
          <PlantCardNew
            key={plant.id}
            plant={plant}
            onRemove={onRemove}
            onWater={onWater}
            onClick={() => onClick(plant)}
          ></PlantCardNew>
        );
      })}
      <AddNewPlantButton onClick={onAddNewPlant}/>
    </div>
  );
};
