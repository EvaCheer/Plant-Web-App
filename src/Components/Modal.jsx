import { AddPlantForm } from "./AddPlantForm";

export const Modal = ({ isOpen, onClose, children }) => {

  const handleBackgroundClick = (event) => {
    if(event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center 
        transition-colors transition-opacity duration-300 
        ${isOpen ? "visible bg-black/20" : "invisible"}`}

      onClick={handleBackgroundClick}
    >
      <div className="bg-[#FFFFFF] rounded-lg p-6">{children}</div>
    </div>
  );
};
