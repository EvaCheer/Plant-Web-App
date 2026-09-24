import { useState } from "react";

const initialPlants = [
  {
    id: 1,
    name: "Monstera",
    description: "The big monstera in the livingroom.",
    location: "Livingroom",
    image:
      "https://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg",
    wateredAt: [
      new Date("2026-09-16T03:24:00"),
      new Date("2026-09-18T04:24:00"),
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

export const PlantsList = () => {
  const [plants, setPlants] = useState(initialPlants);

  const handleAddPlant = () => {
    //form with name, description, location
    //handle max characters
    //a modal pops up with the form
  };

  const handleRemovePlant = (plantId) => {
    const newPlants = plants.filter((plant) => plant.id != plantId);
    setPlants(newPlants);
    console.log("Plant removed!");
  };

  const handleWaterPlant = (plantId) => {
    const newPlants = plants.map((plant) => {
      if (plant.id === plantId) {
        return {
          ...plant,
          wateredAt: [...plant.wateredAt, new Date()],
        };
      } else {
        return plant;
      }
    });

    setPlants(newPlants);
  };

  return (
    <div className="lisu-bosa-regular grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {plants.map((plant) => {
        return (
          <div
            key={plant.id}
            className="w-60 p-2 bg-white rounded-xl flex-column"
          >
            <img alt="plant picture" src={plant.image}></img>

            <h4 className="text-lg">{plant.name}</h4>
            <p className="text-sm">{plant.location}</p>
            <p>Last Watered: {plant.wateredAt[plant.wateredAt.length - 1].toLocaleString()}</p>
            <button
              onClick={() => {
                handleRemovePlant(plant.id);
              }}
            >
              Remove
            </button>
            <button
              onClick={() => {
                handleWaterPlant(plant.id);
              }}
            >
              Water
            </button>
          </div>
        );
      })}
    </div>
  );
};
