import { div } from "framer-motion/client";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";


const data = [
  {
    testimony: "The quality is unmatched! Every meal arrives hot, fresh, and exactly as pictured. Flavorly has completely changed how I eat.",
    Icon: FaStar,
    name: "Sarah M.",
    role: "Food Enthusiast",
    logo: "S"
  },

  {
    testimony: "Lightning-fast delivery and the restaurant selection is incredible. I've discovered so many amazing local spots through this app.",
    Icon: FaStar,
    name: "James L.",
    role: "Busy Professional",
    logo: "J"
  },

  {
    testimony: "Love the healthy options available! The nutritional info on every meal makes it so easy to stay on track with my goals.",
    Icon: FaStar,
    name: "Emily R.",
    role: "Health Coach",
    logo: "E"
  }
]

const About = () => {
  return (
    <div className='w-full h-[900px] bg-[hsl(30,15%,95%)] p-6' id="about">
      <span className="text-xl font-medium flex justify-center mt-[100px] text-[#F97316]">TESTIMONIALS</span>
      <span className="flex justify-center mt-6 text-6xl font-serif font-bold">Loved by Foodies</span>

      <main className="w-[80%] m-auto flex flex-row mt-20 justify-evenly">
        {
          data.map(({ testimony, Icon, name, role, logo }) => {
            return (
              <div className="w-[400px] h-[350px] bg-[hsl(30,20%,97%)] border border-red-200 rounded-3xl">
                <div className="w-[80%] m-auto h-[300px] mt-10 ">
                  <RiDoubleQuotesR className="text-[35px] text-orange-300" />
                  <br />
                  <span className="text-gray-500">"{testimony}"</span>

                  <div className="flex flex-row mt-10 w-[120px]">
                    <Icon className="text-orange-400 text-[15px] mr-2" />
                    <Icon className="text-orange-400 text-[15px] mr-2" />
                    <Icon className="text-orange-400 text-[15px] mr-2" />
                    <Icon className="text-orange-400 text-[15px] mr-2" />
                    <Icon className="text-orange-400 text-[15px] mr-2" />
                  </div>

                  <div className="w-[200px] h-[80px] flex flex-row">
                    <div className="w-[50px] h-[50px] mt-5 bg-orange-100 rounded-[50%]">
                      <span className="flex items-center flex-row justify-center pt-2 font-serif text-[20px] text-orange-500">{logo}</span>
                    </div>

                    <div className="grid grid-cols-1">
                      <span className="text-black-300 font-semibold mt-5 ml-[10px]">{name}</span>
                      <p className="text-gray-500 -mt-4 ml-[10px] text-[15px]">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </main>
    </div>
  );
};

export default About;