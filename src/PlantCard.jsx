export const Card = ({plant}) => {
  return (
    <div className="w-60 p-2 bg-white rounded-xl flex-column">
      <img
        alt="plant picture"
        src={plant.image}
        className="h-40 object-cover rounded-xl center"
      ></img>
      <h2 className="font-bold text-lg">{plant.name}</h2>
      <p className="text-sm text-gray-600">{plant.description}</p>
    </div>
  );
}

