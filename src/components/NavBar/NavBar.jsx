import React from 'react';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <div className="navbar sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-zinc-400 hover:text-cyan-400 mr-2 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-xl bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-box w-52 text-zinc-300">
            <li><a className="hover:text-cyan-400 hover:bg-white/5 p-3 text-base">Home</a></li>
            <li><a className="hover:text-cyan-400 hover:bg-white/5 p-3 text-base">Models</a></li>
            <li><a className="hover:text-cyan-400 hover:bg-white/5 p-3 text-base">API</a></li>
            <li><a className="hover:text-cyan-400 hover:bg-white/5 p-3 text-base">Pricing</a></li>
          </ul>
        </div>
        <a className="flex items-center gap-3 text-xl lg:text-2xl font-bold tracking-tighter hover:scale-105 transition-transform cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-md opacity-20 rounded-full"></div>
            <img className="w-8 lg:w-10 relative z-10 brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" src={logo} alt="Logo" />
          </div>
          <span className="bg-linear-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Ai Hub
          </span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex gap-8">
        <a className="text-sm font-medium text-zinc-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all cursor-pointer">Home</a>
        <a className="text-sm font-medium text-zinc-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all cursor-pointer">Models</a>
        <a className="text-sm font-medium text-zinc-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all cursor-pointer">API</a>
        <a className="text-sm font-medium text-zinc-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all cursor-pointer">Pricing</a>
      </div>

      <div className="navbar-end">
        <button className="px-6 py-2 rounded-lg bg-linear-to-r from-cyan-600 to-purple-600 text-white font-medium hover:from-cyan-500 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 border border-white/10">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;
