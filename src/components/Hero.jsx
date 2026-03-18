import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, MapPin, Zap } from 'lucide-react';

const parkingSpots = [
  { title: "HITEX Exhibition Grounds", location: "Hyderabad", status: "Available Now", statusColor: "text-emerald-600", iconColor: "text-emerald-500", bgIcon: "bg-emerald-500/10", bgHoverIcon: "group-hover:bg-emerald-500/20", price: "₹80", position: "top-0 right-4 lg:right-10 z-[30]" },
  { title: "Gachibowli Stadium", location: "Hyderabad", status: "3 Slots Left", statusColor: "text-amber-500", iconColor: "text-amber-500", bgIcon: "bg-amber-500/10", bgHoverIcon: "group-hover:bg-amber-500/20", price: "₹60", position: "top-[150px] left-0 xl:left-4 z-[20]" },
  { title: "Banjara Hills Secure", location: "Hyderabad", status: "Almost Full", statusColor: "text-rose-500", iconColor: "text-rose-500", bgIcon: "bg-rose-500/10", bgHoverIcon: "group-hover:bg-rose-500/20", price: "₹100", position: "top-[300px] right-0 xl:right-4 z-[10]" }
];

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -80]);

  return (
    <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-48 overflow-hidden min-h-screen flex items-center">
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-secondary/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-24 items-center z-10 w-full">
        
        {/* Left Content */}
        <div className="text-left w-full">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 text-sm font-bold text-primary shadow-sm border border-primary/10"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>ParkMate v2.0 is Live</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center bg-slate-100/90 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-bold tracking-wide uppercase text-slate-500 border border-slate-200"
            >
              Prototype Version
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 mb-8 leading-[1.05]"
          >
            Parking, <br/>
            <span className="text-transparent bg-clip-text bg-premium-gradient">Reimagined.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-slate-500 mb-14 max-w-xl font-medium leading-relaxed"
          >
            Discover, book, and park effortlessly. Experience the future of urban mobility with instant QR verification and real-time smart insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center w-full sm:w-auto"
          >
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              <a
                href="https://pun33th45.itch.io/parkmate-prototype"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-black text-white bg-slate-900 rounded-full overflow-hidden transition-all duration-400 hover:scale-[1.03] hover:shadow-glow-lg w-full sm:w-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-premium-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center tracking-wide">
                  Download APK
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
              <span className="mt-3 text-xs font-semibold text-slate-400/80 uppercase tracking-widest pl-1">
                AVAILABLE EXCLUSIVELY ON ANDROID
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex items-center space-x-4 text-sm font-semibold text-slate-500"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center text-xs text-white font-bold bg-gradient-to-br ${i%2===0 ? 'from-primary to-blue-400' : 'from-secondary to-purple-400'} z-[${5-i}]`}>
                  U{i}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-amber-500 mb-0.5">
                <Star className="w-4 h-4 fill-current"/>
                <Star className="w-4 h-4 fill-current"/>
                <Star className="w-4 h-4 fill-current"/>
                <Star className="w-4 h-4 fill-current"/>
                <Star className="w-4 h-4 fill-current"/>
              </div>
              <span className="tracking-tight">Trusted by incredible drivers</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Layered Floating Composition */}
        <div className="relative w-full lg:h-[650px] mt-16 lg:mt-0 flex flex-col gap-6 lg:block">

          {/* Center decorative element (Desktop only) */}
          <div className="hidden lg:flex absolute top-[280px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full border border-white/20 shadow-2xl items-center justify-center z-0">
            <div className="w-[260px] h-[260px] bg-white/50 rounded-full shadow-inner flex items-center justify-center backdrop-blur-3xl">
               <div className="w-24 h-24 rounded-full bg-premium-gradient opacity-20 blur-2xl"></div>
            </div>
          </div>
          
          {/* Parking Spots Array */}
          {parkingSpots.map((spot, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + (i * 0.2) }}
              style={{ y: y1 }}
              className={`lg:absolute animate-float w-full max-w-[340px] xl:max-w-[350px] mx-auto lg:mx-0 ${spot.position} group hover:!z-[50]`}
            >
              <div className="glass-panel p-5 bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_60px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-3 transition-all duration-300 cursor-pointer border border-white/60 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4 min-w-0">
                    <div className={`w-12 h-12 ${spot.bgIcon} rounded-2xl flex items-center justify-center shrink-0 ${spot.bgHoverIcon} transition-colors`}>
                      <MapPin className={`${spot.iconColor} w-6 h-6`} />
                    </div>
                    <div className="flex flex-col min-w-0 pr-2 pt-0.5">
                      <h4 className="font-bold text-slate-900 text-[14px] xl:text-[15px] leading-tight mb-1 truncate">{spot.title}</h4>
                      <span className="text-[11px] text-slate-500 font-semibold mb-1.5 leading-none">{spot.location}</span>
                      <p className={`text-[10px] font-bold ${spot.statusColor} uppercase tracking-widest leading-none mt-1`}>{spot.status}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 flex flex-col items-end pt-1">
                    <div className="flex items-baseline">
                      <span className="font-bold text-2xl text-slate-900">{spot.price}</span>
                      <span className="text-xs text-slate-500 font-medium ml-[1px]">/hr</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-slate-900/5 group-hover:bg-slate-900 group-hover:text-white text-slate-700 rounded-xl py-2.5 font-bold text-xs tracking-wider transition-colors duration-300">
                  Book Instantly
                </button>
              </div>
            </motion.div>
          ))}

          {/* Smart Insights Small Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ y: y2, animationDelay: '1.5s' }}
            className="lg:absolute bottom-[-20px] left-0 xl:left-8 z-[40] animate-float w-full max-w-[280px] mx-auto lg:mx-0 group hover:!z-[50]"
          >
            <div className="glass-panel px-5 py-4 bg-slate-900/90 backdrop-blur-2xl rounded-2xl shadow-[0_30px_50px_-15px_rgba(0,0,0,0.3)] border border-slate-700 hover:scale-105 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4 cursor-pointer">
              <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0 border border-secondary/30 group-hover:bg-secondary/30 transition-colors">
                <Zap className="text-secondary w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-white text-[13px] tracking-wide">Smart Insights</h4>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">Spot found 2 mins away.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
