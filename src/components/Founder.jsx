import React from 'react';
import founderImage from '../assets/prof_pic.jpg';

const Founder = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#FDBE33] z-0"></div>
            <img src={founderImage} alt="Founder" className="relative z-10" />
          </div>

          {/* Text Column */}
          <div className="lg:w-1/2">
            
            <h2 className="text-4xl font-black text-[#030F27] mb-6">About Founder</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dr Chandrashekhar Pawar is a passionate environmental science expert, With a strong background in academic and field research, he has led impactful projects focused on conservation, climate change, and community awareness. As an Environmentalist he believes in the power of words to inspire change—crafting narratives that bridge science and society. His entrepreneurial ventures focus design,supply, operation and maintainenance of Water Treatment Plant ,Sewage Treatment Plant, Effluent Treatment Plant.He is Founder and Director of Shivshree company. Through lectures, books, and grassroots initiatives, he aims to educate, engage, and empower individuals toward responsible living.He has done Msc and PHD in Envronmental Science and have experience of 21 years.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;