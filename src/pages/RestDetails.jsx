import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookTable from '../components/BookTable';

function RestDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`/api/rest/getRest/${id}`);
        setRestaurant(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant:", error);
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  return (
    <div className="restaurant-details">
      <div className="image-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {restaurant.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${restaurant.name} ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
        <p className="text-lg mb-4">{restaurant.location}</p>
        <div className="restaurant-tags flex flex-wrap gap-2 mb-4">
          {restaurant.tags.map((tag, index) => (
            <span key={index} className="tag bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">{tag}</span>
          ))}
        </div>

        <div className="tabs mb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 mr-2 ${activeTab === 'overview' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`px-4 py-2 mr-2 ${activeTab === 'menu' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveTab('book')}
            className={`px-4 py-2 ${activeTab === 'book' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Book Table
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="overview">
            <p>{restaurant.description}</p>
          </div>
        )}

        {activeTab === 'menu' && (
          <div className="menu">
            {/* Add menu details here */}
            <p>Menu details coming soon...</p>
          </div>
        )}

        {activeTab === 'book' && (
          <div className="book-table">
            <BookTable />
          </div>
        )}
      </div>
    </div>
  );
}

export default RestDetails;
