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
        new Date("2026-08-01"),
        new Date("2026-08-05"),
        new Date("2026-08-15"),
        new Date("2026-08-24"),
        new Date("2026-08-28"),
        new Date("2026-09-01"),
        new Date("2026-09-05"),
        new Date("2026-09-10"),
        new Date("2026-09-16"),
        new Date("2026-09-18"),
        new Date("2026-09-25"),
        new Date("2026-10-01"),
        new Date("2026-10-17"),
      ],
      repottedAt: [
        new Date("2026-09-04T03:24:00"),
        new Date("2026-08-01T04:24:00"),
      ],
      light: "Shade",
      water: "Frequent",
      soil: "Well-drained",
      care: "Easy",
      propagation: "Roots",
      pets: "Poisonous",
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
      repottedAt: [
        new Date("2026-07-04T03:24:00"),
        new Date("2026-06-01T04:24:00"),
      ],
      light: "Part-shade",
      water: "Rare",
      soil: "Well-drained",
      care: "Easy",
      propagation: "Roots",
      pets: "Poisonous",
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

    setSelectedPlant(null);
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

  const handleRepotPlant = (newPlant) => {
    setPlants((currentPlants) =>
      currentPlants.map((current) =>
        current.id === newPlant.id ? newPlant : current,
      ),
    );

    setSelectedPlant(newPlant);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="flex flex-col gap-5 p-4 mb-4 items-stretch sm:p-6 md:flex-row md:justify-between md:items-end md:p-8">
        <div>
          <p className="font-nunito text-xs font-bold text-[#99B674] tracking-[.20em] ">
            FIELD NOTES
          </p>
          <h1 className="font-lora text-[#426040] pb-1 pt-1 text-4xl sm:text-5xl md:text-6xl">
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
        onClick={setSelectedPlant}
        onAddNewPlant={() => setIsAddModalOpen(true)}
      />

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        variant="add_plant"
      >
        <AddPlantForm
          onClose={() => setIsAddModalOpen(false)}
          onAddPlant={handleAddPlant}
        />
      </Modal>

      <Modal
        isOpen={selectedPlant !== null}
        onClose={() => setSelectedPlant(null)}
        variant="info"
      >
        {selectedPlant && (
          <PlantInfo
            plant={selectedPlant}
            onRepotPlant={handleRepotPlant}
            onRemovePlant={handleRemovePlant}
          />
        )}
      </Modal>
    </div>
  );
};
