import React from "react";

const Product = ({ image, size }) => {
  return (
    <div className={`w-[250px] h-[140px] cursor-pointer flex flex-col items-center justify-center
    ${size === "sm" && "w-[180px] h-[120px]"}
    ${size === "md" && "w-[220px] h-[160px]"}
    ${size === "lg" && "w-[260px] h-[220px]"}
    `}>

      <img
        src={image}
        alt="product"
        className="h-full object-contain hover:scale-110 duration-300 cursor-pointer"
      />
    </div>
  );
};

export default Product;
