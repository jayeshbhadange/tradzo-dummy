import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../assets/icons/logo-05.svg";
import logowhite from "../../../assets/icons/logo-wh.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // Track dropdowns
  const [isMenuBar, setIsMenuBar] = useState(window.innerWidth <= 1024);
  const navigate = useNavigate();

  const navItems = [
    {
      label: "Research",
      children: [
        { label: "Topic A", link: "/research/topic-a" },
        { label: "Topic B", link: "/research/topic-b" },
      ],
    },
    { label: "Careers", link: "/careers" },
    { label: "About", link: "/about" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMenuBar(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleDropdownToggle = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const handleScrollToSection = () => {
    navigate("/");
    setTimeout(() => {
      const subscriptionSection = document.getElementById("subscription");
      subscriptionSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header
      className={`${
        isMenuOpen && isMenuBar ? "bg-gunmetal" : "bg-white"
      } text-left shadow sticky top-0 z-50`}
    >
      <nav className="px-4 lg:px-8 max-w-screen-3xl mx-auto">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isMenuOpen && isMenuBar ? logowhite : logo}
              alt="Logo"
              className="h-6 sm:h-8"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="text-2xl" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.link ?? "#"}
                  className="flex items-center gap-2 hover:text-bs3"
                >
                  {item.label}
                  {item.children && <FiChevronDown />}
                </Link>
                {item.children && (
                  <div className="absolute top-full mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-md">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.link}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden">
          <div className="absolute top-0 right-0 w-[70%] bg-white h-full shadow-md">
            <div className="p-4">
              <AiOutlineClose
                className="text-2xl ml-auto cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-4 px-6">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    {item.label}
                    {item.children && (
                      <FiChevronDown
                        className={`transition-transform ${
                          isDropdownOpen === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {isDropdownOpen === index && item.children && (
                    <div className="flex flex-col gap-2 mt-2 pl-4">
                      {item.children.map((child, idx) => (
                        <Link
                          key={idx}
                          to={child.link}
                          className="hover:text-bs3"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={handleScrollToSection}
                className="bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
