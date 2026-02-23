import { GiForkKnifeSpoon, GiCoffeeCup } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { LuPizza, LuCake, LuSoup } from "react-icons/lu";

const categories = [
  { Icon: GiForkKnifeSpoon, description: "Fine dining", places: "45 places" },
  { Icon: FaBowlFood,      description: "Healthy",     places: "62 places" },
  { Icon: LuPizza,         description: "Fast food",   places: "89 places" },
  { Icon: LuCake,          description: "Desserts",    places: "37 places" },
  { Icon: GiCoffeeCup,     description: "Cafe",        places: "54 places" },
  { Icon: LuSoup,          description: "Asian",       places: "41 places" },
];

const Menu = () => {
  return (
    <section className="w-full bg-[hsl(30,20%,97%)] py-16 md:py-20 px-5 sm:px-6 lg:px-8" id="menu">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-lg sm:text-xl font-medium text-[#F97316] uppercase tracking-wide">
            CATEGORIES
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900">
            Browse by Cuisine
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
          {categories.map(({ Icon, description, places }, index) => (
            <div
              key={index}
              className="
                group bg-[hsl(30,15%,95%)] rounded-3xl border border-gray-200 
                p-6 md:p-8 flex flex-col items-center text-center
                hover:shadow-lg hover:border-orange-300/50 transition-all duration-300
              "
            >
              <div className="
                w-16 h-16 sm:w-20 sm:h-20 
                rounded-2xl bg-[hsl(32,53%,73%)]/80 
                flex items-center justify-center mb-5 md:mb-6
                group-hover:scale-105 transition-transform duration-300
              ">
                <Icon className="text-[#F97316] text-3xl sm:text-4xl" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                {description}
              </h3>

              <p className="text-sm sm:text-base text-gray-500 font-medium">
                {places}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;