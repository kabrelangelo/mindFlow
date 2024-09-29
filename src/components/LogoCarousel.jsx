import React from 'react';
import Marquee from 'react-fast-marquee';

const LogoCarousel = () => {
  const elements = [
    { id: 1, image: "./assets/companies/img-color-1.svg" },
    { id: 2, image: "./assets/companies/img-color-2.svg" },
    { id: 3, image: "./assets/companies/img-color-3.svg" },
    { id: 4, image: "./assets/companies/img-color-4.svg" },
    { id: 5, image: "./assets/companies/img-color-5.svg" }
  ];

  return (
    <div className="overflow-hidden">
    <Marquee
      gradient={false}
      pauseOnHover={true}
      speed={50}
    >
      <div className="flex">
        {elements.map((element) => (
          <img 
            key={element.id}
            src={element.image} 
            alt={`Logo ${element.id}`} 
            className="w-24 md:w-32 lg:w-48 h-16 object-contain mx-10"
          />
        ))}
      </div>
    </Marquee>
  </div>
  
  
  );
};

export default LogoCarousel;
