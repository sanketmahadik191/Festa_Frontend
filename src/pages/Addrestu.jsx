import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom'
import PartnershipPage from '../components/PartnershipPage.jsx';

const suggestedTags = ['Biryani', 'Dine In', 'Dinner', 'Family', 'Veg'];

function Addrestu() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const navigate = useNavigate();

  const {isLoggedIn ,user} = useSelector((state)=>state.auth);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (images.length + selectedFiles.length > 8) {
      alert('You can upload a maximum of 8 images.');
      e.target.value = null; // Clear the selected files
      return;
    }
    setImages([...images, ...selectedFiles]);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert('You must be logged in to add a restaurant.');
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    images.forEach(image => formData.append('images', image));
    formData.append('tags', JSON.stringify(tags));
    formData.append('owner', user._id);

    try {
      const token = localStorage.getItem('token');
      console.log(token);
      const response = await axios.post('/api/rest/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` // Include the token in the Authorization header
        },
      });

      console.log(response);

      alert('Restaurant added successfully!');

      setName('');
      setLocation('');
      setImages([]);
      setTags([]);
      navigate('/profile'); 
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Error adding restaurant');
    }
  };

  return (
    <>
      {isLoggedIn ?  
      <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url('https://b.zmtcdn.com/web/merchant/advertize/4e6b6fbc4b9108d969d98182fcb016681564548593.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <div className="max-w-lg mx-auto p-6 bg-white bg-opacity-95 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Restaurant</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Restaurant Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Location (e.g., Pune)"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Images
            </label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="mt-4 grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="w-24 h-24 relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    className="object-cover w-full h-full rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tags
            </label>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={tagInput}
                onChange={handleTagInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mr-2"
                placeholder="Add a tag"
              />
              <button
                type="button"
                onClick={() => handleAddTag(tagInput)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mb-4">
              {suggestedTags.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleAddTag(tag)}
                  className="mr-2 mb-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-red-500"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
        :
        <PartnershipPage />
   }
   </>
  )
}

export default Addrestu;
