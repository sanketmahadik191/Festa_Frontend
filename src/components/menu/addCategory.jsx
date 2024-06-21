import React, { useState } from 'react';
import axios from 'axios';

const AddCategoryComponent = ({ menuId }) => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([{ name: '', price: '', description: '' }]);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', price: '', description: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/api/menus/${menuId}/categories`, {
        name,
        items
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Add Category to Menu</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Category Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div>
              <label className="block">Item Name:</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block">Price:</label>
              <input
                type="number"
                value={item.price}
                onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block">Description:</label>
              <input
                type="text"
                value={item.description}
                onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddItem}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Item
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategoryComponent;
