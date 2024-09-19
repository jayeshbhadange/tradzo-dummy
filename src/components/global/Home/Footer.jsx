import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D0BAQHrEHElWc8whw/company-logo_200_200/company-logo_200_200/0/1705056868818?e=2147483647&v=beta&t=7_CU_5iFkkhkjjgdCX5gBWUqZ2UCFXZOOZdJTilevJw"
                className="h-12 w-20"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="hover:text-gray-400">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-gray-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Follow us</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-gray-400">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Company</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-us" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-gray-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/offices" className="hover:text-gray-400">
                    Our Offices
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Newsletter Signup</h2>
          <form className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-4 sm:mb-0 rounded-md border border-gray-700 bg-gray-800 text-white"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
        <hr className="border-gray-700 mb-6" />
        <ul className="flex justify-center space-x-4">
          <li className="relative group">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white text-blue-600 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                viewBox="0 0 320 512"
                height="1.2em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              Facebook
            </span>
          </li>
          <li className="relative group">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white text-blue-400 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                height="1.8em"
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              Twitter
            </span>
          </li>
          <li className="relative group">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white text-blue-700 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="1.8em"
                viewBox="0 0 48 48"
              >
                <path d="M42,42H32.2v-12.8c0-3.067-0.06-7.012-4.272-7.012c-4.274,0-4.927,3.34-4.927,6.8V42h-9.8V18.044h9.408v3.278h0.136c1.31-2.478,4.516-5.088,9.3-5.088c9.94,0,11.773,6.44,11.773,14.816V42z M9,15.14c-3.2,0-5.8-2.598-5.8-5.8s2.6-5.8,5.8-5.8c3.2,0,5.8,2.598,5.8,5.8S12.2,15.14,9,15.14z M14.8,42H3.2V18.044h11.6V42z"></path>
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              LinkedIn
            </span>
          </li>
          <li className="relative group">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-white text-pink-600 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <svg
                viewBox="0 0 448 512"
                height="1.8em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71,0c14.08,0,25.51,11.43,25.51,25.51s-11.43,25.51-25.51,25.51-25.51-11.43-25.51-25.51S334.63,202.66,348.71,202.66Zm76.07,25.51c0-46.5-9.54-87.72-28.3-106.48-18.76-18.76-59.98-28.3-106.48-28.3H158c-46.5,0-87.72,9.54-106.48,28.3-18.76,18.76-28.3,59.98-28.3,106.48V354c0,46.5,9.54,87.72,28.3,106.48,18.76,18.76,59.98,28.3,106.48,28.3h136c46.5,0,87.72-9.54,106.48-28.3,18.76-18.76,28.3-59.98,28.3-106.48ZM224,338.66A82.34,82.34,0,1,1,306.34,256,82.36,82.36,0,0,1,224,338.66ZM368,174.54A17.14,17.14,0,1,1,385.14,157.4,17.14,17.14,0,0,1,368,174.54ZM384,384H64V256H64V128H128v12.62a153.35,153.35,0,0,0-20.18-2.32H130.66c3.45,0,6.87.28,10.24.63,3.62.38,7.22,1.13,10.82,1.99a63.93,63.93,0,0,0,11.8,2.56c3.32.66,6.64,1.35,9.95,2.08q6.44,1.45,12.85,3.36c2.83,0.79,5.66,1.68,8.47,2.66,8.46,2.8,16.77,6.38,24.83,10.74a88.42,88.42,0,0,1,10.66,6.19A80.43,80.43,0,0,1,232,181.4c6.6,4.21,13.04,8.81,19.3,13.75,5.5,4.32,11.13,8.88,16.83,13.38a123.06,123.06,0,0,1,19.36,17.1,75.07,75.07,0,0,0,13.49,13.95c5.58,4.65,11.25,9.17,17.05,13.33a139.18,139.18,0,0,1,18.91,16.9,88.46,88.46,0,0,0,7.29,6.68,98.35,98.35,0,0,0,5.38,4.48c1.8,1.47,3.63,2.89,5.48,4.27q4.62,3.51,9.35,7a146.45,146.45,0,0,0,8.93,6.5q5.34,3.9,10.76,7.6,10.12,6.95,20.44,13.41,9.82,6.24,20.08,12.05a143.06,143.06,0,0,0,12.93,5.94c3.89,1.41,7.79,2.69,11.7,3.88,0.78.23,1.58.43,2.36.63,1.22.32,2.43.63,3.66.92.67.17,1.33.35,2,.52,2.3.56,4.63,1.07,7,1.52q7.71,1.44,15.55,2.48c5.83.8,11.73,1.41,17.64,1.9,1.95.15,3.92.28,5.89.36,8.94.33,18,0,26.92-.95,5.68-.62,11.38-1.49,17.05-2.48A240.54,240.54,0,0,0,384,384Z"></path>
              </svg>
            </a>
            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-sm py-1 px-2 rounded shadow-md">
              Instagram
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Tradzo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;