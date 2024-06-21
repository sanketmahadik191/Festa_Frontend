import React from 'react';
import { Link } from 'react-router-dom';

const PartnershipPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp"
          alt="Partnership Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4">
        <div className="text-white p-8 rounded-lg shadow-lg max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-4">
            Partner with Zomato
          </h1>
          <p className="text-xl mb-6">
            Enjoy 0% commission for the 1st month and receive ads worth INR 1500.<br />
            This offer is valid for new restaurant partners in select cities.
          </p>
          <div className="flex justify-center mb-6 space-x-4">
            <Link
              to="/log-in"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
          <p className="text-gray-600">
            Want to partner with us?{' '}
            <Link to="/partner-with-us" className="text-blue-500 hover:underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="bg-white bg-opacity-98 p-6 mt-8 rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Partner with Us?</h2>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li className="mb-2">Reach a wider audience with our extensive network.</li>
            <li className="mb-2">Increase your visibility with targeted ads.</li>
            <li className="mb-2">Boost your sales with our promotional offers.</li>
            <li className="mb-2">Get dedicated support to grow your business.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;
