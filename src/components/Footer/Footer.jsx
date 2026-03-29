import React from 'react';
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} className="h-10 w-auto brightness-150 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <h2 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-cyan-400">
                Ai Hub
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              One subscription. Access to all frontier AI models in a single
              powerful platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-cyan-400 font-semibold mb-6 text-lg tracking-wide drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-cyan-400 font-semibold mb-6 text-lg tracking-wide drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-cyan-400 font-semibold mb-6 text-lg tracking-wide drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Legal</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>

          <div className="flex gap-6">
            <p className="hover:text-cyan-400 transition-colors">
              Made with 🚀 for AI enthusiasts
            </p>
          </div>
          <div>
            <a
              href="https://hasansportfoliio.netlify.app/"
              target="_blank"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all font-bold"
            >
              Developed by Hasan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;