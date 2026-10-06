import { useState } from "react";
import { PlantsList } from "./Components/PlantsList.jsx";
import { Modal } from "./Components/Modal.jsx";
import { UtilityBar } from "./Components/UtilityBar.jsx";
import { AddPlantForm } from "./Components/AddPlantForm.jsx";
import { PlantInfo } from "./Components/PlantInfo.jsx";

export const Home = () => {
  const initialPlants = [
    {
      id: 1,
      name: "Monstera",
      scientific_name: "Monstera Deliciosa",
      description: "The big monstera in the livingroom.",
      location: "Livingroom",
      image:
        "https://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg",
      wateredAt: [
        new Date("2026-09-16T03:24:00"),
        new Date("2026-09-18T04:24:00"),
      ],
      light: "shade",
      water: "frequent",
      soil: "well-drained",
      care: "easy",
      propagation: "roots",
      pets: "poisonous",
    },
    {
      id: 2,
      name: "Money Tree",
      scientific_name: "Pachira Aquatica",
      description: "Small one on the desk.",
      location: "Bedroom",
      image:
        "https://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg",
      wateredAt: [
        new Date("2026-09-16T03:24:00"),
        new Date("2026-09-18T05:44:00"),
      ],
      light: "part-shade",
      water: "rare",
      soil: "well-drained",
      care: "easy",
      propagation: "roots",
      pets: "poisonous",
    },
  ];

  const [plants, setPlants] = useState(initialPlants);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [waterMode, setWaterMode] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setWaterMode(false);
    }
  };

  const handleAddPlant = (newPlant) => {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  };

  const handleRemovePlant = (plantId) => {
    setPlants((currentPlants) => {
      currentPlants.filter((plant) => plant.id !== plantId);
    });
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

  const handlePlantClick = (plant) => {
    if (waterMode) {
      handleWaterPlant(plant.id);
      return;
    }
    setSelectedPlant(plant);
  };

  return (
    <div
      className={
        waterMode
          ? "cursor-[url('/watering-can-cursor.png'),_auto]"
          : "cursor-auto"
      }
      onClick={handleBackgroundClick}
    >
      <div className="flex items-center gap-10 mb-12">
        <UtilityBar onWater={() => setWaterMode(true)} />
        <h1 className="kavoon-regular text-[#426040] text-6xl">Your Garden</h1>
      </div>

      <PlantsList
        plants={plants}
        onPlantClick={handlePlantClick}
        onRemove={handleRemovePlant}
      />

      <button
        className="lisu-bosa-regular"
        onClick={() => setIsAddModalOpen(true)}
      >
        Add plant
      </button>

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <AddPlantForm
          onClose={() => setIsAddModalOpen(false)}
          onAddPlant={handleAddPlant}
        />
      </Modal>

      <Modal
        isOpen={selectedPlant !== null}
        onClose={() => setSelectedPlant(null)}
      >
        {selectedPlant && (
          <PlantInfo
            plant={selectedPlant}
            onClose={() => setSelectedPlant(null)}
          />
        )}
      </Modal>
    </div>
  );
};
