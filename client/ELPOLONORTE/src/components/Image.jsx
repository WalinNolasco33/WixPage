import { useState } from "react";

export function Image({ image, product, price }) {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseOver = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  return (
    <div className="flex flex-col items-center space-y-2  box-border" >
      <img src={image} alt="" className="" />
      <figcaption
        className="relative min-w-fit w-32 h-full text-white -translate-x-90 text-center translate-y-4 box-border"
      >
        {isHovered ? (
          <h3 className="text-2xl hover:bg-gray-50/30 w-full py-14 px-14 transition-all ease-linear duration-500" 
          onMouseOver={handleMouseOver}>
            {product}
          </h3>
        ) : (
          <h3 className="text-2xl hover:bg-gray-50/30 w-full py-14 px-14 transition-all ease-linear duration-500" onMouseOut={handleMouseOut}>
            Ver producto
          </h3>
        )}
        
        <p className="text-sm mb-8">{isHovered ?  <><s>{price.substring(0,7)}</s> {price.substring(8,price.length)}</>:null}</p>
      </figcaption>
    </div>
  );
}
