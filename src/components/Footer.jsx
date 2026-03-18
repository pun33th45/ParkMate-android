import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] pt-24 pb-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Authentic About Section */}
          <div className="md:col-span-4 lg:col-span-5 pr-0 lg:pr-12">
            <div className="flex items-center space-x-3 mb-6 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <Logo className="w-10 h-10" innerColor="#FFFFFF" />
              <span className="text-2xl font-black tracking-tight text-white">ParkMate</span>
            </div>
            <div className="text-slate-400 font-medium leading-relaxed space-y-4">
              <p>
                ParkMate began as a passionate college project aimed at solving real-world parking 
                challenges faced in heavily congested urban areas like Hyderabad. 
              </p>
              <p>
                What started as an academic idea has rapidly evolved into a scalable smart prototype. 
                Our vision is to expand this foundation into a full-fledged smart parking ecosystem, 
                eliminating parking anxiety for tomorrow's drivers.
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-3 lg:ml-auto">
            <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="block text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium py-1">Features</a></li>
              <li><a href="#how-it-works" className="block text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium py-1">How it works</a></li>
              <li><a href="#preview" className="block text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium py-1">App Experience</a></li>
              <li><a href="#download" className="block text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 font-medium py-1">Download APK</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="block text-slate-600 cursor-not-allowed transition-colors font-medium py-1" title="Coming soon">Our Story</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="block text-slate-600 cursor-not-allowed transition-colors font-medium py-1" title="Coming soon">Careers</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="block text-slate-600 cursor-not-allowed transition-colors font-medium py-1" title="Coming soon">Contact Support</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="block text-slate-600 cursor-not-allowed transition-colors font-medium py-1" title="Coming soon">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="block text-slate-600 cursor-not-allowed transition-colors font-medium py-1" title="Coming soon">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom Setup */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 font-medium text-sm">
          <p>© {new Date().getFullYear()} ParkMate Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>Prototype Live</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
