import { useState } from "react";
import { PlantsList } from "./PlantsList.jsx";
import { AddPlantModal } from "./AddPlantModal";

export const Home = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddPlantModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
    console.log("You clicked Add plant!");
  };

  return (
    <div>
      <h1 className="kavoon-regular text-[#426040] text-5xl mb-10 text-center">
        Your Garden
      </h1>

      <PlantsList></PlantsList>
      <button className="lisu-bosa-regular" onClick={() => toggleAddPlantModal()}>Add plant</button>

      {isAddModalOpen && <AddPlantModal />}
    </div>
  );
};
