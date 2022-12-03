import React from 'react';

const Nav = () => {
  return (
    <div className="navbar bg-transparent lg:px-12 py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#aboutMe'>About</a></li>
        <li><a href='#skills'>Skill</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
    <a href='#banner' className="btn btn-ghost font-bold Uppercase text-xl">Salma Akter <span className='mt-2 ml-1'>▪</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><a href='#projects'>Projects</a></li>
        <li><a href='#aboutMe'>About</a></li>
        <li><a href='#skills'>Skill</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://drive.google.com/file/d/1M6E6nyHdBBrGzM-eipA8d5M9f3FE3lCj/view?usp=share_link" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg font-bold uppercase text-white bg-gradient-to-tr from-lime-400 to-lime-700">Resume</a>
  </div>
</div>
  );
};

export default Nav;