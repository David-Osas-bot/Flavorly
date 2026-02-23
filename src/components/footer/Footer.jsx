const Footer = () => {
  return (
    <div className='w-full h-40 flex flex-row justify-between items-center border-t-2 mt-30 border-t-gray-400 border-solid' id="footer">
      <div className="w-[10%] text-[25px] font-bold font-serif ml-10">
        Flavor<span className="text-[#F97316]">ly</span>
      </div>

      <nav className="w-70 h-12 text-lg text-gray-500 flex flex-row justify-evenly items-center">
        <a href="#">Privacy</a>

        <a href="#">Terms</a>

        <a href="#">Support</a>
      </nav>

      <div className="w-70 h-12 text-lg text-gray-500">
        <small >&copy; 2026 Flavorly. All rights Reserved</small>
      </div>
    </div>
  );
};

export default Footer; 