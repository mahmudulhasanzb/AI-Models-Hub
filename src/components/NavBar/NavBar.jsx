import React from 'react';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <a className="flex items-center gap-2 text-xl font-bold">
          <img className="w-10" src={logo} />
          Ai Hub
        </a>
      </div>

      <div className="navbar-center flex gap-10">
        <a className="btn btn-ghost text-base" href='#'>Home</a>
        <a className="btn btn-ghost text-base" href='#'>About</a>
        <a className="btn btn-ghost text-base" href='#'>Contact</a>
        <a className="btn btn-ghost text-base" href='#'>Blog</a>
      </div>

      <div className="navbar-end">
        <button className="btn bg-red-500 text-white rounded-lg">Get in touch</button>
      </div>
    </div>
  );
};

export default NavBar;
