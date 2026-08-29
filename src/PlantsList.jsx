export const PlantsList = () => {
  const plants_list = [
    {
      name: "Monstera",
      location: "Livingroom",
      image:
        "ttps://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg",
    },
    {
      name: "Money Tree",
      location: "Bedroom",
      image:
        "ttps://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {plants_list.map((plants_list) => {
        return (
          <div className = "w-60 p-2 bg-white rounded-xl flex-column">
            <h4 className="font-bold text-lg">{plants_list.name}</h4>
            <p className="text-sm text-gray-600">{plants_list.location}</p>
            <img alt="plant picture" src="https://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg"></img>
          </div>
        );
      })}
    </div>
  );
};
