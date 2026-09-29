import { useState } from "react";
import { PlantCard } from "./PlantCard";

export const PlantsList = ({plants, setPlants, waterMode}) => {

  const handleAddPlant = () => {
    //form with name, description, location
    //handle max characters
    //a modal pops up with the form
  };

  const handleRemovePlant = (plantId) => {
    const newPlants = plants.filter((plant) => plant.id != plantId);
    setPlants(newPlants);
    console.log("Plant removed!");
  };

  const handleWaterPlant = (plantId) => {
    const newPlants = plants.map((plant) => {
      if (plant.id === plantId) {
        return {
          ...plant,
          wateredAt: [...plant.wateredAt, new Date()],
        };
      } else {
        return plant;
      }
    });

    setPlants(newPlants);
  };

  return (
    <div className="lisu-bosa-regular grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {plants.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            onRemove={handleRemovePlant}
            onWater={handleWaterPlant}
            onClick={waterMode ? () => handleWaterPlant(plant.id) : undefined }
          ></PlantCard>
        );
      })}
    </div>
  );
};
