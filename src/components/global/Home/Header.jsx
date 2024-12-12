import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/icons/logo-05.svg";
import logowhite from "../../../assets/icons/logo-wh.svg";
import { links } from "./Mylinks";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuBar, setIsMenuBar] = useState(window.innerWidth <= 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const navigate = useNavigate();

  // Track window size to adjust menu bar rendering
  useEffect(() => {
    const handleResize = () => {
      setIsMenuBar(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleScrollToSection = () => {
    navigate("/");
    setTimeout(() => {
      const subscriptionSection = document.getElementById("subscription");
      if (subscriptionSection) {
        subscriptionSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleDropdownToggle = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  return (
    <header className="bg-white text-left h-8 sm:h-10 lg:h-12 shadow sticky top-0 z-50 text-gunmetal">
      <nav className="px-4 lg:px-8 max-w-screen-3xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="w-auto lg:mt-0 sm:mt-2 mt-1.5 h-5 sm:h-6 lg:h-8"
              alt="Logo"
            />
          </Link>

          {/* Right Section */}
          <div className="flex items-center lg:order-2">
            <button
              className="lg:hidden ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FiMenu />
            </button>
          </div>

          {/* Menu Items */}
          {!isMenuBar && (
            <div className="md:flex items-center gap-7 transition-all">
              {links.map((link, index) => (
                <div key={index} className="relative group">
                  {link.submenu ? (
                    <div className="flex px-2 py-3 text-sm hover:text-bs3 cursor-pointer items-center">
                      <span>{link.name}</span>
                      <FiChevronDown
                        className={`transition-all group-hover:rotate-180`}
                      />
                    </div>
                  ) : (
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `block py-2 px-3 hover:text-bs3 ${
                          isActive ? "text-bs3 font-semibold" : ""
                        } lg:border-0 lg:p-0`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}

                  {/* Show dropdown on hover */}
                  <div
                    className={`absolute text-[13px] left-0 top-10 hidden w-40 flex-col border rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex`}
                  >
                    <div className="px-4 font-bold pb-2 text-gray-600 uppercase">
                      {link.comingsoon}
                    </div>
                    <ul className="space-y-0">
                      {link.sublinks.map((sublink, subindex) => (
                        <li
                          key={subindex}
                          className="px-4 py-1 cursor-pointer hover:bg-gray-100"
                        >
                          {sublink.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Pricing */}
                <a href="#subscription">
                  <button
                    onClick={handleScrollToSection}
                    className="block py-2 px-3 text-sm hover:text-bs3 lg:border-0 lg:p-0"
                  >
                    Pricing
                  </button>
                </a>

                {/* About */}
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-bs3 text-sm font-semibold" : ""
                    } hover:text-bs3 lg:border-0 lg:p-0`
                  }
                >
                  About
                </NavLink>

                {/* Support */}
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 ${
                      isActive ? "text-bs3 text-sm font-semibold" : ""
                    } hover:text-bs3 lg:border-0 lg:p-0`
                  }
                >
                  Support
                </NavLink>
              </div>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden">
          <div className="absolute top-0 right-0 lg w-[50%] sm:w-[40%] bg-white h-full shadow-md">
            <div className="p-4">
              <AiOutlineClose
                className="text-2xl ml-auto cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-5 px-6">
              {links.map((item, index) => (
                <div key={index}>
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    {item.name}
                    {item.sublinks && (
                      <FiChevronDown
                        className={`transition-transform ${
                          isDropdownOpen === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {isDropdownOpen === index && item.sublinks && (
                    <div className="flex flex-col text-sm gap-2 mt-2 pl-6">
                      {/* COMING SOON */}
                      <div className="text-xs font-semibold text-gray-500 mb-1">
                        {item.comingsoon}
                      </div>

                      {item.sublinks.map((child, subindex) => (
                        <div key={subindex}>
                          {/* Show the child link or text */}
                          {child.link ? (
                            <Link
                              to={child.link}
                              onClick={() => {
                                setIsMenuOpen(false); // Close sidebar on valid link click
                              }}
                            >
                              {child.name}
                            </Link>
                          ) : (
                            <div>{child.name}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 space-y-4 px-6">
              {/* Pricing */}
              <a href="#subscription">
                <button
                  onClick={() => {
                    handleScrollToSection();
                    setIsMenuOpen(false); // Close sidebar on Pricing button click
                  }}
                  className="block hover:text-bs3 lg:border-0 lg:p-0"
                >
                  Pricing
                </button>
              </a>

              {/* About */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block hover:text-bs3 ${
                    isActive ? "text-bs3 font-semibold" : ""
                  } lg:border-0 lg:p-0`
                }
                onClick={() => setIsMenuOpen(false)} // Close sidebar on About click
              >
                About
              </NavLink>

              {/* Support */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block hover:text-bs3 ${
                    isActive ? "text-bs3 font-semibold" : ""
                  } lg:border-0 lg:p-0`
                }
                onClick={() => setIsMenuOpen(false)} // Close sidebar on Support click
              >
                Support
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
