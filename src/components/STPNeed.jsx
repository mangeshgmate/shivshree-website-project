import React from 'react';

const STPNeed = () => {
  return (
    <section className="py-20 bg-[#030F27] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Why STP is Crucial Today?</h2>
        <div className="w-24 h-1 bg-[#FDBE33] mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          <div className="p-8 border border-gray-800 hover:border-[#FDBE33] transition-colors">
            <h3 className="text-[#FDBE33] font-bold text-xl mb-4">Regulatory Compliance</h3>
            <p className="text-gray-400 text-sm">Strict pollution control board norms in Pune and Maharashtra require societies to process waste water effectively before discharge.</p>
          </div>
          
          <div className="p-8 border border-gray-800 hover:border-[#FDBE33] transition-colors">
            <h3 className="text-[#FDBE33] font-bold text-xl mb-4">Water Scarcity</h3>
            <p className="text-gray-400 text-sm">Recycling sewage water for gardening and flushing reduces the burden on municipal supply and tankers.</p>
          </div>

          <div className="p-8 border border-gray-800 hover:border-[#FDBE33] transition-colors">
            <h3 className="text-[#FDBE33] font-bold text-xl mb-4">Public Health</h3>
            <p className="text-gray-400 text-sm">Proper treatment prevents ground water contamination and eliminates odors and pathogens in residential areas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default STPNeed;