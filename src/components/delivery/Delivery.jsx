import { FaSearch, FaShuttleVan } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import React from 'react';

const Delivery = () => {
  return (
    <div className="w-full min-h-[700px] bg-[hsl(30,20%,97%)] px-5 py-12 md:py-20" id="delivery">
      <div className="text-center">
        <p className="text-xl font-medium text-[#F97316]">SIMPLE PROCESS</p>
        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900">
          How It Works
        </h2>
      </div>

      {/* Steps container */}
      <div className="mt-12 md:mt-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-6 lg:gap-12 relative max-w-6xl mx-auto px-4">

          {/* Fake connecting line – only visible on md+ */}
          <div className="hidden md:block absolute top-[40px] left-[15%] lg:left-[18%] right-[15%] lg:right-[18%] h-px border-t border-dashed border-gray-400 pointer-events-none" />

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-orange-200 flex items-center justify-center text-4xl md:text-5xl shadow-md">
              <FaSearch className="text-[#F97316]"/>
            </div>
            <h3 className="mt-6 text-xl md:text-2xl font-bold text-gray-900 font-serif">
              Browse & Choose
            </h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
              Explore hundreds of restaurants and dishes near you. Filter by cuisine, rating, or delivery time.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-orange-200 flex items-center justify-center text-4xl md:text-5xl shadow-md">
              <LuChefHat className="text-[#F97316]"/>
            </div>
            <h3 className="mt-6 text-xl md:text-2xl font-bold text-gray-900 font-serif">
              Freshly Prepared
            </h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
              Your order is prepared with care by expert chefs using the freshest ingredients available.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-xs">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-orange-200 flex items-center justify-center text-4xl md:text-5xl shadow-md">
              <FaShuttleVan className="text-[#F97316]"/>
            </div>
            <h3 className="mt-6 text-xl md:text-2xl font-bold text-gray-900 font-serif">
              Fast Delivery
            </h3>
            <p className="mt-3 text-gray-600 text-base leading-relaxed">
              Track your order in real-time as it makes its way to your door, hot and fresh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;