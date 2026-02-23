import { GiForkKnifeSpoon, GiCoffeeCup } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { LuPizza, LuCake, LuSoup } from "react-icons/lu";

const data = [
  {
    Icon: GiForkKnifeSpoon,
    description: "Fine dining",
    place: "45 places"
  },

  {
    Icon: FaBowlFood,
    description: "Healthy",
    place: "62 places"
  },

  {
    Icon: LuPizza,
    description: "Fast food",
    place: "89 places"
  },

  {
    Icon: LuCake,
    description: "Desserts",
    place: "37 places"
  },

  {
    Icon: GiCoffeeCup,
    description: "Cafe",
    place: "54 places"
  },

  {
    Icon: LuSoup,
    description: "Asian",
    place: "41 places"
  }
]

const Menu = () => {
  return (
    <div className='w-full h-[600px] bg-[hsl(30,20%,97%)] p-6' id="menu">
      <span className="text-xl font-medium flex justify-center mt-[100px] text-[#F97316]">CATEGORIES</span>
      <span className="flex justify-center mt-6 text-6xl font-serif font-bold">Browse by Cuisine</span>

      <div className="w-[100%] flex justify-evenly items-center mt-10">
        {
          data.map(({ Icon, description, place }) => {
            return (
              <div className="w-[250px] h-[200px] rounded-3xl bg-[hsl(30,15%,95%)] border border-gray-200 p-2">
                <div className="w-[70px] h-[70px] m-auto mt-7 rounded-lg bg-[hsl(32,53%,73%)] flex flex-row justify-center items-center">
                  <Icon className="text-orange-400 text-4xl"/>
                </div>

                <span className="flex flex-row justify-center items-center font-semibold mt-3 text-lg">{description}</span>

                <p className="flex flex-row justify-center items-center text-md text-gray-400">{place}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Menu;