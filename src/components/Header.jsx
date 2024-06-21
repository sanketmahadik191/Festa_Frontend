import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const { isLoggedIn ,user} =useSelector((state)=>state.auth);
  const dispatch = useDispatch();

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to='/' className="logo">
        <h1 className="text-2xl font-bold text-gray-800">Festa</h1>
      </Link>
      <div className="search-bar flex-grow mx-4 max-w-md">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="auth-buttons flex items-center space-x-4">
        {isLoggedIn ? (
          <div className="profile flex items-center space-x-2">
            <span className="hidden md:inline text-gray-800">{user.username}</span>
            <Link to='/profile'>
            <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Profile</button>
            </Link>
          </div>
        ) : (
          <>
            <Link to='/log-in' className="p-2 bg-green-500 text-white rounded hover:bg-green-600">Login</Link>
            <Link to='/sign-up' className="p-2 bg-red-500 text-white rounded hover:bg-red-600">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
