import { useState } from "react";
import { MapPin } from "lucide-react";
import { TabButton } from "./TabButton";
import { Droplet, Shovel, Leaf } from "lucide-react";

export const PlantInfoNew = ({ plant }) => {
  const [activeTab, setActiveTab] = useState("watering");
  return (
    <div className="font-lora text-[#426040]">
      <header className="flex mb-4">
        <img
          className="w-30 aspect-square object-cover rounded-lg"
          alt="plant picture"
          src={plant.image}
        />
        <section className="ml-4">
          <h2 className="text-3xl text-semibold pb-1">{plant.name}</h2>
          <p className="font-nunito italic font-thin">
            {plant.scientific_name}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <MapPin size={16} strokeWidth={1.5} />
            <p className="font-nunito font-thin text-xs">{plant.location}</p>
          </div>
        </section>
      </header>

      <div className="flex gap-1 justify-between bg-[#E9EEDD] p-1 rounded-md">
        <TabButton
          label="Watering"
          isActive={activeTab === "watering"}
          icon={Droplet}
          onClick={() => setActiveTab("watering")}
        ></TabButton>
        <TabButton
          label="Repotting"
          isActive={activeTab === "repotting"}
          icon={Shovel}
          onClick={() => setActiveTab("repotting")}
        ></TabButton>
        <TabButton
          label="Details"
          isActive={activeTab === "details"}
          icon={Leaf}
          onClick={() => setActiveTab("details")}
        ></TabButton>
      </div>

      {activeTab == "watering" && <div>
        <p>Watering</p>
        </div>}

      {activeTab == "repotting" && <div>
        <p>Repotting</p>
        </div>}

      {activeTab == "details" && <div>
        <p>Details</p>
        </div>}
    </div>
  );
};
