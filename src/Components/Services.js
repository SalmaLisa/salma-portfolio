import React from "react";
import { FaReact,FaNodeJs, } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';

const Services = () => {
  return (
    <div id="services">
    <h1 className="text-4xl font-bold mt-5 mb-12 text-center">Services</h1>
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-5 lg:mx-24 mb-32">
      
      <div className="card shadow-xl border bg-base-200">
        <div className="flex justify-center mt-5">
        <BsCodeSlash className="text-6xl mb-5 mt-2 text-lime-500"></BsCodeSlash>
        </div>
        <div className=" items-center text-center pb-12">
          <h2 className="text-2xl font-bold">Frontend Development</h2> 
        </div>
      </div>
      <div className="card shadow-xl border bg-base-200">
        <div className="flex justify-center mt-5">
        <FaReact className="text-6xl mb-5 mt-2 text-lime-500"></FaReact>
        </div>
        <div className=" items-center text-center pb-12">
          <h2 className="text-2xl font-bold">React JS Development</h2> 
        </div>
      </div>
      <div className="card shadow-xl border bg-base-200">
        <div className="flex justify-center mt-5">
        <FaNodeJs className="text-6xl mb-5 mt-2 text-lime-500"></FaNodeJs>
        </div>
        <div className=" items-center text-center pb-12">
          <h2 className="text-2xl font-bold">Node.js Development</h2> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
