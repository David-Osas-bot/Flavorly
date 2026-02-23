// About.jsx
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    testimony:
      "The quality is unmatched! Every meal arrives hot, fresh, and exactly as pictured. Flavorly has completely changed how I eat.",
    name: "Sarah M.",
    role: "Food Enthusiast",
    logo: "S",
  },
  {
    testimony:
      "Lightning-fast delivery and the restaurant selection is incredible. I've discovered so many amazing local spots through this app.",
    name: "James L.",
    role: "Busy Professional",
    logo: "J",
  },
  {
    testimony:
      "Love the healthy options available! The nutritional info on every meal makes it so easy to stay on track with my goals.",
    name: "Emily R.",
    role: "Health Coach",
    logo: "E",
  },
];

const About = () => {
  return (
    <section
      className="w-full bg-[hsl(30,15%,95%)] py-16 md:py-20 px-5 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg sm:text-xl font-medium text-[#F97316] uppercase tracking-wide">
            TESTIMONIALS
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900">
            Loved by Foodies
          </h2>
        </div>

        {/* Responsive Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map(({ testimony, name, role, logo }, index) => (
            <div
              key={index}
              className="
                bg-[hsl(30,20%,97%)] rounded-3xl border border-orange-200/60 
                p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300
                flex flex-col
              "
            >
              <RiDoubleQuotesR className="text-4xl md:text-5xl text-orange-300/80 mb-4 md:mb-6" />

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 flex-grow">
                "{testimony}"
              </p>

              {/* Rating stars */}
              <div className="flex mb-5 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-orange-400 text-lg md:text-xl"
                  />
                ))}
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-xl md:text-2xl text-orange-500 font-bold">
                    {logo}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                    {name}
                  </h4>
                  <p className="text-gray-500 text-sm md:text-base">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;