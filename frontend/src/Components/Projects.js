import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Autoplay, Pagination } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('https://salma-portfolio-server.vercel.app/projects')
      .then(res => res.json()
      .then(data=>setProjects(data)))
  },[])
  // console.log(projects);
  return (
    <div className=" lg:mx-20 ">
    <div id="projects" className="py-12">
      <h1 className="text-4xl font-bold md:mt-5 md:mb-12 text-center">Projects</h1>
        <div className=" hidden md:block">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div>
          {projects?.map(project=> <SwiperSlide key={project.id}>
          <div className="card glass ">
            
              <div className="bg-base-300">
              <img src={project.img} alt="project" />
              </div>
            
            <div className="px-5 py-5 h-48 bg-base-300 relative">
                <h2 className="card-title">{project.title}</h2>
                <p className="italic">{project.subTitle}</p>
                <small className="font-semibold"><span className="font-bold">Used Technology : </span>{project.tech}</small>
              <div className="card-actions justify-start mt-3 absolute bottom-4">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="lg:px-5 px-3 py-1 lg:py-2 rounded-lg font-bold  text-white bg-gradient-to-tr from-lime-400 to-lime-700">live Site</a>
                  <a href={project.gitLink} target="_blank" rel="noreferrer" className="lg:px-5 px-3 py-1 lg:py-2 bg-gray-700 text-white rounded-lg ">GitHub</a>
                  <Link to={`/projectDetails/${project.id}`} className="lg:px-5 px-3 py-1 lg:py-2 rounded-lg font-bold  text-white bg-gradient-to-tr from-lime-400 to-lime-700">Explore More</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>)}
       </div>
      </Swiper>
    </div>
    </div>
     <div className="block md:hidden mx-5">
     <Swiper
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Autoplay, Pagination]}
       className="mySwiper"
     >
       <div>
          {projects?.map((project)=> <SwiperSlide  key={project.id}>
          <div className="card glass ">
            
              <div className="bg-base-300">
              <img src={project.img} alt="project" />
              </div>
            
            <div className="card-body bg-base-300">
                <h2 className="card-title">{project.title}</h2>
                <p className="italic">{project.subTitle}</p>
                <small className="font-semibold"><span className="font-bold">Used Technology : </span>{project.tech}</small>
              <div className="card-actions justify-start mt-3">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-lg font-bold  text-white bg-gradient-to-tr from-lime-400 to-lime-700">live Site</a>
                <a href={project.gitLink} target="_blank" rel="noreferrer" className="px-5 py-2 bg-gray-700 text-white rounded-lg ">GitHub</a>
              </div>
            </div>
          </div>
        </SwiperSlide>)}
       </div>
     </Swiper>
   </div></div>
  );
};

export default Projects;
