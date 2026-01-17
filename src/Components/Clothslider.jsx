import React, { useState } from "react";
import Product from '../Cards/Products'
const Clothslider = () => {

    const [page, setPage] = useState(0);
    return (
        //   first 
        <section className="w-[1480px] h-[220px] bg-white shadow-lg flex items-center justify-center">


            {/* secound */}
            <div className="relative w-[1420px] h-[200px]  overflow-hidden ">

                <div className="mb-2 text-2xl font-bold">
                    <h1 className=" flex gap-5 items-center text-gray-900">Best Sellers in Clothing & Accessories <span className="text-[14px] text-blue-400 cursor-pointer hover:text-blue-500">See all offers</span></h1>
                </div>

                <div
                    className="flex transition-transform duration-300 "
                    style={{ transform: `translateX(-${page * 100}%)` }}
                >


                    <div className=" flex  mt-5 gap-6 px-4 items-center">
                        <Product image="https://m.media-amazon.com/images/I/81biKixsaDL._AC_SY200_.jpg" size="lg"/>
                        <Product image="https://m.media-amazon.com/images/I/71DCFWHFolL._AC_SY200_.jpg" size="lg"/>
                        <Product image="https://m.media-amazon.com/images/I/71OAvZWN00L._AC_SY200_.jpg" size="lg"/>
                        <Product image="https://m.media-amazon.com/images/I/619xMvtqClL._AC_SY200_.jpg" size="lg"/>
                        <Product image="https://m.media-amazon.com/images/I/71jA7cZEY-L._AC_SY200_.jpg" size="lg"/>
                    </div>


                    <div className=" flex mt-5 gap-6 px-4 items-center">
                        <Product image="https://m.media-amazon.com/images/I/71GaH2nLQ6L._AC_SY200_.jpg" size="lg" />
                        <Product image="https://m.media-amazon.com/images/I/713n+TxyfCL._AC_SY200_.jpg" size="lg"/>
                        <Product image="https://m.media-amazon.com/images/I/71ZxN4i3-oL._AC_SY200_.jpg" size="lg"/>
                        <Product image="https://m.media-amazon.com/images/I/61hz9cK6gnL._AC_SY200_.jpg" size="lg"/>
                        <Product image="https://m.media-amazon.com/images/I/6111Df0PqGL._AC_SY200_.jpg" size="lg"/>
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
    )
}

export default Clothslider