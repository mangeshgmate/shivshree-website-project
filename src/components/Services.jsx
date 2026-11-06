import React from 'react';

const Services = () => {
  const services = [
    { title: "WTP / STP / ETP", icon: "fa-tint", desc: "Expert design, supply, and maintenance of treatment plants." },
    { title: "Environmental Audits", icon: "fa-file-contract", desc: "Green, Energy, and Water audits for housing societies." },
    { title: "Waste Management", icon: "fa-leaf", desc: "Bio composting and Rooftop Rainwater harvesting solutions." },
    { title: "ESG Certifications", icon: "fa-shield-alt", desc: "Deep cleaning and Environmental Social Governance compliance." }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#030F27] mb-2 uppercase tracking-tight">Our Services</h2>
        <div className="w-20 h-1.5 bg-[#FDBE33] mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-10 bg-gray-50 border-b-4 border-[#030F27] hover:border-[#FDBE33] transition-all">
              <i className={`fas ${s.icon} text-4xl text-[#030F27] group-hover:text-[#FDBE33] mb-6`}></i>
              <h3 className="font-bold text-lg text-[#030F27] mb-4 uppercase">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;