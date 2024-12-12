import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Amazing calls in Nifty.",
      author: "Tushar Arahant",
      designation: "CEO at Market Experts",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Market Impulse is very helpful.",
      author: "Prashant Vaghela",
      designation: "Founder at Finance Hub",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Good trades, & they don't give unnecessary trades.",
      author: "Hardik Roy",
      designation: "Trader at InvestCo",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Excellent insights, timely updates.",
      author: "Rahul Mehta",
      designation: "Analyst at StockVision",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Highly recommended for new traders.",
      author: "Anjali Shah",
      designation: "Founder at TradePro",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Fantastic experience, love the updates.",
      author: "Nikita Soni",
      designation: "Investor at Financial Growth",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Genuine advice with great returns.",
      author: "Sandeep",
      designation: "Trader at GreenMarkets",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Nice Calls.",
      author: "Rahul Joshi",
      designation: "CEO at StockNow",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Absolutely the best service for traders, great insights.",
      author: "Amit Patel",
      designation: "Trader at ProfitWorld",
      avatar: "https://via.placeholder.com/50",
    },
    // {
    //   text: "Reliable and trustworthy, a game changer for me.",
    //   author: "Maya Kapoor",
    //   designation: "Investor at SmartMarkets",
    //   avatar: "https://via.placeholder.com/50",
    // },
    {
      text: "Outstanding support, great recommendations!",
      author: "Ravi Kumar",
      designation: "Analyst at FinSight",
      avatar: "https://via.placeholder.com/50",
    },
    // {
    //   text: "Invaluable insights and consistent guidance.",
    //   author: "Simran Arora",
    //   designation: "CEO at MarketEdge",
    //   avatar: "https://via.placeholder.com/50",
    // },
    // {
    //   text: "Unmatched professionalism and timely updates!",
    //   author: "Ajay Singh",
    //   designation: "Investor at WealthSphere",
    //   avatar: "https://via.placeholder.com/50",
    // },
    // {
    //   text: "Their expertise has helped me alot.",
    //   author: "Shivani Gupta",
    //   designation: "Trader at ProInvestors",
    //   avatar: "https://via.placeholder.com/50",
    // },
    // {
    //   text: "Their services are unparalleled, delivering consistent results.",
    //   author: "Vikas Batra",
    //   designation: "Founder at TradeLine",
    //   avatar: "https://via.placeholder.com/50",
    // },
    // {
    //   text: "Highly knowledgeable team with actionable insights.",
    //   author: "Sneha Chawla",
    //   designation: "Analyst at StockTrackers",
    //   avatar: "https://via.placeholder.com/50",
    // },
    // {
    //   text: "Professional and accurate, worth every penny.",
    //   author: "Aditya Verma",
    //   designation: "Investor at WealthMax",
    //   avatar: "https://via.placeholder.com/50",
    // },
    {
      text: "Efficient, professional, and reliable guidance for traders.",
      author: "Karan Sethi",
      designation: "Trader at MoneyScope",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Their strategies are insightful and easy to implement.",
      author: "Radhika Mehra",
      designation: "Investor at ProfitHub",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Precise calls with excellent market understanding!",
      author: "Aakash Sharma",
      designation: "CEO at MarketMaster",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Exceptional service and a game-changer for my trading journey.",
      author: "Pooja Nair",
      designation: "Trader at FinancePeak",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Their calls are timely, accurate, and incredibly insightful.",
      author: "Rajesh Iyer",
      designation: "Analyst at StockPulse",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  return (
    <section className="text-gunmetal py-4 md:py-8 lg:py-12">
      <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center mb-6 lg:mb-12">
        What Our Clients Say
      </h2>

      <div className="relative overflow-hidden">
        {/* First row - Left to right scrolling */}
        <div className="flex gap-5 animate-marquee">
          <div className="flex gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-pb7 rounded-3xl p-4 w-[250px] flex-shrink-0 transition-transform duration-300"
              >
                {/* Quote Icon */}
                <div className="text-bs3 text-md flex">
                  <FaQuoteLeft />
                </div>

                {/* Testimonial Text */}
                <p className="italic text-center leading-relaxed min-h-[4.5rem] flex items-center justify-center">
                  "{testimonial.text}"
                </p>

                {/* Author Information */}
                <div className="text-right gap-4">
                  {/* <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                  /> */}
                  <div>
                    <h3 className="text-xs font-bold">
                      - {testimonial.author}
                    </h3>
                    {/* <p className="text-xs">{testimonial.designation}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add spacing between the rows */}
        <div className="mb-5"></div>

        <div className="mb-32"></div>

        {/* Second row - Right to left scrolling */}
        {/* <div className="flex gap-5 animate-marquee-reverse">
          <div className="flex gap-5">
            {testimonials.reverse().map((testimonial, index) => (
              <div
                key={index}
                className="bg-pb7 rounded-2xl p-4 w-[250px] flex-shrink-0 transition-transform duration-300"
              >
                Quote Icon
                <div className="text-bs3 text-md flex">
                  <FaQuoteLeft />
                </div>

                Testimonial Text
                <p className="italic text-center leading-relaxed min-h-[4.5rem] flex items-center justify-center">
                  "{testimonial.text}"
                </p>

                Testimonial Text
                 <p className="font-medium italic text-center leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                 Author Information 
                <div className="text-right gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                  />
                  <div>
                    <h3 className="text-xs font-semibold">
                      - {testimonial.author}
                    </h3>
                    <p className="text-xs">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            display: flex;
            gap: 2rem;
            animation: marquee 23s linear infinite;
            will-change: transform;
          }

          @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }

          .animate-marquee-reverse {
            display: flex;
            gap: 2rem;
            animation: marquee-reverse 25s linear infinite;
            will-change: transform;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonial;
