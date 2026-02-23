const Header = () => {
  return (
    <div className="w-full h-[92px] bg-[hsl(40,20%,95%)] 
                    fixed top-0 left-0 z-50
                    backdrop-blur-md bg-white/50
                    flex justify-between p-6">

      <div className="w-[10%] text-[30px] font-bold font-serif">
        Flavor<span className="text-[#F97316]">ly</span>
      </div>

      <div className="w-[40%] flex justify-between items-center">
        <nav className="w-[80%] flex justify-evenly text-[#261E17] font-semibold">
          <a href="#menu">Menu</a>
          <a href="#">About</a>
          <a href="#delivery">Delivery</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="w-[140px] h-[40px] flex items-center p-6 rounded-3xl bg-[#F97316] text-[#FFFFFF] cursor-pointer font-bold hover:bg-[#FFFFFF] hover:border-orange-300 hover:text-[#F97316] transition duration-300 ease-in-out border border-gray-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Header;
