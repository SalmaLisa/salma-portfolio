import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  const features = project.features;
  const functionalities = project.desc;
  console.log(features);
  const { img1, img2, img3, img4 } = project.details.gallery;
  return (
    <div>
      {project && (
        <section className="py-6 bg-gray-100">
          <h1 className="text-4xl text-gray-700 text-center font-bold my-5 italic">
            {project.title}
          </h1>
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              <img
                className="object-cover w-full bg-gray-500 border-8 border-gray-700"
                src={img1}
                alt=""
              />
              <img
                className="object-cover w-full bg-gray-500 border-8 border-gray-700"
                src={img2}
                alt=""
              />
              <img
                className="object-cover w-full bg-gray-500 border-8 border-gray-700"
                src={img3}
                alt=""
              />
              <img
                className="object-cover w-full bg-gray-500 border-8 border-gray-700"
                src={img4}
                alt=""
              />
            </div>
          </div>
          <div className="w-10/12 mx-auto my-20">
            <div>
              <h3 className="text-2xl font-bold">Features :</h3>
              <ul className="list-disc">
                {features.map((f, idx) => (
                  <li key={idx} className="ml-12 text-xl font-semibold mt-3">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-12">
              <h3 className="text-2xl font-bold">Functionalities :</h3>
              <ul className="list-disc">
                {functionalities.map((f, idx) => (
                  <li key={idx} className="ml-12 text-xl font-semibold mt-3">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Used Technologies : <span className="text-lime-500">{project.tech}</span>
              </h3>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;
