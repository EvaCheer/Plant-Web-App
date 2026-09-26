export const AddPlantModal = () => {
    
  return (
    <div >
      <form className="lisu-bosa-regular"> 
        <label htmlFor="plantName">Name</label>
        <input />

        <label htmlFor="description">Description</label>
        <textarea />

        <label htmlFor="location">Location</label>
        <input />

        <label htmlFor="image">Image</label>
        <input type="file" />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};
