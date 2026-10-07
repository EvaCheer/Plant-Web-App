import { useState } from "react";
import { PlantCard } from "./PlantCard";
import { PlantCardNew } from "./PlantCardNew";

export const PlantsList = ({ plants, onWater, onRemove, onClick }) => {
  return (
    <div className="font-lora grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
    </div>
  );
};
