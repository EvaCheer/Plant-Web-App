import { useState } from "react";
import { PlantsList } from "./Components/PlantsList.jsx";
import { Modal } from "./Components/Modal.jsx";
import { UtilityBar } from "./Components/UtilityBar.jsx";
import { AddPlantForm } from "./Components/AddPlantForm.jsx";

export const Home = () => {
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

      <PlantsList waterMode={waterMode}></PlantsList>
      <button className="lisu-bosa-regular" onClick={toggleAddPlantModal}>
        Add plant
      </button>

      <Modal isAddModalOpen={isAddModalOpen}>
              <AddPlantForm onClose={toggleAddPlantModal}></AddPlantForm>
      </Modal>
    </div>
  );
};
