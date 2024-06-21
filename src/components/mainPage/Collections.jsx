import React from "react";
import Card2 from "./Card2";

const Collections = () => {
  const data = [
    {
      imgSrc: "https://b.zmtcdn.com/web/merchant/advertize/4e6b6fbc4b9108d969d98182fcb016681564548593.jpeg",
      title: "Collection 1",
      description: "This is a short description for collection 1. Additional text will be hidden.",
    },
    {
      imgSrc: "https://media.istockphoto.com/id/1457259411/photo/table-full-of-various-fresh-food-in-luxury-modern-restaurant.webp?b=1&s=170667a&w=0&k=20&c=Xf0EEm4KhCMdZWZlgkoXA7RBAVL1Mct8GfQJNI_EI0A=",
      title: "Collection 2",
      description: "This is a short description for collection 2. Additional text will be hidden.",
    },
    {
      imgSrc: "https://media.istockphoto.com/id/625232510/photo/breakfast-served-with-coffee-juice-egg-and-rolls.webp?b=1&s=170667a&w=0&k=20&c=bs3NMy4DBtSAuAOcIbyAmOb7tC-cBwQ91rUZFDbSiQ4=",
      title: "Collection 3",
      description: "This is a short description for collection 3. Additional text will be hidden.",
    },
    {
      imgSrc: "https://s3-media0.fl.yelpcdn.com/bphoto/YuhKAX4Nd_8fY_r3PEahLA/300s.jpg",
      title: "Collection 4",
      description: "This is a short description for collection 4. Additional text will be hidden.",
    },
  ];

  return (
    <div className="container mx-auto p-4 lg:px-48">
      <h1 className="text-3xl font-bold mb-4">Collections</h1>
      <p className="text-lg mb-6">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
      </p>
      <div className="flex flex-wrap justify-between">
        {data.map((item, index) => (
          <Card2
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            heightClass="h-64"
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
