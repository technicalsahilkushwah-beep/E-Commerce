import React, { useState } from "react";
import Product from "../Cards/Products";

const ProductSlider = () => {
  
  const [page, setPage] = useState(0);

  return (
    //   first 
    <section className="w-[1480px] h-[220px] bg-white shadow-2xl shadow-gray-300 shadow flex items-center justify-center">
        
         
         {/* secound */}
      <div className="relative w-[1420px] h-[200px]  overflow-hidden ">
        
        <div className="mb-2 text-2xl font-bold">
            <h1 className=" flex gap-5 items-center text-gray-800">Related To Item,Yo'u Viewd <span className="text-[14px] text-blue-400 cursor-pointer hover:text-blue-500">See all offers</span></h1>
        </div>
        
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >

          
          <div className=" flex mt-5 gap-6 px-4 items-center">
            <Product image="https://m.media-amazon.com/images/I/718F+0RgtfL._AC_SY200_.jpg" />
            <Product image="https://m.media-amazon.com/images/I/61a+QFC9loL._AC_SY200_.jpg" />
            <Product image="https://m.media-amazon.com/images/I/710puD2RVSL._AC_SY200_.jpg" />
            <Product image="https://m.media-amazon.com/images/I/71gTyx3n3fL._AC_SY200_.jpg" />
            <Product image="https://m.media-amazon.com/images/I/41fGuOTIK+L._AC_SY200_.jpg" />
          </div>

          
          <div className=" flex mt-5 gap-6 px-4 items-center">
            <Product image="https://m.media-amazon.com/images/I/71UAtWVkQsL._AC_SY200_.jpg" />
            <Product image="https://m.media-amazon.com/images/I/71tM4MRDlBL._AC_SY200_.jpg" />
            <Product image="https://m.media-amazon.com/images/I/61npN3kxuIL._AC_SY200_.jpg" />
            <Product image="https://m.media-amazon.com/images/I/61zKk+tH-uL._AC_SY200_.jpg" />
            <Product image="https://m.media-amazon.com/images/I/61m7M6nNx5L._AC_SY200_.jpg" />
          </div>

        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={() => setPage(0)}
          className="absolute left-2 top-1/2 -translate-y-1/2
          bg-black/35 hover:bg-black/45 text-white cursor-pointer font-bold shadow w-12 h-12 rounded-full flex items-center justify-center"
        >
          <i className="fa fa-chevron-left"></i>
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => setPage(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2
          bg-black/35 text-white font-bold hover:bg-black/45 cursor-pointer shadow w-12 h-12 rounded-full flex items-center justify-center"
        >
          <i className="fa fa-chevron-right"></i>
        </button>

      </div>
    </section>
  );
};

export default ProductSlider;
