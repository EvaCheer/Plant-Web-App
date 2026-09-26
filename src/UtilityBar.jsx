export const UtilityBar = ({ onWater }) => {
  return (
    <button
      className="cursor-pointer transition duration-200 hover:rotate-15 hover:drop-shadow-md active:scale-95"
      onClick={onWater}
    >
      <img
        className="w-30 max-w-full h-auto object-contain drop-shadow-lg"
        src="/watering-can.png"
        alt="watering-can"
      />
    </button>
  );
};
