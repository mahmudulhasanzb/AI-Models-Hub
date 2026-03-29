import React from 'react';
import HeroImg from '../../assets/banner.png';

const Hero = () => {
  return (
    <div id="home" className="relative min-w-full flex justify-center items-center overflow-hidden py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium px-5 py-2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="animate-pulse">✨</span> Frontier AI Models
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            One Subscription.
            <br />
            <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              All the AIs You Need
            </span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
            Experience the full spectrum of frontier intelligence — all the most
            advanced AI models, unified under a single, powerful platform.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 transition-all px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] flex items-center gap-3 group text-white border border-white/10">
              Get Unlimited Access
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          <div className="flex items-center gap-8 text-sm text-zinc-500 pt-6">
            <div className="flex items-center gap-1">
              <span className="text-cyan-400">✓</span> 50+ Frontier Models
            </div>
            <div className="flex items-center gap-1">
              <span className="text-cyan-400">✓</span> No Usage Limits
            </div>
            <div className="flex items-center gap-1">
              <span className="text-cyan-400">✓</span> Cancel Anytime
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end items-center h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-cyan-500/20 to-transparent blur-3xl rounded-full mix-blend-screen pointer-events-none"></div>
          <div className="relative z-10 w-full max-w-lg">
            <img
              className="relative w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:drop-shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-700 animate-[float_6s_ease-in-out_infinite]"
              style={{ animation: 'float 6s ease-in-out infinite' }}
              src={HeroImg}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
