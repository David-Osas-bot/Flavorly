// Header.jsx
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // or use any icon library (heroicons, lucide, etc.)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className="
          w-full h-20 md:h-[92px]
          bg-[hsl(40,20%,95%)] backdrop-blur-md bg-white/60
          border-b border-gray-200/50
          flex items-center justify-between
          px-5 sm:px-6 lg:px-10
          transition-all duration-300
        "
      >
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
          Flavor<span className="text-[#F97316]">ly</span>
        </div>

        {/* Desktop Nav + Button */}
        <div className="hidden md:flex items-center gap-10 lg:gap-12">
          <nav className="flex items-center gap-8 lg:gap-10 text-[#261E17] font-medium">
            <a href="#menu" className="hover:text-[#F97316] transition-colors">Menu</a>
            <a href="#about" className="hover:text-[#F97316] transition-colors">About</a>
            <a href="#delivery" className="hover:text-[#F97316] transition-colors">Delivery</a>
            <a href="#contact" className="hover:text-[#F97316] transition-colors">Contact</a>
          </nav>

          <button
            className="
              px-6 py-2.5 min-w-[140px]
              rounded-3xl bg-[#F97316] text-white font-semibold
              hover:bg-white hover:text-[#F97316] hover:border-[#F97316]
              border-2 border-transparent
              transition-all duration-300 ease-in-out
              shadow-sm hover:shadow-md
            "
          >
            Order Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-[#261E17] focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={toggleMenu} // close when clicking outside
      />

      {/* Mobile Menu Panel */}
      <div
        className={`
          md:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50
          shadow-2xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button inside menu */}
          <button
            className="self-end text-3xl text-gray-700 mb-8"
            onClick={toggleMenu}
          >
            <HiX />
          </button>

          <nav className="flex flex-col gap-6 text-xl font-medium text-[#261E17]">
            <a href="#menu" className="hover:text-[#F97316]" onClick={toggleMenu}>Menu</a>
            <a href="#" className="hover:text-[#F97316]" onClick={toggleMenu}>About</a>
            <a href="#delivery" className="hover:text-[#F97316]" onClick={toggleMenu}>Delivery</a>
            <a href="#contact" className="hover:text-[#F97316]" onClick={toggleMenu}>Contact</a>
          </nav>

          <button
            className="
              mt-auto px-6 py-3.5 w-full rounded-3xl
              bg-[#F97316] text-white font-bold text-lg
              hover:bg-[#e55f00] transition-colors
            "
            onClick={toggleMenu}
          >
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;