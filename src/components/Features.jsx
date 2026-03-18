import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, Users, MapPin, QrCode, Clock, X, ArrowRight, Star } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Brain className="w-8 h-8 text-secondary" />,
    title: "AI Smart Insights",
    description: "Predictive algorithms find the best parking spots before you even arrive.",
    details: "Our proprietary AI continuously analyzes real-time traffic data, historical availability, and local events to forecast open parking spaces before you start your engine.",
    useCase: "Commuting to a crowded tech park at 8:45 AM without stress, knowing exactly where spots will open up.",
    gradient: "from-secondary/10 to-transparent",
    border: "group-hover:border-secondary/50",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.3)]",
    badgeColor: "bg-secondary/10 text-secondary"
  },
  {
    id: 2,
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Real-time Discovery",
    description: "Live availability maps ensure you never circle around aimlessly again.",
    details: "Access an interactive, millisecond-accurate map that tracks available private and public parking bays within a 5-mile radius of your destination.",
    useCase: "Finding an emergency parking spot near the hospital when every second counts.",
    gradient: "from-primary/10 to-transparent",
    border: "group-hover:border-primary/50",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)]",
    badgeColor: "bg-primary/10 text-primary"
  },
  {
    id: 3,
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Peer-to-Peer Leasing",
    description: "Rent out your own parking space and earn passive income easily.",
    details: "Turn your empty driveway into a revenue stream. List your spot, set custom pricing schedules, and automatically approve bookings from verified users.",
    useCase: "Monetizing your empty suburban driveway while you are away at work all day.",
    gradient: "from-accent/10 to-transparent",
    border: "group-hover:border-accent/50",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(8,145,178,0.3)]",
    badgeColor: "bg-accent/10 text-accent"
  },
  {
    id: 4,
    icon: <Clock className="w-8 h-8 text-amber-500" />,
    title: "Instant Booking",
    description: "Reserve a spot in under 3 seconds with one-tap rapid checkout.",
    details: "Save your vehicle and payment details to seamlessly reserve a parking spot with a single tap. Complete cost transparency with zero hidden surge fees.",
    useCase: "Securing last-minute parking for a concert before prices surge locally.",
    gradient: "from-amber-500/10 to-transparent",
    border: "group-hover:border-amber-500/50",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)]",
    badgeColor: "bg-amber-500/10 text-amber-600"
  },
  {
    id: 5,
    icon: <QrCode className="w-8 h-8 text-pink-500" />,
    title: "QR Code Verification",
    description: "Contactless entry and exit. Just scan your generated QR code.",
    details: "Say goodbye to lost paper tickets. Your booking generates a secure, temporal QR code that integrates directly with smart boom barriers at partner lots.",
    useCase: "Scanning into a high-security automated underground parking lot instantly.",
    gradient: "from-pink-500/10 to-transparent",
    border: "group-hover:border-pink-500/50",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.3)]",
    badgeColor: "bg-pink-500/10 text-pink-600"
  },
  {
    id: 6,
    icon: <MapPin className="w-8 h-8 text-emerald-500" />,
    title: "Precise Navigation",
    description: "Turn-by-turn routing directly to your reserved parking bay.",
    details: "We don't just route you to the building. Our granular mapping takes you straight to your specific assigned parking bay, factoring in facility layouts.",
    useCase: "Navigating a complicated multi-level mega mall parking structure effortlessly.",
    gradient: "from-emerald-500/10 to-transparent",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)]",
    badgeColor: "bg-emerald-500/10 text-emerald-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedFeature) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedFeature]);

  return (
    <section id="features" className="py-32 lg:py-40 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Platform Ecosystem</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Engineered to eliminate parking anxiety.
          </h2>
          <p className="text-xl text-slate-500 font-medium">
            Discover a comprehensive suite of powerful, next-generation tools built seamlessly into a lightning-fast application.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants} 
              className="group cursor-pointer h-full"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className={`relative h-full bg-white rounded-3xl p-8 lg:p-10 border-[1.5px] border-slate-100 shadow-sm transition-all duration-300 group-hover:-translate-y-2 overflow-hidden ${feature.border} ${feature.glow}`}>
                {/* Background Glow on Hover */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none`}></div>
                
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_10px_-4px_rgba(0,0,0,0.1)] relative z-10">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl lg:text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors relative z-10">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-6 relative z-10">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors mt-auto pt-4 relative z-10">
                  Learn more <ArrowRight className="w-4 h-4 ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Feature Detail Modal Popup */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            
            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10"
            >
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Decorative Header */}
              <div className={`h-32 w-full bg-gradient-to-br ${selectedFeature.gradient} opacity-20 absolute top-0 left-0 pointer-events-none`}></div>

              <div className="p-8 md:p-12 relative z-10 pt-16">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-8 border border-slate-100">
                  {selectedFeature.icon}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">{selectedFeature.title}</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3">How it works</h4>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                      {selectedFeature.details}
                    </p>
                  </div>
                  
                  <div className={`p-6 rounded-2xl ${selectedFeature.badgeColor} bg-opacity-[0.05] border border-current border-opacity-10`}>
                    <h4 className="text-sm font-bold tracking-widest uppercase mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-2" /> Real-World Impact
                    </h4>
                    <p className="font-semibold leading-relaxed">
                      "{selectedFeature.useCase}"
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={() => setSelectedFeature(null)}
                      className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg"
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Features;
