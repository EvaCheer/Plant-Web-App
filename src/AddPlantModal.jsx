export const AddPlantModal = ({ isAddModalOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center 
        transition-colors transition-opacity duration-300 ${isAddModalOpen ? "visible bg-black/20" : "invisible"}`}
    >
      <form className="lisu-bosa-regular bg-[#FFFCF1] flex flex-col gap-4 rounded-md p-4 px-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="plantName">Name*</label>
          <input
            id="plantName"
            type="text"
            placeholder="Enter plant's name"
            name="name"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Describe your plant"
            name="description"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="location">Location</label>
          <input id="location" type="text" placeholder="Enter location" name="location" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="plantImage">Image</label>
          <input id="plantImage" type="file" name="image" />
        </div>
        <div className="flex flex-row gap-3">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Add Plant</button>
        </div>
      </form>
    </div>
  );
};
