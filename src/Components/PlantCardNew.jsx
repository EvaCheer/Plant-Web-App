export const PlantCardNew = ({ plant, onRemove, onWater, onClick }) => {
  const getDaysSinceWater = (date) => {

    if(date===undefined) {
      return undefined
    }

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.floor((Date.now() - date.getTime()) / millisecondsPerDay);
  };

  const lastWatered = plant.wateredAt[plant.wateredAt.length - 1];
  const daysSinceWater = getDaysSinceWater(lastWatered);

  let wateredText;
  
  switch (daysSinceWater) {
    case 0:
      wateredText = "watered today";
      break;
    case 1:
      wateredText = "watered yesterday";
      break;
    case undefined:
      wateredText = "no water history";
      break;
    default:
      wateredText = `watered ${daysSinceWater} days ago`
  }

  return (
    <div
      className="w-60 pt-4 px-4 pb-2 bg-white shadow-md rounded-lg flex-column"
      onClick={onClick}
    >
      <img
        className="w-full aspect-square object-cover rounded-lg"
        alt="plant picture"
        src={plant.image}
      ></img>
      

      <div className="py-2">
        <h4 className="text-lg">{plant.name}</h4>
        <p className="font-nunito text-sm font-thin text-[#999998]">{wateredText}</p>
      </div>

   {/*          <button
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
      </button>  */}
    </div>
  );
};
