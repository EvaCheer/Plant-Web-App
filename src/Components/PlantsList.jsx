import { useState } from "react";
import { PlantCard } from "./PlantCard";

export const PlantsList = ({plants, onPlantClick, handleRemovePlant: onRemove}) => {

  return (
    <div className="lisu-bosa-regular grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {plants.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            onRemove={onRemove}
            onClick={() => onPlantClick(plant)}
          ></PlantCard>
        );
      })}
    </div>
  );
};
