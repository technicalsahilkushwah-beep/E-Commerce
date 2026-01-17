import React, { useRef, useState } from "react";
import Product from "../Cards/Products";
import video from "../assets/Amazon.mp4";

const VideoSlider = () => {
  const [page, setPage] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      
      <section className="w-[1480px] h-[220px] bg-white shadow-2xl shadow-gray-300 shadow flex items-center">

        
        <div
          onClick={toggleVideo}
          className="relative w-[420px] h-[200px] ml-4 overflow-hidden  cursor-pointer"
        > <h1 className="mb-2 font-bold text-2xl flex items-center gap-5">Kitchen Items & Groceries <span className="text-[14px] mt-2 text-blue-400 cursor-pointer hover:text-blue-500">See all offers</span></h1>
          <video
            ref={videoRef}
            src={video}
            playsInline
            className="w-full h-full object-cover"
          />

          
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <i className="fa fa-play text-white text-4xl"></i>
            </div>
          )}
        </div>

        
        <div className="relative w-[1000px] h-[200px] ml-auto overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {/* SLIDE 1 */}
            <div className="flex mt-5 gap-6 px-4 items-center">
              <Product image="https://m.media-amazon.com/images/I/71O4OnjaHVL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
              <Product image="https://m.media-amazon.com/images/I/81kQmcPj-UL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
              <Product image="https://m.media-amazon.com/images/I/81xdDMf5StL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
              <Product image="https://m.media-amazon.com/images/I/510JZdHZZvL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
              <Product image="https://m.media-amazon.com/images/I/7194m9NZhqL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
            </div>

            {/* SLIDE 2 */}
            <div className="flex mt-5 gap-6 px-4 items-center">
              <Product image="https://m.media-amazon.com/images/I/61IPBMBiwPL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
              <Product image="https://m.media-amazon.com/images/I/71Cw9zmOpyL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
              <Product image="https://m.media-amazon.com/images/I/614mm2hYHyL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
              <Product image="https://m.media-amazon.com/images/I/717cWFDUfGL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
              <Product image="https://m.media-amazon.com/images/I/51DJ-9xkuQL._AC_UL480_FMwebp_QL65_.jpg" size="lg"/>
            </div>
          </div>

          {/* LEFT BUTTON */}
          <button
            onClick={() => setPage(0)}
            className="absolute left-2 top-1/2 -translate-y-1/2
            bg-black/40 hover:bg-black/60 text-white shadow w-12 h-12 rounded-full flex items-center justify-center"
          >
            <i className="fa fa-chevron-left"></i>
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => setPage(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2
            bg-black/40 hover:bg-black/60 text-white shadow w-12 h-12 rounded-full flex items-center justify-center"
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default VideoSlider;
