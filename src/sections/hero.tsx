
import CogImageComponent from "@/app/component/CogImageComponent";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="md:pt-5 md:pb-10 grid grid-cols-1 md:grid-cols-2 overflow-x-clip gap-[50px] bg-[radial-gradient(ellipse_100%_80%_at_bottom_left,_rgba(5,87,194,1),_rgba(225,225,225,1))]">
      <div className="container mt-4 py-3 px-[50px] inline-flex flex-col gap-6">
        <div className="">Version 2.0 is here</div>
        <h1 className="w-[90%] sm:w-md text-3xl/15 sm:text-5xl/15 h-[auto]  font-bold tracking-tighter bg-gradient-to-b from-black to-blue-900 text-transparent bg-clip-text mt-1 align-[10px]">
          pathway to productivity
        </h1>
        <p className="w-[90%] sm:w-sm md:w-md text-zinc-900 tracking-tight  text-[15px] sm:text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          perferendis. Perferendis, voluptates voluptate? Ducimus optio
          reprehenderit provident quas quis non.
        </p>
        <div className="inline-flex gap-3">
          <button className="btn btn-primary ">Get for free</button>

          <button className="btn gap-2 font-bold hover:scale-[105%] duration-[0.5s] hover:gap-4 text-[15px] text-black/90 cursor-pointer">
            <span>learn more</span>
            <FaArrowRight className=" text-[11px] text-black/60" />
          </button>
        </div>
      </div>
     <CogImageComponent/>
    </section>
  );
};

export default Hero;
