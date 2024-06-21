import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className="w-full  text-left font-bold text-xl bg-gray-100 p-6 rounded-md flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {title}
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-gray-100 p-4 mt-2 rounded-md shadow-inner">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {content.map((item, index) => (
              <p key={index} className="text-gray-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ExploreOptionsNearMe = () => {
  const popularCuisinesContent = [
    "Beverages food near me",
    "Biryani food near me",
    "Burger food near me",
    "Chinese food near me",
    "Coffee food near me",
    "Desserts food near me",
    "Ice Cream food near me",
    "Kebab food near me",
    "Maharashtrian food near me",
    "Momos food near me",
    "Mughlai food near me",
    "North Indian food near me",
    "Pizza food near me",
    "Rolls food near me",
    "Sandwich food near me",
    "Seafood food near me",
    "Shake food near me",
    "Sichuan food near me",
    "South Indian food near me",
    "Street food near me",
  ];
  
  const popularRestaurantTypesContent = [
    "Bakeries near me",
    "Bars near me",
    "Beverage Shops near me",
    "Bhojanalya near me",
    "Cafés near me",
    "Casual Dining near me",
    "Clubs near me",
    "Cocktail Bars near me",
    "Confectioneries near me",
    "Dessert Parlors near me",
    "Dhabas near me",
    "Fine Dining near me",
    "Food Courts near me",
    "Food Trucks near me",
    "Irani Cafes near me",
    "Kiosks near me",
    "Lounges near me",
    "Microbreweries near me",
    "Paan Shop near me",
    "Pubs near me",
    "Quick Bites near me",
    "Sweet Shops near me",
  ];
  
  const topRestaurantChainsContent = [
    "Domino's",
    "Dunkin' Donuts",
    "Faasos",
    "KFC",
    "McDonald's",
    "Paradise Biryani",
    "Subway",
    "WOW! Momo",
  ];
  
  const citiesWeDeliverToContent = [
    "Delhi NCR",
    "Kolkata",
    "Mumbai",
    "Bengaluru",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Lucknow",
    "Kochi",
    "Jaipur",
    "Ahmedabad",
    "Chandigarh",
    "Goa",
    "Indore",
    "Gangtok",
    "Nashik",
    "Ooty",
    "Shimla",
    "Ludhiana",
    "Guwahati",
    "Amritsar",
    "Kanpur",
    "Allahabad",
    "Aurangabad",
    "Bhopal",
    "Ranchi",
    "Visakhapatnam",
    "Bhubaneswar",
    "Coimbatore",
    "Mangalore",
    "Vadodara",
    "Nagpur",
    "Agra",
    "Dehradun",
    "Mysore",
    "Puducherry",
    "Surat",
    "Varanasi",
    "Patna",
    "Udaipur",
    "Srinagar",
    "Khajuraho",
    "Neemrana",
    "Cuttack",
    "Trivandrum",
    "Haridwar",
    "Leh",
    "Pushkar",
    "Rajkot",
    "Madurai",
    "Kozhikode",
    "Alappuzha",
    "Thrissur",
    "Manipal",
    "Vijayawada",
    "Jodhpur",
    "Kota",
    "Ajmer",
    "Mussoorie",
    "Rishikesh",
    "Jalandhar",
    "Jammu",
    "Manali",
    "All delivery cities",
  ];

  return (
    <div className="container mx-auto p-4 lg:px-48">
      <h1 className="text-3xl font-bold mb-4">Explore options near me</h1>
      <Dropdown title="Popular cuisines near me" content={popularCuisinesContent} />
      <Dropdown title="Popular restaurant types near me" content={popularRestaurantTypesContent} />
      <Dropdown title="Top Restaurant Chains" content={topRestaurantChainsContent} />
      <Dropdown title="Cities We Deliver To" content={citiesWeDeliverToContent} />
    </div>
  );
};

export default ExploreOptionsNearMe;
