import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center bg-[#FDBE33] overflow-hidden pt-20">
      {/* Subtle White Geometric Accent to add depth without breaking the yellow theme */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
        
          
          {/* Main Heading: Engineering (Blue) Purity (White) */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8 uppercase tracking-tight">
            <span className="text-[#030F27]">Shivshree</span><br />
            <span className="text-white drop-shadow-md">Consultancy</span>
          </h1>
          
          {/* Description in Navy Blue for high contrast on Yellow */}
          <p className="text-lg md:text-xl text-[#030F27] max-w-2xl mb-10 leading-relaxed font-medium">
            Specialized engineering and chemistry solutions for Water (WTP), Sewage (STP), and Effluent (ETP) Treatment Plants in Pune.
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;