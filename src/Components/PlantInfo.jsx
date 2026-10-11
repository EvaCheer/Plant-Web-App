import { useState } from "react";
import { TabButton } from "./TabButton";
import { PlantDetailsItem } from "./PlantDetailsItem";
import {
  Droplet,
  Shovel,
  Leaf,
  Heart,
  MapPin,
  Cat,
  Sprout,
  Sun,
  Scissors,
  CalendarDays,
} from "lucide-react";
import { getWateredText as dateToText, formatDate } from "../utils/dateUtils";

export const PlantInfo = ({ plant, onRepotPlant }) => {
  const [activeTab, setActiveTab] = useState("watering");
  const [repotDate, setRepotDate] = useState("");

  const handleRepotSubmit = (event) => {
    event.preventDefault();
    console.log(repotDate)

    const [year, month, day] = repotDate.split("-").map(Number)
    const selectedDate = new Date(year, month - 1, day)
    console.log(selectedDate)

    const newPlant = {
      ...plant, 
      repottedAt: [
      ...(plant.repottedAt ?? []), selectedDate
      ]
    }

    onRepotPlant(newPlant)
    setRepotDate("")
  };

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

      {activeTab == "watering" && (
        <div>
          <section className="my-6">
            <h2 className="text-xl mb-2">Watering history</h2>
            <p className="font-nunito text-sm">
              Last watered:{" "}
              {dateToText(plant.wateredAt[plant.wateredAt.length - 1])}
            </p>
          </section>
          <section className="flex flex-col gap-4">
            {plant.wateredAt.map((date) => {
              return (
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} color="#99B674" />
                  <div className="font-nunito">
                    <p className="text-sm">{formatDate(date)}</p>
                    <p className="text-xs">Watered</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      )}

      {activeTab == "repotting" && (
        <div>
          <section className="my-6">
            <h2 className="text-xl mb-2">Repotting history</h2>
            <p className="font-nunito text-sm">
              Last repotted:{" "}
              {formatDate(plant.repottedAt[plant.repottedAt.length - 1])}
            </p>
          </section>

          <form className="mb-4" onSubmit={handleRepotSubmit}>
            <label htmlFor="repotDate">Repotting date: </label>
            <div className="flex">
              <input
                type="date"
                id="repotDate"
                name="repotDate"
                value={repotDate}
                onChange={(e) => setRepotDate(e.target.value)}
              ></input>
              <button type="submit">Repot</button>
            </div>
          </form>

          <section className="flex flex-col gap-4">
            {plant.repottedAt.map((date) => {
              return (
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} color="#99B674" />
                  <div className="font-nunito">
                    <p className="text-sm">{formatDate(date)}</p>
                    <p className="text-xs">Repotted</p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      )}

      {activeTab == "details" && (
        <div>
          <section className="my-4">
            <h2 className="text-xl mb-2">About your plant</h2>
            <p className="font-nunito text-sm">{plant.description}</p>
          </section>
          <section className="grid grid-cols-2 gap-4">
            <PlantDetailsItem icon={Sun} value={plant.light} label="Light" />
            <PlantDetailsItem icon={Sprout} value={plant.soil} label="Soil" />
            <PlantDetailsItem
              icon={Droplet}
              value={plant.water}
              label="Water"
            />
            <PlantDetailsItem icon={Heart} value={plant.care} label="Care" />
            <PlantDetailsItem
              icon={Scissors}
              value={plant.propagation}
              label="Propagation"
            />
            <PlantDetailsItem
              icon={Cat}
              value={plant.pets}
              label="Pet Safety"
            />
          </section>
        </div>
      )}
    </div>
  );
};
