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
      className={`fixed inset-0 z-50 flex justify-center items-center p-3
        transition-colors duration-300 
        ${isOpen ? "visible bg-black/20" : "invisible"}`}

      onClick={handleBackgroundClick}
    >
      <div className={`max-w-full min-w-0 rounded-lg p-4 sm:p-6 ${variants[variant]}`}>{children}</div>
    </div>
  );
};
