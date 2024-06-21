import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Rest() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/rest/getRest',{
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the Authorization header
          }
        });
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4">Restaurant List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="restaurant-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.length > 0 && (
            <>
              {restaurants.map((restaurant) => (
                <Link key={restaurant._id} to={`details/${restaurant._id}`} className="restaurant-card overflow-hidden rounded-lg shadow-md">
                  <img
                    src={restaurant.images[0]}
                    alt={`${restaurant.name} Image`}
                    className="w-full h-64 object-fit"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
                    <p className="text-lg mb-2">{restaurant.location}</p>
                    <div className="restaurant-tags flex flex-wrap gap-2">
                      {restaurant.tags.map((tag, index) => (
                        <span key={index} className="tag bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Rest;
