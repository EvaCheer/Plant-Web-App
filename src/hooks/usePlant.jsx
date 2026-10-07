import { useState } from "react";

export const usePlant = () => {


  const [plants, setPlants] = useState(initialPlants);
  const [selectedPlant, setSelectedPlant] = useState(null);

    const handleAddPlant = (newPlant) => {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  };

  const handleRemovePlant = (plantId) => {
    setPlants((currentPlants) => 
      currentPlants.filter((plant) => plant.id !== plantId)
    );
  };

  const handleWaterPlant = (plantId) => {
    setPlants((currentPlants) =>
      currentPlants.map((plant) => {
        if (plant.id === plantId) {
          return {
            ...plant,
            wateredAt: [...plant.wateredAt, new Date()],
          };
        }
        return plant;
      }),
    );
  };
}