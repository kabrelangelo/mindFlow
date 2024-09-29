import { useState } from "react";
import { Link } from "react-router-dom";
import { brainwave } from "../../public/assets"; // Image/logo que tu utilises

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    }
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClick(); // Fermer le menu si ouvert
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center justify-between px-5 py-4 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={brainwave} alt="MindFlow" />
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                openNavigation
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4.5rem] left-0 right-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent z-50 lg:w-auto lg:flex-row flex-col items-center justify-center overflow-y-auto max-h-[calc(100vh-4.5rem)]`}
        >
          <Link
            to="#"
            onClick={() => handleScrollTo("services")}
            className="block py-4 px-6 text-xl uppercase text-gray-700 hover:text-indigo-500 lg:text-sm lg:py-0 lg:px-4"
          >
            Services
          </Link>
          <Link
            to="#"
            onClick={() => handleScrollTo("pricing")}
            className="block py-4 px-6 text-xl uppercase text-gray-700 hover:text-indigo-500 lg:text-sm lg:py-0 lg:px-4"
          >
            Pricing
          </Link>
          <Link
            to="#"
            onClick={() => handleScrollTo("roadmap")}
            className="block py-4 px-6 text-xl uppercase text-gray-700 hover:text-indigo-500 lg:text-sm lg:py-0 lg:px-4"
          >
            Roadmap
          </Link>
        </nav>

        {/* Desktop Buttons (visible only on larger screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#signup"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Inscription
          </a>
          <a
            href="#login"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Connexion
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
