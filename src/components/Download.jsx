import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { DownloadCloud, ArrowRight } from 'lucide-react';

const Download = () => {
  return (
    <section id="download" className="py-32 relative overflow-hidden bg-slate-900 border-t border-slate-800">
      
      {/* Background Animated Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel-dark p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-left relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />

          <div className="md:w-3/5 mb-12 md:mb-0 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Ready to park <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">smarter?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-lg font-medium">
              Join thousands of users discovering, booking, and managing their parking seamlessly. Download the official ParkMate prototype today.
            </p>
            
            <a
              href="https://pun33th45.itch.io/parkmate-prototype"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-slate-900 bg-white rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-3 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center">
                <DownloadCloud className="mr-3 w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                Download APK Now
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-400/80 pl-2">
              Currently available exclusively on Android devices.
            </p>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 flex flex-col items-center shadow-2xl relative group"
            >
              {/* Pulsing Backglow */}
              <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-56 h-56 bg-white rounded-2xl mb-6 p-3 relative shadow-sm hover:scale-105 transition-transform duration-300 group-hover:shadow-glow z-10">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://pun33th45.itch.io/parkmate-prototype" 
                  alt="ParkMate itch.io Download QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-bold text-white text-lg tracking-wide z-10">Scan to Install</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Download;
