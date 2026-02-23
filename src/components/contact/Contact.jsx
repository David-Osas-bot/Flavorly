import { CiMobile2 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='w-full h-[800px] bg-[hsl(30,20%,97%)] p-6' id="contact">
      <div className="w-[98%] h-[700px] mt-15 bg-[#F97316] m-auto rounded-4xl pt-20">
        <div className="w-[80px] h-[80px] rounded-lg m-auto flex flex-row justify-center items-center mt-10 bg-orange-300">
          <CiMobile2 className="text-[35px] text-white" />
        </div>

        <span className="flex justify-center mt-8 text-6xl font-serif font-bold text-white">Ready to Feast?</span>
        <p className="text-gray-200 flex flex-row justify-center items-center mt-5 text-[25px]">Download the app and get your first delivery free.</p>
        <p className="text-gray-200 flex flex-row justify-center items-center mt-2 text-[25px]">Join 50,000+ happy food lovers today.</p>

        <div className="flex flex-row justify-evenly items-center w-[500px] h-[100px] m-auto">
          <div className="w-[200px] h-[70px] bg-white flex items-center justify-center rounded-4xl mt-8 brightness-100 hover:brightness-75 transition duration-300 cursor-pointer text-white">
            <button className=" w-[80%] flex items-center justify-between text-[#F97316] text-[20px] font-bold">Get the App<FaArrowRight className="w-6 h-4 text-[#F97316] font-bold" /></button>
          </div>

          <div className="w-[200px] h-[70px] brightness-80 hover:brightness-100 transition duration-300 cursor-pointer text-white bg-white backdrop-blur-md bg-white/10 flex items-center justify-center rounded-4xl mt-8">
            <button className="text-white text-[20px] font-bold">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;