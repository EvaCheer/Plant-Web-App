export const PlantCard = ({ plant, onRemove, onWater }) => {
  const daysFromLastWatered = (date) => {};

  return (
    <div key={plant.id} className="w-60 p-2 bg-white rounded-xl flex-column">
      <img alt="plant picture" src={plant.image}></img>

      <h4 className="text-lg">{plant.name}</h4>
      <p className="text-sm">{plant.location}</p>
      <p>
        Last Watered:{" "}
        {plant.wateredAt[plant.wateredAt.length - 1].toLocaleString()}
      </p>
      <button
        onClick={() => {
          onRemove(plant.id);
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          onWater(plant.id);
        }}
      >
        Water
      </button>
    </div>
  );
};
