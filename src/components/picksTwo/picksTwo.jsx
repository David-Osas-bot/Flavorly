// PicksTwo.jsx
import React from 'react'
import IMG1 from "../../assets/cakeFive.png";
import IMG2 from "../../assets/cakeSix.png";
import IMG3 from "../../assets/cakeSeven.png";
import IMG4 from "../../assets/cakeNine.png";
import IMG5 from "../../assets/cakeTen.png";
import IMG6 from "../../assets/cakeEleven.png";
import IMG7 from "../../assets/cakeTwelve.png";
import IMG8 from "../../assets/cakeThirteen.png";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const picksData = [
    {
        image: IMG1,
        badge: "Bestseller",
        badgeColor: "bg-orange-500",
        name: "Smash Burger",
        price: "$12.99",
        rating: "4.9",
        time: "25 min",
    },
    {
        image: IMG2,
        badge: "Healthy",
        badgeColor: "bg-green-500",
        name: "Salmon Poké Bowl",
        price: "$15.49",
        rating: "4.8",
        time: "15 min",
    },
    {
        image: IMG3,
        badge: "Classic",
        badgeColor: "bg-blue-500",
        name: "Margherita Pizza",
        price: "$14.99",
        rating: "4.7",
        time: "30 min",
    },
    {
        image: IMG4,
        badge: "Sweet",
        badgeColor: "bg-purple-500",
        name: "Chocolate Lava Cake",
        price: "$8.99",
        rating: "4.9",
        time: "20 min",
    },

    {
        image: IMG5,
        badge: "Healthy",
        badgeColor: "bg-green-500",
        name: "Naked Chocolate Cake",
        price: "NGN 50,000.00",
        rating: "4.8",
        time: "15 min",
    },
    {
        image: IMG6,
        badge: "Classic",
        badgeColor: "bg-blue-500",
        name: "Naked Chocolate Cake",
        price: "NGN 50,000.00",
        rating: "4.7",
        time: "30 min",
    },
    {
        image: IMG7,
        badge: "Sweet",
        badgeColor: "bg-purple-500",
        name: "White Ice Cream Cake",
        price: "$8.99",
        rating: "4.9",
        time: "20 min",
    },

    {
        image: IMG8,
        badge: "Sweet",
        badgeColor: "bg-purple-500",
        name: "Naked Chocolate Cake",
        price: "NGN 50,000.00",
        rating: "4.9",
        time: "20 min",
    },
];

const phoneNumber = "+2348081677861"; // Seller WhatsApp number

const handleWhatsAppClick = (item) => {
    const message = `Hello, I'm interested in this item:

    Item Name: ${item.name}
    
    Price: $${item.price}


    Please provide more details.`;

    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
};

const picksTwo = () => {
    return (
        <section className='className="w-full bg-[hsl(30,15%,95%)] py-16 md:py-20' id='pick2'>
            <div className="max-w-screen-3xl mx-auto px-5 sm:px-6 lg:px-10 xl:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 cursor-pointer" >
                    {picksData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col"
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-56 md:h-64 lg:h-72 object-cover"
                                />
                                <span
                                    className={`absolute top-4 left-4 px-3 py-1.5 text-xs md:text-sm font-semibold text-white rounded-full ${item.badgeColor}`}
                                >
                                    {item.badge}
                                </span>
                            </div>

                            <div className="p-5 md:p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-3 text-sm md:text-base">
                                    <FaStar className="text-[#F97316] text-lg md:text-xl" />
                                    <span className="font-semibold text-gray-800">{item.rating}</span>
                                    <LuDot className="text-gray-400 text-2xl -mx-1.5" />
                                    <span className="text-gray-600 font-medium">{item.time}</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-1.5 line-clamp-2">
                                    {item.name}
                                </h3>

                                <div className="flex flex-row justify-between items-center">
                                    <p className="mt-auto md:text-2xl font-bold text-[#F97316]">
                                        {item.price}
                                    </p>

                                    <button onClick={() => handleWhatsAppClick(item)} className="w-[100px] h-[40px] text-white font-semibold cursor-pointer hover:bg-white hover:text-green-400 transition duration-300 rounded-xl border border-gray-300 bg-green-400">
                                        Buy Now!
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default picksTwo