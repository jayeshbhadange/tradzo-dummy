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

const handleClick = async () => {
  try {
    console.log("clicked");
    const res = await axios.post("http://localhost:8000/api/v1/order", data);
    console.log(res.data);
    if (res.data.success) {
      window.location.href =
        res.data.data.instrumentResponse.redirectInfo.url;
    } else {
      console.log("Payment initiation failed");
    }
  } catch (error) {
    console.log(error);
  }
};





let salt_key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
let merchant_id = "PGTESTPAYUAT";
// const  handleClick = () => {
//   const handler=async ()=>{
//     let merchantTransactionId = "T" + Date.now();
//     const data = {
//       merchantId: merchant_id,
//       merchantTransactionId: merchantTransactionId,
//       merchantUserId: "tester",
//       amount: 1 * 100, // multiplying by 100 to convert to paise
//       redirectUrl: `http://localhost:3000/submit?id=${merchantTransactionId}`,
//       redirectMode: "POST",
//       mobileNumber: "9999999999",
//       paymentInstrument: {
//         type: "PAY_PAGE",
//       }
//     }

//     const payload = JSON.stringify(data);
//     const payloadMain = btoa(payload);
//     const keyIndex = 1;
//     const stringToHash = payloadMain + "/pg/v1/pay" + salt_key;

//     // Step 4: Generate the SHA-256 hash using SubtleCrypto
//     async function generateSHA256(string) {
//       const encoder = new TextEncoder();
//       const data = encoder.encode(string);
//       const hashBuffer = await crypto.subtle.digest("SHA-256", data);
//       const hashArray = Array.from(new Uint8Array(hashBuffer));
//       const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
//       return hashHex;
//     }

//     const sha256 = await generateSHA256(stringToHash);
//     const checksum = sha256 + "###" + keyIndex;

//     const Test_URL =
//       'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
//     // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

//     const options = {
//       method: "POST",
//       url: Test_URL, // Change to prod_URL in production
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//         "X-VERIFY": checksum,
//       },
//       data: {
//         request: payloadMain,
//       },
//     };

//     try {
//       const response = await axios(options);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error making the request:", error);
//     }
//   }
//   handler();

  
// }

const SubscriptionPlan = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 ${
              plan.active ? "bg-blue-600 text-white" : "bg-white border"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-lg mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={handleClick}
              className={`w-full py-2 rounded-lg transition-colors duration-300 ${
                plan.active
                  ? "bg-white text-blue-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              } font-semibold`}
            >
              {plan.active ? "Current Plan" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlan;