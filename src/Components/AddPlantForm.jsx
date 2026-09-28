import { FormField } from "./FormField";

export const AddPlantForm = ({ onClose }) => {
  return (
    <>
      <h3 className="kavoon-regular text-[#426040] text-2xl text-center px-4 pb-4 pt-2">Your new plant!</h3>
      <form className="lisu-bosa-regular bg-[#FFFCF1] flex flex-col gap-4 rounded-md">
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
