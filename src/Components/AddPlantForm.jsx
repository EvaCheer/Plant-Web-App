import { FormField } from "./FormField";

export const AddPlantForm = ({ onClose }) => {
  return (
    <form className="lisu-bosa-regular bg-[#FFFCF1] flex flex-col gap-4 rounded-lg p-6">
      <FormField htmlFor="plantName" label="Name*">
        <input
          id="plantName"
          type="text"
          placeholder="Enter plant's name"
          name="name"
          required
        />
      </FormField>
      <FormField htmlFor="description" label="Description">
        <textarea
          id="description"
          placeholder="Describe your plant"
          name="description"
        />
      </FormField>
      <FormField htmlFor="location" label="Location">
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          name="location"
        />
      </FormField>
      <FormField htmlFor="plantImage" label="Image">
        <input id="plantImage" type="file" name="image" />
      </FormField>
      <div className="flex flex-row gap-3">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Add Plant</button>
      </div>
    </form>
  );
};
