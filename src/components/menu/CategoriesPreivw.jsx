import React from 'react';

const CategoriesPreview = ({ categories }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Menu Preview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-4">{category.name || `Category ${index + 1}`}</h3>
            {category.items.length > 0 ? (
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="border-b border-gray-200 pb-2 last:border-b-0">
                    <div className="font-semibold text-lg">{item.name || `Item ${itemIndex + 1}`}</div>
                    <div className="text-gray-600">${item.price}</div>
                    {item.description && <div className="text-gray-500 mt-1">{item.description}</div>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No items in this category</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPreview;
