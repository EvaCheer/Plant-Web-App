import { PlantInfoItem } from "./PlantInfoItem";

import lightIcon from "../assets/icons/sun.png";
import waterIcon from "../assets/icons/drop.png";
import careIcon from "../assets/icons/heart.png";
import petsIcon from "../assets/icons/paw.png";
import soilIcon from "../assets/icons/soil.png";
import propagationIcon from "../assets/icons/scissors.png";

export const PlantInfo = ({ plant, onClose }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 md:gap-10">
      <img
        className="w-60 aspect-square object-cover rounded-lg"
        alt="plant picture"
        src={plant.image}
      />

      <section className="flex-1 lisu-bosa-light">
        <header className="mb-6 text-[#3C3C3C]">
          <h2 className="text-4xl/12">{plant.name}</h2>
          <p className="lisu-bosa-light-italic text-2xl">{plant.scientific_name}</p>
        </header>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-[#999998]">
          <PlantInfoItem icon={lightIcon} value={plant.light} />
          <PlantInfoItem icon={soilIcon} value={plant.soil} />
          <PlantInfoItem icon={waterIcon} value={plant.water} />
          <PlantInfoItem icon={careIcon} value={plant.care} />
          <PlantInfoItem icon={propagationIcon} value={plant.propagation} />
          <PlantInfoItem icon={petsIcon} value={plant.pets} />
        </div>
      </section>
    </div>
  );
};
