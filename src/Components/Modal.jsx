import { AddPlantForm } from "./AddPlantForm";

export const Modal = ({ isOpen, onClose, children, variant }) => {

  const handleBackgroundClick = (event) => {
    if(event.target === event.currentTarget) {
      onClose();
    }
  }

  const variants = {
    info: "bg-[#FFFFFF]",
    add_plant: "bg-[#F3F7ED]",
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center 
        transition-colors transition-opacity duration-300 
        ${isOpen ? "visible bg-black/20" : "invisible"}`}

      onClick={handleBackgroundClick}
    >
      <div className={`rounded-lg p-6 ${variants[variant]}`}>{children}</div>
    </div>
  );
};
