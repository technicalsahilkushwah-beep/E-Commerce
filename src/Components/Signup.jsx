import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Loginanimation from '../assets/register.json'

const Signup = () => {
  return (
    <section className="w-full min-h-screen flex justify-center-safe items-center bg-gray-50 py-10">
        
        {/* Animation  */}
      <div className="mr-24">
        <Player
          autoplay
          loop
          src={Loginanimation}
          style={{height:"500px",width:"400px"}}

        />
      </div>
      
      <div className="w-[380px] bg-white shadow-lg rounded-lg border border-gray-200 px-6 py-8 flex flex-col gap-5">

        {/* Title */}
        <h1 className="text-2xl font-semibold tracking-tight">
          Create Account
        </h1>

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm">Full Name</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm" placeholder="Enter your name" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm">Email</label>
          <input type="email" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm" placeholder="Enter your email" />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm">Password</label>
          <input type="password" className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm" placeholder="Enter your password" />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-yellow-400 py-2 rounded-md font-medium hover:bg-yellow-500 transition-all duration-200 shadow" >
          Continue
        </button>

        <p className="text-xs text-gray-600 leading-relaxed">
          Already have an account?
          <span className="text-blue-600 cursor-pointer hover:underline ml-1">Sign in</span>
        </p>
      </div>
    </section>
  );
};

export default Signup;
