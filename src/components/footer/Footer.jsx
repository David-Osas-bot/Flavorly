// Footer.jsx
const Footer = () => {
  return (
    <footer
      className="
        w-full 
        bg-white 
        border-t-2 border-gray-300 
        mt-16 md:mt-20 lg:mt-24
        py-10 md:py-12 lg:py-16
        px-5 sm:px-8 lg:px-12
      "
      id="footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">

        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
          Flavor<span className="text-[#F97316]">ly</span>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-base sm:text-lg text-gray-600 font-medium">
          <a href="#" className="hover:text-[#F97316] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#F97316] transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[#F97316] transition-colors">
            Support
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-sm sm:text-base text-gray-500 text-center md:text-right">
          <small>© {new Date().getFullYear()} Flavorly. All rights reserved.</small>
        </div>

      </div>
    </footer>
  );
};

export default Footer;