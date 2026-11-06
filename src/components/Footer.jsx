import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#030F27] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
        <div>
          <h3 className="text-[#FDBE33] text-2xl font-bold mb-4 tracking-tighter uppercase">SHIVSHREE</h3>
          <p className="text-gray-400 text-sm">Engineering and chemistry applications for waste water purification.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-[#FDBE33]">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
          </ul>
        </div>
        <div>
           <h4 className="font-bold mb-4 uppercase text-[#FDBE33]">Contact us</h4>
          <p className="text-gray-400 text-sm mb-2"><b>ADDR:</b> Flat No. 11, Saisamarth Apt, Pimple Gurav, Pune.</p>
          <p className="text-gray-400 text-sm mb-2"><b>CALL:</b> +91 9923122791</p>
          <p className="text-gray-400 text-sm"><b>EMAIL:</b> pawarcb16@gmail.com</p>
          <p className="text-gray-400 text-sm"><b>Website Developed By:</b>Mangesh Mate</p>
          <p className="text-gray-400 text-sm"><b>phone:</b> +91 8767699346</p>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-500 text-[10px] tracking-widest uppercase">
        © 2026 Shivshree Environment & Agriculture Consultancy.
      </div>
    </footer>
  );
};

export default Footer;
