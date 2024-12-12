import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.tel) {
      newErrors.tel = "Telephone number is required";
    } else if (!/^\d{10}$/.test(formData.tel)) {
      newErrors.tel = "Telephone number is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Handle form submission here (e.g., send form data to API)
    }
  };

  return (
    <section className="h-auto sm:h-screen text-left bg-white text-gunmetal">
      <div className="container py-10 mx-auto px-3 xl:px-32">
        <div className="rounded-lg shadow-lg py-10 p-4">
          {/* Contact Form & Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-6">
            {/* Contact Details */}
            <div className="flex flex-col justify-between">
              <div className="p-0 sm:p-4 md:p-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-bs3 mb-6">
                  Reach Us
                </h3>
                <p className="mb-14 text-lg sm:text-xl">
                  Feel free to give your feedback
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center text-lg sm:text-xl">
                    <FaPhone className="mr-4 text-bs3" />
                    <a href="tel:+123456789" className="hover:underline">
                      079-40391464
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center text-lg sm:text-xl">
                    <MdEmail className="mr-4 text-bs3" />
                    <div>
                      <a
                        href="mailto:info@tradzo.in"
                        className="text-bs3 hover:underline"
                      >
                        info@tradzo.in
                      </a>
                      <span className="mx-1">|</span>
                      <a
                        href="mailto:care@tradzo.in"
                        className="text-bs3 hover:underline"
                      >
                        care@tradzo.in
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-left text-lg sm:text-xl">
                    <FaLocationDot className="mr-4 text-bs3 mt-1" />
                    <span>
                      A - 416 Sumel 11,
                      <br />
                      Namaste Circle, Shahibaug,
                      <br />
                      Ahmedabad, Gujarat 380004
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="https://wa.me/+917990433195?text=Hello!%20I%20have%20a%20question."
                    target="_blank"
                    className="inline-flex items-center text-green-600 border border-1 border-green-600 font-medium p-3 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="text-left p-1 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-md sm:text-lg font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 ring-transparent focus:ring-bs3 focus:outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-md sm:text-lg font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-bs3 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-md">{errors.email}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm sm:text-md font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-bs3 focus:outline-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-bs3 text-white p-3 rounded-lg font-medium hover:bg-bs transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
