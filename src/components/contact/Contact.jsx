// Contact.jsx
import { CiMobile2 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="w-full bg-[hsl(30,20%,97%)] py-16 md:py-20 lg:py-24 px-5 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F97316] rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl">
          <div className="px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16 lg:py-20">
            {/* Icon */}
            <div className="flex justify-center mb-8 md:mb-10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-orange-300/90 flex items-center justify-center shadow-lg">
                <CiMobile2 className="text-4xl sm:text-5xl text-white" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white text-center mb-5 md:mb-6">
              Ready to Feast?
            </h2>

            {/* Subtext */}
            <div className="text-center mb-10 md:mb-12">
              <p className="text-gray-100 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Download the app and get your first delivery free.
              </p>
              <p className="text-gray-100 text-lg sm:text-xl md:text-2xl mt-2">
                Join 50,000+ happy food lovers today.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-8">
              {/* Primary Button - Get the App */}
              <button
                className="
                  group flex items-center justify-center gap-3 px-8 py-4 
                  bg-white text-[#F97316] font-bold text-lg md:text-xl rounded-3xl 
                  hover:brightness-95 active:brightness-90 transition-all duration-300
                  shadow-md hover:shadow-lg min-w-[240px] sm:min-w-[260px]
                "
              >
                Get the App
                <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button - Learn more */}
              <button
                className="
                  px-8 py-4 rounded-3xl font-bold text-lg md:text-xl text-white 
                  bg-white/15 backdrop-blur-md border border-white/30
                  hover:bg-white/25 active:bg-white/30 transition-all duration-300
                  min-w-[240px] sm:min-w-[260px]
                "
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;