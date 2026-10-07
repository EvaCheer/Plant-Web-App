import { useRef, useState } from "react";
import { FormField } from "./FormField";

const initialPlant = {
  id: null,
  name: "",
  description: "",
  location: "",
  image: "",
  wateredAt: [],
  light: "",
  water: "",
  soil: "",
  care: "",
  propagation: "",
  pets: "",
};

export const AddPlantForm = ({ onClose, onAddPlant }) => {
  const [newPlant, setNewPlant] = useState(initialPlant);
  const imageInputRef = useRef(null);

  const resetForm = () => {
    setNewPlant(initialPlant);
    imageInputRef.current.value = "";
    onClose();
  };

  //on each field changed, we update newPlant
  const handleChanges = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];

      if (file) {
        const imageUrl = URL.createObjectURL(file);

        setNewPlant((currentPlant) => ({
          ...currentPlant,
          image: imageUrl,
        }));
      }

      return;
    }

    setNewPlant((currentPlant) => ({
      ...currentPlant,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //temporary solution
    //later, the database will generate and manage ids
    const plantToAdd = {
      ...newPlant,
      id: crypto.randomUUID(),
    };
    onAddPlant(plantToAdd);
    resetForm();
  };

  const removeImage = () => {
    setNewPlant((currentPlant) => ({
      ...currentPlant,
      image: "",
    }));

    imageInputRef.current.value = "";
  };

  return (
    <>
      <h3 className="font-lora text-[#426040] text-2xl text-center px-4 pb-4 pt-2">
        Your new plant!
      </h3>
      <form
        onSubmit={handleSubmit}
        className="font-lora bg-[#FFFFFF] flex flex-col gap-4 rounded-md"
      >
        <FormField htmlFor="plantName" label="Name*">
          <input
            id="plantName"
            type="text"
            placeholder="Enter plant's name"
            name="name"
            value={newPlant.name}
            onChange={handleChanges}
            required
          />
        </FormField>
        <FormField htmlFor="description" label="Description">
          <textarea
            id="description"
            placeholder="Describe your plant"
            name="description"
            value={newPlant.description}
            onChange={handleChanges}
          />
        </FormField>
        <FormField htmlFor="location" label="Location">
          <input
            id="location"
            type="text"
            placeholder="Enter location"
            name="location"
            value={newPlant.location}
            onChange={handleChanges}
          />
        </FormField>
        <FormField
          htmlFor="plantImage"
          label="Image"
          action={
            newPlant.image && (
              <button
                type="button"
                onClick={removeImage}
                className="text-[#426040] hover:text-red-700 text-lg"
              >
                x
              </button>
            )
          }
        >
          <input
            ref={imageInputRef}
            id="plantImage"
            type="file"
            name="image"
            onChange={handleChanges}
          />
        </FormField>
        <div className="flex flex-row justify-end gap-3 p-2">
          <button
            type="button"
            onClick={resetForm}
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
