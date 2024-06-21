import React, { useState } from 'react';
import axios from 'axios';
import CategoriesPreview from './CategoriesPreivw.jsx';  // Adjust the import path accordingly

const AddMenu = () => {
  const [hotel, setHotel] = useState('');
  const [categories, setCategories] = useState([{ name: '', items: [{ name: '', price: '', description: '' }] }]);

  const [message, setMessage] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState({});

  const handleInputChange = (index, event) => {
    const values = [...categories];
    if (event.target.name === 'categoryName') {
      values[index].name = event.target.value;
    } else {
      const itemIndex = event.target.getAttribute('data-item-index');
      values[index].items[itemIndex][event.target.name] = event.target.value;
    }
    setCategories(values);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { name: '', items: [{ name: '', price: '', description: '' }] }]);
    setActiveCategoryIndex(categories.length);  // Open the new category
  };

  const handleAddItem = (index) => {
    const values = [...categories];
    values[index].items.push({ name: '', price: '', description: '' });
    setCategories(values);
    setActiveItemIndex({ ...activeItemIndex, [index]: values[index].items.length - 1 });  // Open the new item
  };

  const handleRemoveCategory = (index) => {
    const values = [...categories];
    values.splice(index, 1);
    setCategories(values);
    setActiveCategoryIndex(null);
  };

  const handleRemoveItem = (index, itemIndex) => {
    const values = [...categories];
    values[index].items.splice(itemIndex, 1);
    setCategories(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/rest/menus', { categories },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Menu created successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating menu:', error);
      setMessage('Error creating menu');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Add Menu</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-6">
          <label htmlFor="hotel" className="block text-gray-700 font-bold mb-2">Hotel ID</label>
          <input 
            type="text" 
            id="hotel" 
            name="hotel" 
            value={hotel} 
            onChange={(e) => setHotel(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required 
          />
        </div>
        {categories.map((category, index) => (
          <div key={index} className="mb-6 border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{category.name || `Category ${index + 1}`}</h2>
              <div>
                <button 
                  type="button" 
                  onClick={() => setActiveCategoryIndex(activeCategoryIndex === index ? null : index)} 
                  className="text-blue-600 mr-4"
                >
                  {activeCategoryIndex === index ? 'Hide' : 'Show'}
                </button>
                <button 
                  type="button" 
                  onClick={() => handleRemoveCategory(index)} 
                  className="text-red-600"
                >
                  Remove Category
                </button>
              </div>
            </div>
            {activeCategoryIndex === index && (
              <>
                <label htmlFor={`category-${index}`} className="block text-gray-700 font-bold mb-2">Category Name</label>
                <input 
                  type="text" 
                  id={`category-${index}`} 
                  name="categoryName" 
                  value={category.name} 
                  onChange={(e) => handleInputChange(index, e)} 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required 
                />
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">{item.name || `Item ${itemIndex + 1}`}</h3>
                      <div>
                        <button 
                          type="button" 
                          onClick={() => setActiveItemIndex({ ...activeItemIndex, [index]: activeItemIndex[index] === itemIndex ? null : itemIndex })} 
                          className="text-blue-600 mr-4"
                        >
                          {activeItemIndex[index] === itemIndex ? 'Hide' : 'Show'}
                        </button>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveItem(index, itemIndex)} 
                          className="text-red-600"
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>
                    {activeItemIndex[index] === itemIndex && (
                      <div className="bg-white p-4 rounded-lg shadow-inner">
                        <label htmlFor={`item-name-${index}-${itemIndex}`} className="block text-gray-700 mb-1 mt-2">Item Name</label>
                        <input 
                          type="text" 
                          id={`item-name-${index}-${itemIndex}`} 
                          name="name" 
                          data-item-index={itemIndex} 
                          value={item.name} 
                          onChange={(e) => handleInputChange(index, e)} 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          required 
                        />
                        <label htmlFor={`item-price-${index}-${itemIndex}`} className="block text-gray-700 mb-1 mt-2">Item Price</label>
                        <input 
                          type="number" 
                          id={`item-price-${index}-${itemIndex}`} 
                          name="price" 
                          data-item-index={itemIndex} 
                          value={item.price} 
                          onChange={(e) => handleInputChange(index, e)} 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          required 
                        />
                        <label htmlFor={`item-description-${index}-${itemIndex}`} className="block text-gray-700 mb-1 mt-2">Item Description</label>
                        <textarea
                          id={`item-description-${index}-${itemIndex}`} 
                          name="description" 
                          data-item-index={itemIndex} 
                          value={item.description} 
                          onChange={(e) => handleInputChange(index, e)} 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          rows="3"
                        />
                      </div>
                    )}
                  </div>
                ))}
                <button 
                  type="button" 
                  onClick={() => handleAddItem(index)} 
                  className="text-blue-600 mt-4"
                >
                  Add Item
                </button>
              </>
            )}
          </div>
        ))}
        <button 
          type="button" 
          onClick={handleAddCategory} 
          className="text-blue-600 mt-6"
        >
          Add Category
        </button>
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      <CategoriesPreview categories={categories} />
    </div>
  );
};

export default AddMenu;
