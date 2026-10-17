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
  TrashIcon,
} from "lucide-react";
import { getWateredText as dateToText, formatDate } from "../utils/dateUtils";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { IntervalsChart } from "./IntervalsChart";


const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const PlantInfo = ({ plant, onRepotPlant, onRemovePlant }) => {
  const [activeTab, setActiveTab] = useState("watering");
  const [repotDate, setRepotDate] = useState(getTodayDate());
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const handleRepotSubmit = (event) => {
    event.preventDefault();
    console.log(repotDate);
    if (!repotDate) return;

    const [year, month, day] = repotDate.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);
    console.log("Date: ", selectedDate);

    if (isNaN(selectedDate.getTime())) return;
    // check to see if selected date is in the future
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate > today) return;

    const isInArray = (plant.repottedAt ?? []).some((currentDate) => {
      return currentDate.getTime() === selectedDate.getTime();
    });

    if (isInArray) return;

    const newPlant = {
      ...plant,
      repottedAt: [...(plant.repottedAt ?? []), selectedDate].sort(
        (a, b) => b.getTime() - a.getTime(),
      ),
    };

    onRepotPlant(newPlant);
    setRepotDate(getTodayDate());
  };

  return (
    <div className="flex flex-col font-lora text-[#426040] w-[600px] max-w-full p-2">
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
      {/* menu to choose to render watering, repotting or details */}
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
      {/*render watering section */}
      {activeTab == "watering" && (
        <div>
          <section className="my-6">
            <h2 className="text-xl mb-2">Watering history</h2>
            <p className="font-nunito text-sm">
              Last watered:{" "}
              {plant.wateredAt.length
                ? dateToText(plant.wateredAt[plant.wateredAt.length - 1])
                : "Never watered"}
            </p>
          </section>
          <section>
                <IntervalsChart dates={plant.wateredAt} />
          </section>
          <section className="flex flex-col gap-4 h-48 overflow-y-auto">
            {plant.wateredAt.map((date) => {
              return (
                <div key={date.getTime()} className="flex items-center gap-3">
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
      {/*render repotting section */}
      {activeTab == "repotting" && (
        <div>
          <section className="my-6">
            <h2 className="text-xl mb-2">Repotting history</h2>
            <p className="font-nunito text-sm">
              Last repotted:{" "}
              {plant.repottedAt.length
                ? formatDate(plant.repottedAt[0])
                : "Never repotted"}
            </p>
          </section>

          <form
            className="mb-8 font-nunito text-sm"
            onSubmit={handleRepotSubmit}
          >
            <label htmlFor="repotDate">Repotting date: </label>
            <div className="flex justify-between gap-2 mt-2">
              <input
                type="date"
                id="repotDate"
                name="repotDate"
                value={repotDate}
                className="flex-1 min-w-0 p-2 text-sm rounded-md shadow-sm
                border border-gray-200
                focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B]
                   focus:outline-none"
                onChange={(e) => setRepotDate(e.target.value)}
              ></input>
              <Button type="submit" value="Repot"></Button>
            </div>
          </form>

          <section className="flex flex-col gap-4 h-48 overflow-y-auto">
            {plant.repottedAt.map((date) => {
              return (
                <div key={date.getTime()} className="flex items-center gap-3">
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
      {/*render details section */}
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
      <button
        onClick={() => setIsRemoveModalOpen(true)}
        className="flex items-center gap-2 
      font-nunito p-2 rounded-md
      hover:bg-[#F2F7EC] text-red-600 text-sm font-semibold self-end"
      >
        <TrashIcon size={14} />
        Remove plant
      </button>

      <Modal isOpen={isRemoveModalOpen} onClose={() => setIsRemoveModalOpen(false)} variant="add_plant">
        <div className="font-nunito">

        <h3 className="text-lg font-semibold pb-2">Remove {plant.name}?</h3>
        <p className="text-sm pb-4">
          This removes the plant and its watering and repotting history from
          your collection.
        </p>
        <div className="flex justify-end gap-2">
          {/* button for cancel */}
          <button className="text-sm font-semibold border border-gray-200 rounded-md
          p-2 px-4
          hover:bg-[#E9EEDD]"
          onClick={() => setIsRemoveModalOpen(false)}>
            Keep plant
          </button>


          <button className="text-sm font-semibold border border-gray-200 rounded-md
          p-2 bg-red-600 text-white px-4
          hover:bg-red-500"
          onClick={() => onRemovePlant(plant.id)}>Remove plant</button>
        </div>
          </div>
      </Modal>
    </div>
  );
};
