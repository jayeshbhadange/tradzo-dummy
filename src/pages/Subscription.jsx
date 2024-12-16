import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0/month",
    features: [
      "Free For the First Month",
      "Daily Trading Signals",
      "Market News & Analysis",
      "Basic Support",
    ],
    active: true,
  },
  {
    name: "Pro",
    price: "$19.99/month",
    features: [
      "Daily Trading Signals",
      "Market News & Analysis",
      "Advanced Portfolio Tools",
      "Priority Support",
    ],
    active: false,
  },
  {
    name: "Premium",
    price: "$29.99/month",
    features: [
      "All Pro Features",
      "Personalized Trading Advice",
      "Exclusive Webinars",
      "24/7 Premium Support",
    ],
    active: false,
  },
];

let data = {
  name: "vikas",
  amount: 2,
  number: "9999999999",
  MID: "MID" + Date.now(),
  transactionId: "T" + Date.now(),
};

const handleClick = async (axiosPrivate) => {
  try {
    console.log("clicked");
    const res = await axiosPrivate.post(
      "http://localhost:8000/api/v1/order",
      data
    );
    console.log(res.data);
    if (res.data.success) {
      window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
    } else {
      console.log("Payment initiation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

const SubscriptionPlan = () => {
  return (
    // <section className="py-4 md:py-8 lg:py-12">
    <section className="pt-4 md:pt-8 lg:pt-12 pb-4" id="subscription">
      <div className="container mx-auto px-6 xl:px-32 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-12">
          Subscription Plans
        </h2>
        <div className="grid text-gunmetal grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-16">
          {[
            {
              name: "Starter",
              price: "₹0",
              gst: "",
              features: [
                "First Month Free",
                "Trading Strategies for All",
                "Live Performance",
              ],
            },
            {
              name: "Monthly",
              price: "₹2000",
              gst: "+GST",
              features: [
                "First 3 Months at Price of One*",
                "Full Access",
                "Live Performance",
                // "Advanced order types",
              ],
            },
            {
              name: "Yearly",
              price: "₹17999",
              gst: "+GST",
              features: [
                "Get 25% Discount",
                "Full Access",
                "Live Performance",
                // "Advanced order types",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="p-3 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">{plan.name}</h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                {plan.price}
                <span className="text-md sm:text-lg">{plan.gst}</span>
              </p>
              <ul className="mt-4 sm:mt-6 space-y-2 text-gray-600 text-xs sm:text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 sm:mt-6 text-sm md:text-md w-full bg-night text-white py-2 rounded-lg hover:bg-gunmetal transition duration-300">
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
