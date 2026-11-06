import { useState } from 'react';
import logo from '../assets/shivshree_flogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030F27] text-white z-50 h-28 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Shivshree" className="h-20 w-auto" />
          <span className="font-bold text-xl tracking-tighter">SHIVSHREE <br />CONSULTANCY</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-[#FDBE33] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#FDBE33] transition-colors">About Us</a>
          <a href="#services" className="hover:text-[#FDBE33] transition-colors">Services</a>
          <a href="#contact" className="bg-[#FDBE33] text-[#030F27] px-3 py-1.5 rounded">Get Inquiry</a>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded hover:bg-white/10 transition-colors"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={handleToggle}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#030F27] border-t border-white/10`}
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          <a href="#home" className="hover:text-[#FDBE33] transition-colors" onClick={handleClose}>Home</a>
          <a href="#about" className="hover:text-[#FDBE33] transition-colors" onClick={handleClose}>About Us</a>
          <a href="#services" className="hover:text-[#FDBE33] transition-colors" onClick={handleClose}>Services</a>
          <a
            href="#contact"
            className="bg-[#FDBE33] text-[#030F27] px-3 py-2 rounded inline-flex w-fit"
            onClick={handleClose}
          >
            Get Inquiry
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
