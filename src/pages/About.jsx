import React from "react";
import founder1 from "../assets/icons/founder11.jpeg";
import founder2 from "../assets/icons/founder22.jpeg";
import { FaXTwitter } from "react-icons/fa6";

// bs1 color karna hai instead of orange

const About = () => {
  return (
    <section className="py-12 sm:py-12 md:py-16 text-gunmetal bg-white">
      <div className="container px-4 sm:px-6 md:px-10 lg:px-40 mx-auto">
        {/* Header Section */}
        <h1 className="tracking-wide leading-1 text-2xl sm:text-4xl lg:text-5xl font-semibold text-center text-bs mb-2 sm:mb-8 md:mb-12">
          Building India's Most Transparent Trading and Investment Advisory
          Platform
        </h1>

        {/* Vision Section */}
        {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-white shadow-lg rounded-lg overflow-hidden p-8 mb-16">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Youtube Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-600">Harsh</p>
            <p className="text-xs sm:text-sm text-gray-500">Co-Founder</p>
          </div>
          <div className="relative w-full lg:w-2/3 aspect-w-16 aspect-h-9">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}

        {/* Founders Section */}
        <section className="py-3 sm:py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            {/* <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Meet the Founders
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Who made it all possible
              </p>
            </div> */}

            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 text-gunmetal px-2 sm:px-6">
              {/* Founder Cards */}
              {[
                {
                  name: "Harsh Patel",
                  role: "Founder",
                  img: founder1,
                  link: "https://x.com/hiharsh07",
                  description:
                    "With over a decade immersed in financial markets and equities research, Harsh is the dynamic force propelling Tradzo forward. His visionary leadership and deep industry expertise are instrumental in shaping Tradzo's path-breaking journey in the finance sector.",
                },
                {
                  name: "Shweta Patel",
                  role: "Co-Founder",
                  img: founder2,
                  link: "https://x.com/shopaholicpals",
                  description:
                    "Shweta is at the helm of Tradzo, transforming its vision into a renowned brand. Holding a PGDM in Banking & Finance from NIBM Pune, she combines her financial acumen with expert skills in digital marketing and branding to lead Tradzo towards innovation and market leadership.",
                },
              ].map((founder, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Image Section */}
                  <div className="w-auto h-15 sm:h-30 md:h-60 rounded-full overflow-hidden mb-6">
                    <img
                      src={founder.img}
                      alt={founder.name}
                      className="w-auto h-15 sm:h-30 md:h-60 "
                    />
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-gray-600 mb-4">
                    {founder.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-center text-gray-700 leading-relaxed mb-6 max-w-md">
                    {founder.description}
                  </p>

                  {/* Link */}
                  <a
                    href={founder.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex py-2 px-4 rounded-lg items-center border border-bs3 text-bs3 hover:text-white hover:bg-bs3 font-medium"
                  >
                    Connect on{" "}
                    <span className="pl-2 text-lg">
                      <FaXTwitter />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
