import { useState } from "react";
import { Link } from "react-router-dom";

const PropertyManagement = () => {
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const addProperty = () => {
    setProperties([...properties, { ...form, id: properties.length + 1 }]);
    setForm({ name: "", location: "", price: "" });
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  const editProperty = (id) => {
    const property = properties.find((p) => p.id === id);
    setForm(property);
    deleteProperty(id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Property Management</h2>

      {/* Form to Add or Edit Properties */}
      <div className="mb-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />
        <button
          onClick={addProperty}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {form.id ? "Update Property" : "Add Property"}
        </button>
      </div>

      {/* List of Properties */}
      <ul className="space-y-4">
        {properties.map((property) => (
          <li
            key={property.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
          >
            <span className="font-bold">
              {property.name} - {property.location} - ${property.price}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => editProperty(property.id)}
                className="px-3 py-1 bg-yellow-500 text-white rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProperty(property.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyManagement;
