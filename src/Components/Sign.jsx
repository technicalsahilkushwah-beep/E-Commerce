import React from "react";

const Sign = () => {
  return (
    <section className="w-full flex justify-center items-center py-5  bg-white">
      <div className="flex mt-5 flex-col items-center gap-2 rounded-lg border w-full h-full border-gray-300">
        
        {/* Title */}
        <h2 className=" mt-7 text-2xl font-medium tracking-tight">
          See personalized recommendations
        </h2>

        {/* Sign in button */}
        <a href="/Signup" className="px-32 py-1 bg-[#ffce12] rounded-full font-medium shadow hover:shadow-md hover:bg-yellow-400 transition-all duration-200 cursor-pointer">Sign in</a>

        {/* Small text */}
        <p className=" mb-5 text-sm text-black tracking-wide">
          New customer?
          <span className="text-blue-800 hover:text-blue-950 underline cursor-pointer">
            Start here.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Sign
