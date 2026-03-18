import React from 'react';
import { motion } from 'framer-motion';

const screenshots = [
  {
    id: 1,
    image: '/screenshots/dashboard.jpeg',
    title: 'Home Dashboard',
    description: 'Quick access to booking, listings, and insights'
  },
  {
    id: 2,
    image: '/screenshots/maps.jpeg',
    title: 'Map View',
    description: 'Real-time parking availability with pricing'
  },
  {
    id: 3,
    image: '/screenshots/smart%20insisghts.jpeg',
    title: 'Smart Insights',
    description: 'AI-based traffic and demand predictions'
  },
  {
    id: 4,
    image: '/screenshots/booking.jpeg',
    title: 'Booking Screen',
    description: 'Quick and easy parking reservation in seconds'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const AppPreview = () => {
  return (
    <section id="preview" className="py-32 lg:py-40 relative bg-slate-50 overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-0 md:px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-24 px-6 md:px-0"
        >
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">Inside the App</span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Experience ParkMate in Action</h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto">Explore a radically simplified interface engineered for the modern driver.</p>
        </motion.div>

        {/* 3-Column Structured Layout for Desktop | Horizontal Snap Carousel for Mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:grid md:grid-cols-3 md:gap-y-16 gap-x-6 md:gap-x-8 lg:gap-x-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar px-6 md:px-0 lg:max-w-5xl lg:mx-auto pb-10 md:pb-0"
        >
          {screenshots.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10, rotateY: 2, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`flex-shrink-0 w-[85vw] sm:w-[400px] md:w-full snap-center flex flex-col items-center group ${index === 3 ? 'md:col-span-3 md:w-1/3 md:mx-auto' : ''}`}
            >
              {/* Android Phone Mockup Frame */}
              <div className="relative rounded-[2.5rem] border-[4px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-500 mb-6 mx-auto w-full max-w-[300px] lg:max-w-[320px] aspect-[9/19]">
                
                {/* Android Camera Hole */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950 rounded-full z-20 border border-slate-800/50 shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-900/40 rounded-full"></div>
                </div>
                
                {/* Android Bottom Navigation Pill */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full z-20"></div>
                
                {/* Screenshot Image */}
                <div className="bg-slate-950 overflow-hidden rounded-[2.2rem] h-full w-full border-[6px] border-slate-900 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="text-center px-4 w-full">
                <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed text-balance">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Spacing element at end of scroll on mobile */}
          <div className="flex-shrink-0 w-2 snap-center md:hidden"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPreview;
