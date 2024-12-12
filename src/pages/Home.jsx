import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Testimonial from "./Testimonial";
import SubscriptionPlan from "./Subscription";
import invest from "../assets/icons/invest.svg";
import revenue from "../assets/icons/revenue.svg";
import growth from "../assets/icons/growth.svg";
import bearing from "../assets/icons/bearm.svg";
import demo from "../assets/icons/demo.svg";
import finance from "../assets/icons/finance.svg";
import marketimpulse from "../assets/icons/market impulse.jpeg";
import homelogin1 from "../assets/icons/homelogin1.svg";
import homelogin2 from "../assets/icons/homelogin2.svg";
import homelogin3 from "../assets/icons/homelogin3.svg";
import homelogin4 from "../assets/icons/homelogin4.svg";
import homelogin5 from "../assets/icons/homelogin5.svg";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const Home = () => {
  const navigate = useNavigate();
  const images = [
    // side2,
    // homelogin,

    homelogin1,
    homelogin2,
    homelogin3,
    homelogin4,
    homelogin5,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Automatically change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5000ms (5 seconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Function to handle manual image selection
  const handleImageSelect = (index) => {
    setCurrentImageIndex(index);
  };

  const news = [
    {
      title: "NCLAT upholds insolvency order against Jaiprakash Associate",
      link: "https://www.livemint.com/companies/news/nclat-upholds-insolvency-order-against-jaiprakash-associate-11733486851729.html",
      time: "07:02 PM",
    },
    {
      title:
        "Microfinance stress not alarming, says RBI deputy governor Swaminathan",
      link: "https://www.livemint.com/industry/banking/microfinance-stress-rbi-deputy-governor-swaminathan-11733482514327.html",
      time: "06:59 PM",
    },
    {
      title:
        "December quarter will make up for poll-induced slowdown: Nirmala Sitharaman",
      link: "https://www.livemint.com/economy/december-quarter-will-make-up-for-poll-induced-growth-slowdown-nirmala-sitharaman-11733488622456.html",
      time: "06:50 PM",
    },
    {
      title:
        "India's forex reserves come off 5-month lows to hit $658 billion: RBI",
      link: "https://www.livemint.com/economy/indias-forex-reserves-come-off-5-month-lows-to-hit-658-billion-halt-8-week-losing-streak-after-losing-48-billion-11733488821184.html",
      time: "06:12 PM",
    },
    {
      title: "Vishal Mega Mart IPO: Here are 10 key things to know from RHP",
      link: "https://www.livemint.com/market/ipo/vishal-mega-mart-ipo-from-financials-to-key-dates-here-are-10-things-to-know-from-rhp-11733489062053.html",
      time: "06:18 PM",
    },
    {
      title:
        "RBI MPC Meeting: What happens if the central bank cuts interest rates",
      link: "https://www.livemint.com/economy/rbi-mpc-meeting-what-will-happen-if-the-central-bank-cuts-interest-rates-tomorrow-experts-weigh-in-11733415020715.html",
      time: "09:42 PM",
    },
    {
      title: "RBI signals cautious optimism on growth-inflation balance",
      link: "https://www.livemint.com/economy/rbi-holds-repo-rate-at-6-50-cuts-crr-to-boost-liquidity-11733491106707.html",
      time: "08:32 PM",
    },
    {
      title: "Wall Street today: US stocks edge higher after strong jobs data",
      link: "https://www.livemint.com/market/stock-market-news/wall-street-today-us-stocks-edge-higher-after-strong-jobs-data-11733495867482.html",
      time: "09:23 PM",
    },
  ];

  const articles = [
    {
      title: "Market Impulse",
      description:
        "A brief overview of how market impulses work and how to use them effectively.The importance of technical analysis in stock trading. The importance of technical analysis in stock trading.The importance of technical analysis in stock trading.",
      date: "November 20, 2024",
    },
    {
      title: "Market Impulse",
      description:
        "The objective of this article is to give a comprehensive overview of useful fintech SaaS products, Apps, websites, guides, and blogs for aspiring quant traders.The importance of technical analysis in stock trading. The importance of technical analysis in stock trading. The importance of technical analysis in stock trading.",
      date: "November 15, 2024",
    },
    {
      title: "Market Impulse",
      description:
        "Explore the best strategies for trading in 2024. The importance of technical analysis in stock trading. The importance of technical analysis in stock trading. Explore the best strategies for trading in 2024. The importance of technical analysis in stock trading. The importance of technical analysis in stock trading.",
      date: "November 10, 2024",
    },
    {
      title: "Weekly Update",
      description:
        "The importance of technical analysis in stock trading. The importance of technical analysis in stock trading. The importance of technical analysis in stock trading. Explore the best strategies for trading in 2024. The importance of technical analysis in stock trading. The importance of technical analysis in stock trading.",
      date: "November 5, 2024",
    },
  ];

  const texts = [
    "More than Trading",
    "Let's make Trading simple",
    "Stay Ahead with Expert Analysis",
    "Catch the Market Impulse",
    "Live Strategy Performance",

    // "Create Possiblities",
    // "Discover Market Trends",
    // "Uncover Market Trends Easily",
    // "Transparency meets Technology",
  ];

  const handleMenuToggle = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleGetStarted = () => {
    const isLogged = JSON.parse(localStorage.getItem("isLogged"));
    if (isLogged) {
      navigate("/user/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white text-gunmetal">
      <div className="py-1 sm:py-3"></div>
      <div className="flex flex-col lg:flex-row items-center bg-pb7 rounded-xl 3xl:max-w-8xl mx-5 xl:mx-20 2xl:mx-32 px-2 sm:px-6 lg:px-16 py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Left Content */}
        <div className="lg:w-1/2 mx-4 2xl:mx-16 text-center lg:text-left space-y-4 sm:space-y-6">
          <div className="h-8 lg:h-20">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {texts[currentImageIndex]}
            </h1>
          </div>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
            Get one month subscription{" "}
            <span className="font-bold text-bs3">FREE*</span>
          </p>
          {/* Input Section */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center bg-white border border-gunmetal hover:border-bs3 shadow-sm py-2 px-4 rounded-lg w-full sm:w-64 md:w-72 lg:w-80 focus-within:ring-2 focus-within:ring-bs3 focus:outline-none">
              <span className="font-semibold">+91</span>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="flex-grow bg-white ml-3 outline-none text-sm sm:text-base"
              />
            </div>
            <button className="md:order-1 order-2 bg-bs3 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full z-1 sm:z-2 sm:w-auto">
              <Link to="/">Sign up</Link>
            </button>
          </div>
          {/* Disclaimer */}
          <p className="md:order-2 order-1 text-xs mt-3 text-gray-600">
            By signing up, you agree to receive investment & transaction updates
            on WhatsApp.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex flex-col items-center">
          <img
            src={images[currentImageIndex]} // Show current image
            alt={`Hero Image ${currentImageIndex + 1}`}
            className="w-full max-h-64 rsm:w-4/5 md:w-3/4 lg:w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain transition-opacity duration-700 ease-in-out"
          />
          {/* Image Selector Buttons */}
          <div className="mt-8 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageSelect(index)} // Call function with index
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? "bg-bs scale-125"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* <hr className="border-gunmetal border-1 my-6" /> */}

      {/* Trading Strategies Section */}
      <section className="py-4 md:py-8 lg:py-12">
        <div className="container mx-auto px-6 xl:px-32">
          <h2 className="text-3xl font-semibold text-center mb-6 lg:mb-12">
            Trading Strategies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: invest,
                title: "Index Trades",
                description:
                  "Straightforward bets on Nifty or BankNifty Futures using Macro-Technical Analysis.",
                details: [
                  { label: "Time Horizon", value: "1-5 Days" },
                  { label: "Expected Return", value: "1%-3%" },
                  { label: "Avg Stop Loss", value: "1%" },
                  { label: "Avg R:R Ratio", value: "1:2" },
                ],
              },
              {
                image: finance,
                title: "Trading Calls",
                description:
                  "Long/Short Trades on Stocks using Technical Analysis & Pattern Recognition.",
                details: [
                  { label: "Time Horizon", value: "2 Weeks" },
                  { label: "Expected Return", value: "3%-8%" },
                  { label: "Avg Stop Loss", value: "2%-3%" },
                  { label: "Avg R:R Ratio", value: "1:2" },
                ],
              },
              {
                image: growth,
                title: "Positional Trades",
                description:
                  "Medium-term trades with higher returns and better risk-to-reward ratio.",
                details: [
                  { label: "Time Horizon", value: "3-5 Months" },
                  { label: "Expected Return", value: "15%-35%" },
                  { label: "Avg Stop Loss", value: "5%-10%" },
                  { label: "Avg R:R Ratio", value: "1:3" },
                ],
              },
              {
                image: bearing,
                title: "Option Makers",
                description:
                  "High-risk strategy using Technical Analysis to trade opportunities in Index Options.",
                details: [
                  { label: "Time Horizon", value: "1-3 Days" },
                  { label: "Expected Return", value: "75%-150%" },
                  { label: "Avg Stop Loss", value: "50%" },
                  { label: "Avg R:R Ratio", value: "1:3" },
                ],
              },
            ].map((strategy, index) => (
              <div
                key={index}
                className="group relative h-72 w-full [perspective:1000px] mx-auto"
              >
                {/* Card Wrapper */}
                <div className="relative h-full w-full transform transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center [backface-visibility:hidden]">
                    <img
                      src={strategy.image}
                      alt={strategy.title}
                      className="h-16 w-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-center mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-sm text-center">
                      {strategy.description}
                    </p>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-pb7 text-gunmetal rounded-lg shadow-md p-6 flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="text-2xl text-bs3 font-bold mb-4">
                      {strategy.title}
                    </h3>
                    <ul className="text-sm space-y-2 text-center">
                      {strategy.details.map((detail, idx) => (
                        <li key={idx}>
                          <strong>{detail.label}:</strong> {detail.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <SubscriptionPlan />

      <p className="text-center mx-auto px-6 xl:px-32 text-md sm:text-md md:text-lg italic text-night pb-6">
        "We are awaiting SEBI approval to launch our subscription services,
        current pricing plans are for representation only."
      </p>

      {/* Articles Section */}
      <div className="container mx-auto px-6 xl:px-32 py-4 md:py-8 lg:py-12">
        <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mb-6 lg:mb-12">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Article Header */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {article.title}
                  </h3>
                  {/* Three-Dot Menu Icon */}
                  <div className="relative">
                    <button
                      className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                      onClick={() =>
                        setActiveCard(activeCard === index ? null : index)
                      }
                    >
                      <BsThreeDotsVertical className="w-5 h-5 text-gray-700" />
                    </button>
                    {/* Dropdown Menu */}
                    {activeCard === index && (
                      <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-50">
                        <ul>
                          <li>
                            <a
                              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                article.title
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 hover:text-white hover:bg-black"
                            >
                              <FaXTwitter className="w-5 h-5" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                                article.title
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 hover:bg-green-100"
                            >
                              <FaWhatsapp className="w-5 h-5 text-green-500" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                window.location.href
                              )}&title=${encodeURIComponent(article.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 hover:bg-blue-50"
                            >
                              <FaLinkedin className="w-5 h-5 text-blue-700" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                {/* Article Content */}
                <p className="text-left text-xs text-gray-500 mt-2">
                  {/* {article.date} */}
                </p>
                <hr className="my-3 border-bs3" />
                {/* <p className="opacity-20 animate-pulse text-sm text-justify line-clamp-5 mt-2 sm:mt-4">
                  {article.description}
                </p> */}
                <div className="animate-pulse opacity-20 text-center gap-3 text-md">
                  <p>coming soon</p>
                  <p>coming soon</p>
                  <p>coming soon</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      {/* <div className="container mx-auto px-6 xl:px-32 py-4 md:py-8 lg:py-12">
        <div className="gmax-w-6xl mx-auto">
          Left Container
          <div className="p-6 text-left rounded-lg border border-gray-300 shadow-lg bg-white">
            <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mb-2 lg:mb-6">
              Latest News
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              Friday, December 6, 2024
            </p>
            <div className="space-y-4">
              {news.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-1 rounded-lg hover:bg-gray-100 transition"
                >
                  <div className="mx-0 md:mx-5 text-sm sm:text-md md:text-lg text-gray-500">
                    {item.time}{" "}
                    <span className="text-gunmetal font-medium">
                      {" | "} {item.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Testimonials Section */}
      <Testimonial />
      {/* <div class="relative flex overflow-x-hidden">
        <div class="py-12 animate-marquee whitespace-nowrap">
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 5</span>
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 5</span>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
