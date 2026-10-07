import { useState } from "react";
import { PlantCard } from "./PlantCard";
import { PlantCardNew } from "./PlantCardNew"

export const PlantsList = ({
  plants,
  onPlantClick,
  handleRemovePlant: onRemove,
}) => {
  return (
    <div className="font-lora grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {plants.map((plant) => {
        return (
          <PlantCardNew
            key={plant.id}
            plant={plant}
            onRemove={onRemove}
            onClick={() => onPlantClick(plant)}
          ></PlantCardNew>
        );
      })}
    </div>
  );
};
