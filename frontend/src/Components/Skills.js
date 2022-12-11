import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='mx-3 md:mx-24'>
      <h1 className="text-4xl font-bold mt-5 mb-12 text-center">Skills</h1>
      <div className='md:flex justify-evenly  items-center mb-32'>
         <div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>Web Development</p>
        <progress className="progress w-56 md:w-80" value="70" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>HTML</p>
        <progress className="progress w-56 md:w-80" value="95" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>CSS</p>
        <progress className="progress w-56 md:w-80" value="95" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>React JS</p>
        <progress className="progress w-56 md:w-80" value="80" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>Javascript</p>
        <progress className="progress w-56 md:w-80" value="70" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>Node JS</p>
        <progress className="progress w-56 md:w-80" value="70" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>Express JS</p>
        <progress className="progress w-56 md:w-80" value="70" max="100"></progress>
      </div>
      </div>
      <div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>Bootstrap</p>
        <progress className="progress w-56 md:w-80" value="95" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>Tailwind CSS</p>
        <progress className="progress w-56 md:w-80" value="95" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>MongoDb</p>
        <progress className="progress w-56 md:w-80" value="80" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>JSON</p>
        <progress className="progress w-56 md:w-80" value="80" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>REST API</p>
        <progress className="progress w-56 md:w-80" value="90" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>Firebase</p>
        <progress className="progress w-56 md:w-80" value="70" max="100"></progress>
      </div>
      <div className='flex items-center'>
        <p className='mr-5 font-semibold text-xl my-1'>GitHub</p>
        <progress className="progress w-56 md:w-80" value="60" max="100"></progress>
      </div>
      </div>
     </div>
    </div>
  );
};

export default Skills;