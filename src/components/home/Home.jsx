// import bgImage from "../../assets/imgFive.jpg";
// import { FaArrowRight } from "react-icons/fa";

// const Home = () => {
//   return (
//     <div className="h-screen bg-cover bg-center bg-no-repeat pt-[10%]" style={{ backgroundImage: `url(${bgImage})` }}>

//       <div className="absolute inset-0 bg-black/70"></div>

//       <section className="ml-10 w-[630px] h-[650px] p-6 relative z-10">
//         <div className="w-[350px] h-[40px] text-[#F97316] rounded-[30px] flex justify-center items-center bg-orange-500/20 
//             border border-orange-400/30 
//             backdrop-blur-md 
//             shadow-lg shadow-orange-500/20">
//           <span className="font-bold text-lg">🔥 Free delivery on your first order</span>
//         </div>

//         <div>
//           <span className="text-[80px] text-white font-medium font-serif">Savor Every <span className="text-[#F97316]">Moment</span></span>
//           <p className="text-[#261E17] text-[25px] text-[hsl(40,20%,95%)]">Discover restaurant-quality meals delivered fresh to your door. From local favorites to global cuisines.</p>
//         </div>

//         <div className="flex justify-between flex-row w-[420px] text-lg font-medium">
//           <div className="w-[200px] h-[70px] bg-[#F97316] flex items-center justify-center rounded-4xl mt-8 brightness-100 hover:brightness-75 transition duration-300 cursor-pointer text-white">
//             <button className=" w-[80%] flex items-center justify-between">Explore Menu <FaArrowRight className="w-6 h-4 text-white" /></button>
//           </div>

//           <div className="w-[200px] h-[70px] brightness-75 hover:brightness-100 transition duration-300 cursor-pointer text-white bg-white backdrop-blur-md bg-white/10 flex items-center justify-center rounded-4xl mt-8">
//             <button>How It Works</button>
//           </div>
//         </div>

//         <div className="flex justify-evenly flex-row w-[400px] mt-6 -ml-5">
//           <div>
//             <span className="text-3xl font-serif text-[#F97316]">50k+</span>
//             <p className="text-[hsl(40,20%,95%)]">Happy Customers</p>
//           </div>

//           <div>
//             <span className="text-3xl font-serif text-[#F97316]">200+</span>
//             <p className="text-[hsl(40,20%,95%)]">Restaurants</p>
//           </div>

//           <div>
//             <span className="text-3xl font-serif text-[#F97316]">30+</span>
//             <p className="text-[hsl(40,20%,95%)]">Cities</p>
//           </div>
//         </div>

//       </section>

//     </div>

//   );
// };

// export default Home;


import bgImage from "../../assets/imgFive.jpg";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65 md:bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full mt-15 max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 md:mb-8 rounded-full bg-orange-500/20 border border-orange-400/40 backdrop-blur-md shadow-lg shadow-orange-500/20">
          <span className="text-base md:text-lg font-bold text-[#F97316]">🔥 Free delivery on your first order</span>
        </div>

        {/* Main heading + description */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Savor Every{" "}
            <span className="text-[#F97316]">Moment</span>
          </h1>

          <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
            Discover restaurant-quality meals delivered fresh to your door. From local favorites to global cuisines.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            className="
              group flex items-center justify-center gap-3 px-10 py-5 cursor-pointer
              bg-[#F97316] text-white font-semibold text-lg rounded-3xl 
              hover:bg-[#e55f00] transition-colors duration-300 shadow-md hover:shadow-lg
              min-w-[220px] md:min-w-[200px] md:min-h-[70px] rounded-4xl
            "
          >
            Explore Menu
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className="
              px-7 py-4 rounded-3xl font-semibold text-lg text-white 
              bg-white/15 backdrop-blur-md border border-white/20
              hover:bg-white/25 transition-all duration-300 cursor-pointer
              min-w-[220px] md:min-w-[200px] md:min-h-[70px] rounded-4xl
            "
          >
            How It Works
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-6 sm:gap-10 text-center">
          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F97316]">50k+</div>
            <p className="mt-1.5 text-sm sm:text-base text-gray-300">Happy Customers</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F97316]">200+</div>
            <p className="mt-1.5 text-sm sm:text-base text-gray-300">Restaurants</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F97316]">30+</div>
            <p className="mt-1.5 text-sm sm:text-base text-gray-300">Cities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;