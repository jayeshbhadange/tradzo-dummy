import React from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionPlan from "./Subscription";


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
      <section className="h-screen bg-blue-600 text-white flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
        <h1 className="text-5xl font-bold mb-4">Welcome to Tradzo</h1>
        <p className="text-2xl mb-6">
          Your ultimate platform for trading suggestions and insights
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </button>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-full opacity-20 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-pulse"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-4xl font-semibold text-center mb-8">
          About Tradzo
        </h2>
        <p className="text-gray-700 text-center leading-relaxed max-w-4xl mx-auto text-lg">
          At Tradzo, we empower traders with the knowledge and tools to make
          informed trading decisions. Whether you're just starting your trading
          journey or you're a seasoned trader, our platform offers tailored
          suggestions based on real-time data and advanced analytics. With a
          community of thousands of traders and experts, Tradzo is not just a
          platform—it's a movement towards smarter, more successful trading.
        </p>
      </section>

      {/* Live Active Users Section */}
      <section className="py-20 bg-blue-50 text-center">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
            <h3 className="text-4xl font-bold text-blue-600">5,432</h3>
            <p className="text-gray-600">Live Active Users</p>
          </div>
          <div className="mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-4xl font-bold text-blue-600">1,275</h3>
            <p className="text-gray-600">Daily Trading Signals Sent</p>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-4xl font-bold text-blue-600">3,942</h3>
            <p className="text-gray-600">Portfolios Managed</p>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-white p-8 rounded-lg shadow-xl transform transition-transform duration-300">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Daily Trading Signals</h3>
            <p className="text-gray-600">
              Receive daily trading signals tailored to your preferences. Our
              AI-driven algorithms analyze the market to provide you with the
              best buy/sell opportunities.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Market News & Analysis</h3>
            <p className="text-gray-600">
              Stay informed with the latest market news and in-depth analysis.
              Our experts break down complex market movements into actionable
              insights.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Portfolio Management</h3>
            <p className="text-gray-600">
              Manage your portfolio with ease. Our tools help you track your
              investments, set goals, and optimize your portfolio for maximum
              returns.
            </p>
          </div>
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
      
      {/* Subscription Plans Section */}
      <section
        id="subscription"
        className="py-16 bg-blue-50 p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-4xl font-semibold text-center mb-8">
          Choose Your Plan
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
                "Tradzo has completely transformed my trading game. The signals
                are spot on, and the analysis is top-notch."
              </p>
              <p className="text-gray-900 font-semibold">- Sarah L.</p>
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
                "I love how easy it is to manage my portfolio with Tradzo.
                Highly recommended!"
              </p>
              <p className="text-gray-900 font-semibold">- John D.</p>
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
                "The daily signals have really helped me make profitable trades.
                A must-have for any trader."
              </p>
              <p className="text-gray-900 font-semibold">- Michael B.</p>
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