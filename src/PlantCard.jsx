export const PlantCard = ({ plant, onRemove, onWater }) => {

  const getDaysSinceWater = (date) => {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((Date.now() - date.getTime()) / millisecondsPerDay);
  };

  const lastWatered = plant.wateredAt[plant.wateredAt.length - 1];
  const daysSinceWater = getDaysSinceWater(lastWatered);

  const wateredText =
    daysSinceWater === 0
      ? "watered today"
      : daysSinceWater === 1
        ? "watered yesterday"
        : `watered ${daysSinceWater} days ago`;

  return (
    <div key={plant.id} className="w-60 p-2 bg-white rounded-xl flex-column">
      <img alt="plant picture" src={plant.image}></img>

      <h4 className="text-lg">{plant.name}</h4>
     {/*  <p className="text-sm">{plant.location}</p> */}
      <p>{wateredText}</p>
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
