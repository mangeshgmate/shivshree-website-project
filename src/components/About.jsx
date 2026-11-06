import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Import your images from the specific common folder path
import slide1 from '../assets/common/pro_2.jpeg'; 
import slide2 from '../assets/common/pro_6.jpeg'; 
import slide3 from '../assets/common/pro_13.jpeg';
import slide4 from '../assets/common/pro_10.jpeg';
import slide5 from '../assets/common/pro_4.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Description */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black text-[#030F27] leading-tight mb-8">
              About<br />
              
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Shivshree Environment and Agriculture Consultancy is based in Pune and caters specifically to client requirements for waste water purification. We provide critical technical services including environmental audits, green energy assessments, and rainwater harvesting solutions to ensure industrial and residential projects remain ecologically compliant. 
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              By integrating advanced chemical analysis with professional consultancy, we empower housing societies and businesses across Maharashtra to manage their water resources with maximum efficiency and sustainability.
            </p>
            <p className="text-[#030F27] font-semibold mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#FDBE33]"></span>
              Led by Dr. Chandrashekhar B. Pawar
            </p>
            
            <div className="border-l-4 border-[#FDBE33] pl-6 py-2 bg-gray-50">
              <p className="font-bold text-[#030F27] uppercase tracking-widest text-sm mb-2">Our vision</p>
              <p className="text-gray-600 italic">
                "To lead the regional transition toward a circular water economy by delivering innovative, cost-effective environmental solutions that protect our local ecosystems for future generations".
              </p>
            </div>
          </div>

          {/* Right Side: Sliding Photos */}
          <div className="lg:w-2/5 w-full max-w-md mx-auto">
            {/* Professional Decorative Container */}
            <div className="relative p-4 bg-gray-50 border-t-8 border-[#030F27] shadow-2xl">
              {/* Gold Accent Corner */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-r-8 border-t-8 border-[#FDBE33] z-0"></div>
              
              <div className="h-[350px] md:h-[450px] w-full relative z-10 overflow-hidden">
                <Swiper
                  spaceBetween={0}
                  effect={'fade'}
                  centeredSlides={true}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, EffectFade, Pagination]}
                  className="h-full w-full"
                >
                  <SwiperSlide>
                    <img src={slide1} className="w-full h-full object-cover" alt="Technical Project 1" />
                  </SwiperSlide>
                
                  <SwiperSlide>
                    <img src={slide2} className="w-full h-full object-cover" alt="Technical Project 2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={slide3} className="w-full h-full object-cover" alt="Technical Project 3" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={slide4} className="w-full h-full object-cover" alt="Technical Project 4" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={slide5} className="w-full h-full object-cover" alt="Technical Project 5" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;