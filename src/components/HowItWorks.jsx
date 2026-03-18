import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CreditCard, Compass, QrCode } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Search & Discover",
    description: "Pinpoint available spots with real-time tracking.",
    details: "Instantly filter spaces based on vehicle size, EV charging needs, and dynamic hourly rates. Our interactive map updates bay availability in absolute real-time.",
    color: "from-primary/20 text-primary border-primary",
    bgColor: "bg-primary"
  },
  {
    id: 2,
    icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Secure & Book",
    description: "Lock in your spot with 1-tap rapid checkout.",
    details: "Your payment details are securely vaulted. Secure a premium bay in under 3 seconds with absolute price transparency and zero hidden surge limits.",
    color: "from-secondary/20 text-secondary border-secondary",
    bgColor: "bg-secondary"
  },
  {
    id: 3,
    icon: <Compass className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Route & Navigate",
    description: "Get predictive routing straight to your space.",
    details: "Avoid unexpected street closures. We don't just route you to the building—we guide you explicitly to your specific assigned parking bay level and slot.",
    color: "from-accent/20 text-accent border-accent",
    bgColor: "bg-accent"
  },
  {
    id: 4,
    icon: <QrCode className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Scan & Access",
    description: "Contactless gate access via automatic QR verification.",
    details: "The gate opens in milliseconds upon scanning your app. Zero paper tickets to lose, and billing automatically halts the second you drive out.",
    color: "from-pink-500/20 text-pink-500 border-pink-500",
    bgColor: "bg-pink-500"
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section id="how-it-works" className="py-32 lg:py-40 bg-slate-900 overflow-hidden relative">
      {/* Dark mode background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 lg:mb-32"
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Frictionless Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Four steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">absolute freedom.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            A meticulously crafted user journey that eliminates the chaos of urban parking instantly.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Timeline (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-1.5 bg-slate-800 rounded-full z-0 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-pink-500 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Animated Connecting Timeline (Mobile) */}
          <div className="block lg:hidden absolute top-[5%] bottom-[5%] left-[39px] sm:left-[51px] w-1.5 bg-slate-800 rounded-full z-0 overflow-hidden">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-primary via-secondary to-pink-500 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setActiveStep(step.id)}
                onHoverEnd={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className={`relative flex flex-row lg:flex-col items-start lg:items-center group cursor-pointer lg:w-1/4 ${activeStep === step.id ? 'lg:scale-105' : ''} transition-transform duration-500 ease-out`}
              >
                {/* Step Number Glowing Orb */}
                <div className="relative shrink-0 flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 lg:w-28 lg:h-28 lg:mx-auto lg:mb-8">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-slate-900 border-[3px] border-slate-700 group-hover:${step.border} flex items-center justify-center shadow-2xl transition-colors duration-500 z-10`}>
                    {/* Number Background */}
                    <div className={`absolute -top-2 -right-2 ${step.bgColor} text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-20`}>
                      {step.id}
                    </div>
                    {/* Icon */}
                    <motion.div 
                      className={`transition-colors duration-300 ${activeStep === step.id ? step.color.split(' ')[1] : 'text-slate-400'}`}
                      animate={activeStep === step.id ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="ml-6 lg:ml-0 flex-1 lg:text-center pt-2 sm:pt-4 lg:pt-0">
                  <h3 className={`text-xl sm:text-2xl font-black mb-2 sm:mb-3 transition-colors duration-300 ${activeStep === step.id ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  {/* Expandable Details */}
                  <AnimatePresence>
                    {activeStep === step.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className={`p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 mt-2 text-slate-300 text-sm leading-relaxed shadow-lg backdrop-blur-sm lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:w-[120%] lg:mt-4 z-30`}>
                          {step.details}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
