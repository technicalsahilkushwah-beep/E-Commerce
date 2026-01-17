import React, { useState } from "react";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const ImageSlider = () => {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevImage = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* IMAGE */}
      <img
        src={images[index]}
        alt="slider"
        className="w-full mt-[65px] h-full object-cover "
      />

      <div className="pointer-events-none absolute bottom-0  left-0 w-full h-52 bg-gradient-to-b from-transparent from-[#e3e6e6] to-[#e3e6e6] via-[#e3e6e6]"></div>

      {/* LEFT ARROW */}
      <button
        onClick={prevImage}
        className="
          absolute left-6 top-1/3 -translate-y-1/2
          bg-black/40 hover:bg-black/60
          text-white w-12 h-12 rounded-full
          flex items-center justify-center
        "
      >
        <i className="fa fa-chevron-left"></i>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextImage}
        className="
          absolute right-6 top-1/3 -translate-y-1/2
          bg-black/40 hover:bg-black/60
          text-white w-12 h-12 rounded-full
          flex items-center justify-center
        "
      >
        <i className="fa fa-chevron-right"></i>
      </button>

    </div>
  );
};

export default ImageSlider;
