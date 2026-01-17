import React from 'react'

const Card = ({ title, images, texts }) => {
  return (
    <div className="w-[350px] bg-white shadow-2xl shadow-gray-300 p-4">

      {/* Title */}
      <h1 className="font-bold text-xl mb-4">
        {title}
      </h1>

      <div className="grid grid-cols-2 gap-4">

        <div className="flex flex-col gap-1">
          <img src={images[0]} className="w-full object-cover hover:scale-95 duration-300 cursor-pointer" />
          <p className="text-xs font-medium">{texts[0]}</p>
        </div>

        <div className="flex flex-col gap-1">
          <img src={images[1]} className="w-full object-cover hover:scale-95 duration-300 cursor-pointer" />
          <p className="text-xs font-medium">{texts[1]}</p>
        </div>

        <div className="flex flex-col gap-1">
          <img src={images[2]} className="w-full object-cover hover:scale-95 duration-300 cursor-pointer" />
          <p className="text-xs font-medium">{texts[2]}</p>
        </div>

        <div className="flex flex-col gap-1">
          <img src={images[3]} className="w-full object-cover hover:scale-95 duration-300 cursor-pointer" />
          <p className="text-xs font-medium">{texts[3]}</p>
        </div>

      </div>
    </div>
  )
}

export default Card
