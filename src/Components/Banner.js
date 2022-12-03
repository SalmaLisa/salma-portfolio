import React from "react";
import laptopBg from "../assets/laptop-bg.png";
import { HiDownload } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <img src={laptopBg} className=" rounded-lg shadow-2xl" alt="laptop" />
        </div>
        <div className="lg:w-1/2 lg:ml-16 lg:mr-5">
          <p className="font-semibold">This is Me ,</p>
          <h1 className="text-5xl font-bold text-lime-500">Salma Akter</h1>
          <p className="py-6">
            <span className="text-xl font-bold">Welcome to my world !</span>{" "}
            <br />I am a Web Developer, and I'm very passionate and dedicated to
            my work. I am committed to develop you desired website. Your
            satisfaction is my priority.
          </p>
          <p className="py-4"></p>
          <a href="#contact" className="px-5 py-3 rounded-lg font-bold uppercase text-white bg-gradient-to-tr from-lime-400 to-lime-700">hire me</a>
          <a
            href="https://drive.google.com/file/d/1M6E6nyHdBBrGzM-eipA8d5M9f3FE3lCj/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="btn ml-3"
          >
            Download Resume <HiDownload className="text-xl ml-2"></HiDownload>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
