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

  const toggleAddPlantModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
    console.log("You clicked Add plant!");
  };

  const toggleWaterMode = () => {
    setWaterMode(!waterMode);
    console.log("You changed watering mode!");
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      setWaterMode(false);
    }
  };

  const handleOnAddPlant = (newPlant) => {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
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
        <UtilityBar onWater={toggleWaterMode}></UtilityBar>
        <h1 className="kavoon-regular text-[#426040] text-6xl">Your Garden</h1>
      </div>

      <PlantsList
        plants={plants}
        setPlants={setPlants}
        waterMode={waterMode}
      ></PlantsList>

      <button className="lisu-bosa-regular" onClick={toggleAddPlantModal}>
        Add plant
      </button>

      <Modal isAddModalOpen={isAddModalOpen}>
        <AddPlantForm
          onClose={toggleAddPlantModal}
          onAddPlant={handleOnAddPlant}
        ></AddPlantForm>
      </Modal>

      <Modal isAddModalOpen={true}>
        <PlantInfo plant={plants[0]}></PlantInfo>
      </Modal>
    </div>
  );
};
