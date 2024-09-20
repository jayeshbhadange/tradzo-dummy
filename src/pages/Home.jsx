import React from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionPlan from "./Subscription";
import logo from '../assets/logos-01.svg';
import logo3 from '../assets/logo3.jpeg';
// YouTube video component
const YouTubeVideo = ({ videoId }) => (
  <iframe
    className="w-full h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const Home = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    const isLogged = JSON.parse(localStorage.getItem('isLogged'));
    if(isLogged) {
      navigate("/user/dashboard");
    }
    else{
      navigate("/login");
    }
    
  };

  return (
    <div className="bg-gray-100 min-h-screen scroll-smooth">
      {/* Landing Section */}
        <section
  className="h-screen  text-white flex flex-col justify-center items-center text-center p-8 relative overflow-hidden"
  style={{ backgroundImage: `url(${logo3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>

            {/* <img
              src={logo}
              className="mr-3 ml-0 pl-0 w-48 h-24 justify-self-start object-cover"
              alt="Logo"
            /> */}
        {/* <button
          onClick={handleGetStarted}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </button> */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full opacity-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-pulse"></div>
        </div>
      </section>



      {/* YouTube Video Section */}
      <section className="py-16 bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Trading Tips & Strategies
        </h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-6">
            <YouTubeVideo videoId="BHuFfWPk3iY" />
            <YouTubeVideo videoId="Xxs6jkjpFlk" />
            <YouTubeVideo videoId="q12WapUwAQ8" />
          </div>
        </div>
      </section>
      
      {/* Featured Services Section */}
      <section className="py-16 bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-300">
        <h2 className="text-4xl font-semibold text-center mb-8">
        Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Automated Trade Notificationss</h3>
            <p className="text-gray-600">
            Seamlessly navigate your trades with our automated notifications, guiding you through every step from entry to exit.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Daily Market Insights</h3>
            <p className="text-gray-600">
            Stay ahead of the curve with our unbiased market updates. Dive into real trends through our in-depth analysis and leverage our 'Trendo Meter' for a comprehensive market perspective.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Derivatives Expertise</h3>
            <p className="text-gray-600">
            Unlock the power of derivatives analysis with simplified Open Interest (OI) and Put-Call Ratio (PCR) data analytics, enhancing your understanding of market dynamics.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Live Strategy Performance</h3>
            <p className="text-gray-600">
            Gain exclusive access to our Live Performance Reports, providing a detailed overview of how our strategies are performing in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section
        id="subscription"
        className="py-16 bg-blue-50 p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-4xl font-semibold text-center mb-8">
          Subcription Plan
        </h2>
        <SubscriptionPlan />
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-semibold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
            <img
              src="https://via.placeholder.com/64"
              alt="User"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-700 mb-2">
                "Amazing calls in Nifty"
              </p>
              <p className="text-gray-900 font-semibold">- Tushar Arahant.</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
            <img
              src="https://via.placeholder.com/64"
              alt="User"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-700 mb-2">
                "Market Impulse is very helpful."
              </p>
              <p className="text-gray-900 font-semibold">- Prashant Vaghela.</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105">
            <img
              src="https://via.placeholder.com/64"
              alt="User"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-700 mb-2">
                "Good trades, & they don't give unnecessary trades."
              </p>
              <p className="text-gray-900 font-semibold">- Hardik Roy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
          Start Your Trading Journey with Tradzo
        </h2>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Sign up today and get access to exclusive trading strategies, tips,
          and tools.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default Home;