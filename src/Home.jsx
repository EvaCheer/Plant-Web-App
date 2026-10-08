import { useState } from "react";
import { PlantsList } from "./Components/PlantsList.jsx";
import { Modal } from "./Components/Modal.jsx";
import { UtilityBar } from "./Components/UtilityBar.jsx";
import { AddPlantForm } from "./Components/AddPlantForm.jsx";
import { PlantInfo } from "./Components/PlantInfo.jsx";
import { SearchBar } from "./Components/SearchBar.jsx";
import { toWords } from "number-to-words";

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
  const [selectedPlant, setSelectedPlant] = useState(null);

  const plantCount = plants.length;
  const plantCountText = toWords(plantCount);
  const capitalizedPlantCount =
    plantCountText.charAt(0).toUpperCase() + plantCountText.slice(1);

  const handleAddPlant = (newPlant) => {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  };

  const handleRemovePlant = (plantId) => {
    setPlants((currentPlants) =>
      currentPlants.filter((plant) => plant.id !== plantId),
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

  return (
    <div className="max-w-6xl mx-auto">
      <header className="flex justify-between p-8 mb-4 items-end">
        <div>
          <p className="font-nunito text-xs font-bold text-[#99B674] tracking-[.20em] ">
            FIELD NOTES
          </p>
          <h1 className="font-lora text-[#426040] pb-1 pt-1 text-6xl">
            Your Garden
          </h1>
          <p className="text-[#597557] font-nunito">
            {capitalizedPlantCount} {plantCount === 1 ? "plant" : "plants"}{" "}
            enjoying the sunlight in your home.
          </p>
        </div>
        <SearchBar />
      </header>

      <PlantsList
        plants={plants}
        onWater={handleWaterPlant}
        onRemove={handleRemovePlant}
        onClick={setSelectedPlant}
        onAddNewPlant={() => setIsAddModalOpen(true)}
      />

{/*       <button className="font-lora" onClick={() => setIsAddModalOpen(true)}>
        Add plant
      </button> */}

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
