import { AddPlantForm } from "./AddPlantForm";

export const Modal = ({ isAddModalOpen, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center 
        transition-colors transition-opacity duration-300 ${isAddModalOpen ? "visible bg-black/20" : "invisible"}`}
    >
      {children}
    </div>
  );
};
