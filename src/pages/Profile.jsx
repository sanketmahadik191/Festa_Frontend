import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddMenu from '../components/menu/menu.jsx';


function Profile() {
   const { isLoggedIn, user } = useSelector((state) => state.auth);
   const [activeTab, setActiveTab] = useState('orderHistory');

   if (!isLoggedIn || !user) {
      return <p className="text-center text-xl text-red-600 mt-10">Please log in to view your profile.</p>;
   }

   return (
      <>
         <div className="profile-container max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <div className="profile-header text-center mb-6">
               <img 
                  src={user.avatar || '/default-avatar.png'} 
                  alt="Profile Avatar" 
                  className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-gray-300"
               />
               <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
               <p className="text-xl text-gray-600">@{user.username}</p>
               <p className="text-md text-gray-500">{user.email}</p>
               <p className="text-md text-gray-500">{user.phone}</p>
            </div>
            <div className="tabs mt-6 flex justify-center border-b border-gray-200">
               <button 
                  className={`tab px-4 py-2 mx-2 focus:outline-none ${activeTab === 'orderHistory' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`} 
                  onClick={() => setActiveTab('orderHistory')}
               >
                  Order History
               </button>
               <button 
                  className={`tab px-4 py-2 mx-2 focus:outline-none ${activeTab === 'restaurantInfo' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`} 
                  onClick={() => setActiveTab('restaurantInfo')}
               >
                  Your Restaurant Info
               </button>
            </div>
            <div className="tab-content mt-6">
               {activeTab === 'orderHistory' && (
                  <div className="order-history">
                     <h2 className="text-2xl font-bold mb-4 text-gray-900">Order History</h2>
                     <p className="text-md text-gray-700">Your past orders will be displayed here.</p>
                  </div>
               )}
               {activeTab === 'restaurantInfo' && (
                  <div className="restaurant-info">
                     <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Restaurant Info</h2>
                     <p className="text-md text-gray-700">Restaurant information will be displayed here.</p>
                     <AddMenu />
                  </div>
               )}
            </div>
         </div>
         =
      </>
   );
}

export default Profile;
