import { useRef, useState } from "react";
import { FormField } from "./FormField";
import { Button } from "./Button";
import { TabButton } from "./TabButton";
import { SearchBar } from "./SearchBar";

const initialPlant = {
  id: null,
  name: "",
  scientific_name: "",
  description: "",
  location: "",
  image: "",
  wateredAt: [],
  repottedAt: [],
  light: "",
  water: "",
  soil: "",
  care: "",
  propagation: "",
  pets: "",
};

export const AddPlantForm = ({ onClose, onAddPlant }) => {
  const [newPlant, setNewPlant] = useState(initialPlant);
  const [activeTab, setActiveTab] = useState("Search");
  const imageInputRef = useRef(null);
  const [query, setQuery] = useState("");

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // fetch results here
  };

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
    <div className="w-[400px] max-w-full">
      <div className="flex flex-col mb-2 gap-2 mb-4">
        <h2 className="text-2xl font-lora text-[#426040] font-medium">
          Add a plant!
        </h2>
        <p className="font-nunito text-sm text-[#426040]">
          Look it up, or fill in the details yourself.
        </p>
      </div>
      <div className="flex gap-1 justify-between bg-[#E9EEDD] p-1 rounded-md mb-4">
        <TabButton
          label="Search"
          isActive={activeTab === "Search"}
          onClick={() => setActiveTab("Search")}
        ></TabButton>
        <TabButton
          label="Fill in myself"
          isActive={activeTab === "Form"}
          onClick={() => setActiveTab("Form")}
        ></TabButton>
      </div>

      {/* Show Search Bar */}
      {activeTab === "Search" && (
        <div className="my-2">
          <SearchBar
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSearch={handleSearch}
            placeholder="e.g. Monstera, Potos..."
          />
        </div>
      )}

      {/* Show form */}
      {activeTab === "Form" && (
        <div>
          <form
            onSubmit={handleSubmit}
            className="font-nunito bg-[#F3F7ED] 
        flex flex-col gap-4 
       rounded-md"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField htmlFor="plantName" label="NAME *">
                <input
                  id="plantName"
                  type="text"
                  placeholder="Monstera"
                  name="name"
                  value={newPlant.name}
                  onChange={handleChanges}
                  required
                  className="form-control"
                />
              </FormField>
              <FormField htmlFor="location" label="LOCATION">
                <input
                  id="location"
                  type="text"
                  placeholder="Livingroom"
                  name="location"
                  value={newPlant.location}
                  onChange={handleChanges}
                  className="form-control"
                />
              </FormField>
              <FormField htmlFor="scientificName" label="SCIENTIFIC NAME">
                <input
                  id="scientificName"
                  type="text"
                  placeholder="Monstera Deliciosa"
                  name="scientific_name"
                  value={newPlant.scientific_name}
                  onChange={handleChanges}
                  required
                  className="form-control"
                />
              </FormField>
              <FormField
                htmlFor="plantImage"
                label="IMAGE"
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
                  accept="image/*"
                  onChange={handleChanges}
                  className="form-control"
                />
              </FormField>
            </div>
            <FormField htmlFor="description" label="DESCRIPTION">
              <textarea
                id="description"
                placeholder="Describe your plant"
                name="description"
                value={newPlant.description}
                onChange={handleChanges}
                className="form-control"
              />
            </FormField>

            <div className="flex grid grid-cols-3 gap-4">
              <FormField htmlFor="light" label="LIGHT">
                <select
                  id="light"
                  name="light"
                  value={newPlant.light}
                  onChange={handleChanges}
                  className="form-control"
                >
                  <option value="Full sun">Full sun</option>
                  <option value="Part sun">Part sun</option>
                  <option value="Shade">Shade</option>
                </select>
              </FormField>

              <FormField htmlFor="care" label="CARE">
                <select
                  id="care"
                  name="care"
                  value={newPlant.care}
                  onChange={handleChanges}
                  className="form-control"
                >
                  <option value="">Select care level</option>
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Difficult">Difficult</option>
                </select>
              </FormField>
              <FormField htmlFor="water" label="WATER">
                <select
                  id="water"
                  name="water"
                  value={newPlant.water}
                  onChange={handleChanges}
                  className="form-control"
                >
                  <option value="Rare">Rare</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Frequent">Frequent</option>
                </select>
              </FormField>
              <FormField htmlFor="propagation" label="PROPAGATION">
                <select
                  id="propagation"
                  name="propagation"
                  value={newPlant.propagation}
                  onChange={handleChanges}
                  className="form-control"
                >
                  <option value="Cuttings">Cuttings</option>
                  <option value="Water propagation">Water propagation</option>
                  <option value="Division">Division</option>
                  <option value="Seeds">Seeds</option>
                </select>
              </FormField>
              <FormField htmlFor="soil" label="SOIL">
                <select
                  id="soil"
                  name="soil"
                  value={newPlant.soil}
                  onChange={handleChanges}
                  className="form-control"
                >
                  <option value="Well-drained">Well-drained</option>
                  <option value="Moist">Moist</option>
                  <option value="Sandy">Sandy</option>
                </select>
              </FormField>
              <FormField htmlFor="pets" label="PETS">
                <select
                  id="pets"
                  name="pets"
                  value={newPlant.pets}
                  onChange={handleChanges}
                  className="form-control"
                >
                  <option value="Safe">Safe</option>
                  <option value="Toxic">Toxic</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </FormField>
            </div>

            <Button value="Add to my garden" type="submit" />
          </form>
        </div>
      )}
    </div>
  );
};
