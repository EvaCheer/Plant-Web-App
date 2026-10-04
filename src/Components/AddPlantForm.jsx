import { useState } from "react";
import { FormField } from "./FormField";

export const AddPlantForm = ({ onClose, onAddPlant }) => {
  const [newPlant, setNewPlant] = useState({
    id: null,
    name: "",
    description: "",
    location: "",
    image: "",
    wateredAt: [],
  });

  //on each field changed, we update newPlant
  const handleChanges = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);

        setNewPlant({
          ...newPlant,
          image: imageUrl,
        });
      }

      return;
    }

    setNewPlant({ ...newPlant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlant(newPlant);
    onClose();
  };

  return (
    <>
      <h3 className="kavoon-regular text-[#426040] text-2xl text-center px-4 pb-4 pt-2">
        Your new plant!
      </h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="lisu-bosa-regular bg-[#FFFFFF] flex flex-col gap-4 rounded-md"
      >
        <FormField htmlFor="plantName" label="Name*">
          <input
            onChange={(e) => handleChanges(e)}
            id="plantName"
            type="text"
            placeholder="Enter plant's name"
            name="name"
            required
          />
        </FormField>
        <FormField htmlFor="description" label="Description">
          <textarea
            onChange={(e) => handleChanges(e)}
            id="description"
            placeholder="Describe your plant"
            name="description"
          />
        </FormField>
        <FormField htmlFor="location" label="Location">
          <input
            onChange={(e) => handleChanges(e)}
            id="location"
            type="text"
            placeholder="Enter location"
            name="location"
          />
        </FormField>
        <FormField htmlFor="plantImage" label="Image">
          <input
            onChange={(e) => handleChanges(e)}
            id="plantImage"
            type="file"
            name="image"
          />
        </FormField>
        <div className="flex flex-row justify-end gap-3 p-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-[#426040] text-[#426040] hover:bg-[#F8F1E9] transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#426040] text-[#FFFCF1] hover:opacity-90 transition"
          >
            Add Plant
          </button>
        </div>
      </form>
    </>
  );
};
