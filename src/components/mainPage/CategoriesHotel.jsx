import React from "react";
import Card from "./Card";

const CategoriesHotel = () => {
  const data = [
    {
      imgSrc: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
      description: "Stay home and order youe favouite food",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Dining",
      description: "View the city's favourite restuarants",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Hotel Category 3",
      description: "Explore the city's top night life",
    },
  ];

  return (
    <div className="container mx-auto p-4 lg:px-48">
      <div className="flex flex-wrap justify-between">
        {data.map((item, index) => (
          <Card
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesHotel;

