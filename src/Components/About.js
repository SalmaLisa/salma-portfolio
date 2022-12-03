import React from 'react';
import Lottie from "lottie-react";
import animation from '../assets/aboutMeAnimation.json'

const About = () => {
  return (
    <div id='aboutMe' className=' pt-12 pb-24'>
      
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
        <div className="card md:w-1/2 bg-base-100 md:mr-16">
    <Lottie animationData={animation} />
    </div>
    <div className="text-center lg:text-left md:w-1/2 mx-3 border-lime-500 border-l-8 px-5 lg:pl-20">
    <h1 className="text-4xl font-bold mt-5 text-lime-500">About Me</h1>
       <h1 className="text-2xl font-semibold my-4 ">Why You Hire Me?</h1>
            <p className="py-6">Over the couple of months, I created 15+ of websites. I am very sincere and responsible about my work and deadline. I am committed to serve you quality work and constant service till your satisfaction.</p>
          </div>
         
    
  </div>
</div>
    </div>
  );
};

export default About;
