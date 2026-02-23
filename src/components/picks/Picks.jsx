import IMG1 from "../../assets/imgFour.jpg";
import IMG2 from "../../assets/imgOne.jpg";
import IMG3 from "../../assets/imgThree.jpg";
import IMG4 from "../../assets/imgTwo.jpg";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";


const data = [
  {
    Image: IMG4,
    name: "Smash Burger",
    price: "$12.99",
    rate: "4.9",
    time: "25 min",
    Icon: FaStar,
    Icon2: LuDot
  },

  {
    Image: IMG2,
    name: "Salmon Poké Bowl",
    price: "$15.49",
    rate: "4.8",
    time: "15 min",
    Icon: FaStar,
    Icon2: LuDot
  },

  {
    Image: IMG3,
    name: "Margherita Pizza",
    price: "$14.99",
    rate: "4.7",
    time: "30 min",
    Icon: FaStar,
    Icon2: LuDot
  },

  {
    Image: IMG1,
    name: "Chocolate Lava Cake",
    price: "$8.99",
    rate: "4.9",
    time: "20 min",
    Icon: FaStar,
    Icon2: LuDot
  },

]

const Picks = () => {
  return (
    <div className='w-full h-[850px] bg-[hsl(30,15%,95%)] p-8 flex flex-col'>
      <span className="text-xl ml-[20px] font-medium mt-[100px] text-[#F97316]">TOP PICKS</span>
      <span className="mt-6 text-6xl font-serif font-bold ml-[20px]">Popular Right Now</span>

      <main className="flex flex-row justify-evenly mt-20">
        {
          data.map(({Image, name, price, rate, time, Icon, Icon2}) => { 
            return (
              <div className="w-[370px] h-[400px] rounded-xl bg-white border-gray-300">
                <div>
                  <img src={Image} alt={Image} className="h-[250px] object-cover w-full rounded-tl-xl rounded-tr-xl" />
                </div>

                <div className="m-4 w-[80%] m-auto mt-5 flex flex-row">
                  <Icon className="text-xl text-orange-400 mr-[10px]"></Icon>
                  <span className="font-semibold font-display">{rate}</span>
                   <Icon2 className="text-gray-500 mt-1 ml-2 font-bold"></Icon2>
                   <span className="text-gray-400 font-semibold ml-[15px] text-[15px]">{time}</span>
                </div>

                <div className="ml-10">
                  <span className="text-[25px] font-serif font-semibold">{name}</span>
                </div>

                <div className="ml-10">
                  <span className="text-[25px] text-orange-400 font-bold">{price}</span>
                </div>
              </div>
            )
          })
        }
      </main>
    </div>
  );
};

export default Picks;