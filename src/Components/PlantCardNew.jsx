import { Button } from "./Button";

export const PlantCardNew = ({ plant, onRemove, onWater, onClick }) => {
  const getDaysSinceWater = (date) => {
    if (date === undefined) {
      return undefined;
    }

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((Date.now() - date.getTime()) / millisecondsPerDay);
  };

  const lastWatered = plant.wateredAt[plant.wateredAt.length - 1];
  const daysSinceWater = getDaysSinceWater(lastWatered);
  const wateredToday = daysSinceWater === 0;

  let wateredText;

  switch (daysSinceWater) {
    case 0:
      wateredText = "Today";
      break;
    case 1:
      wateredText = "Yesterday";
      break;
    case undefined:
      wateredText = "no water history";
      break;
    default:
      wateredText = `${daysSinceWater} days ago`;
  }

  return (
    <div
      className="w-80 bg-white shadow-md rounded-lg flex-column hover:drop-shadow-sm transition"
      onClick={onClick}
    >
      <img
        className="w-full aspect-square object-cover rounded-t-lg"
        alt="plant picture"
        src={plant.image}
      ></img>

      <div className="p-4">
        <div className="pb-4">
          <h3 className="text-xl pb-1">{plant.name}</h3>
          <section className="flex justify-between font-nunito text-sm font-thin text-[#999998]">
            <p>Last watered</p>
            <p className="font-medium">{wateredText}</p>
          </section>
        </div>
        <Button
          className="w-full p-2"
          value={wateredToday ? "Watered" : "Water"}
          onClick={(e) => {
            e.stopPropagation();
            onWater(plant.id)}}
          variant={ wateredToday ? "watered" : "primary"}
        />
      </div>
    </div>
  );
};
