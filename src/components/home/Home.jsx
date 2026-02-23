import bgImage from "../../assets/imgFive.jpg";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat pt-[10%]" style={{ backgroundImage: `url(${bgImage})` }}>

      <div className="absolute inset-0 bg-black/70"></div>

      <section className="ml-10 w-[630px] h-[650px] p-6 relative z-10">
        <div className="w-[350px] h-[40px] text-[#F97316] rounded-[30px] flex justify-center items-center bg-orange-500/20 
            border border-orange-400/30 
            backdrop-blur-md 
            shadow-lg shadow-orange-500/20">
          <span className="font-bold text-lg">🔥 Free delivery on your first order</span>
        </div>

        <div>
          <span className="text-[80px] text-white font-medium font-serif">Savor Every <span className="text-[#F97316]">Moment</span></span>
          <p className="text-[#261E17] text-[25px] text-[hsl(40,20%,95%)]">Discover restaurant-quality meals delivered fresh to your door. From local favorites to global cuisines.</p>
        </div>

        <div className="flex justify-between flex-row w-[420px] text-lg font-medium">
          <div className="w-[200px] h-[70px] bg-[#F97316] flex items-center justify-center rounded-4xl mt-8 brightness-100 hover:brightness-75 transition duration-300 cursor-pointer text-white">
            <button className=" w-[80%] flex items-center justify-between">Explore Menu <FaArrowRight className="w-6 h-4 text-white" /></button>
          </div>

          <div className="w-[200px] h-[70px] brightness-75 hover:brightness-100 transition duration-300 cursor-pointer text-white bg-white backdrop-blur-md bg-white/10 flex items-center justify-center rounded-4xl mt-8">
            <button>How It Works</button>
          </div>
        </div>

        <div className="flex justify-evenly flex-row w-[400px] mt-6 -ml-5">
          <div>
            <span className="text-3xl font-serif text-[#F97316]">50k+</span>
            <p className="text-[hsl(40,20%,95%)]">Happy Customers</p>
          </div>

          <div>
            <span className="text-3xl font-serif text-[#F97316]">200+</span>
            <p className="text-[hsl(40,20%,95%)]">Restaurants</p>
          </div>

          <div>
            <span className="text-3xl font-serif text-[#F97316]">30+</span>
            <p className="text-[hsl(40,20%,95%)]">Cities</p>
          </div>
        </div>

      </section>

    </div>

  );
};

export default Home;