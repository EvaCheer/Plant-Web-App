export const PlantsList = () => {
  const plants = [
    {
      id: 1,
      name: "Monstera",
      description: "The big monstera in the livingroom.",
      location: "Livingroom",
      image:
        "https://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg",
      wateredAt: [
        new Date("2026-09-16T03:24:00"),
        new Date("2026-09-18T04:24:00")
      ],
    },
    {
      id: 2,
      name: "Money Tree",
      description: "Small one on the desk.",
      location: "Bedroom",
      image:
        "https://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg",
      wateredAt: [
        new Date("2026-09-16T03:24:00"),
        new Date("2026-09-18T05:44:00"),
      ],
    },
  ];

  


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {plants.map((plant) => {
        return (
          <div
            key={plant.id}
            className="w-60 p-2 bg-white rounded-xl flex-column"
          >
            <h4 className="font-bold text-lg">{plant.name}</h4>
            <p className="text-sm text-gray-600">{plant.location}</p>
            <img alt="plant picture" src={plant.image}></img>
          </div>
        );
      })}
    </div>
  );
};
