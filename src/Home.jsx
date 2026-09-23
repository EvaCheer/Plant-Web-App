import { PlantsList } from "./PlantsList.jsx";

export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black-800 mb-8 text-center">
        Plants
      </h1>
      
      <PlantsList></PlantsList>
    </div>
  );
};
