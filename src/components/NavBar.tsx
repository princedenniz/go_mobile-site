import { useState } from "react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import mainLogo from "../asset/Preview.png"; // Replace with your logo
import NavList from "./NavList";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNavBar = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <div className="p-4 flex justify-between items-center shadow-lg bg-yellow-500 fixed w-full z-30">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <motion.img
          src={mainLogo}
          alt="GoMobilez Logo"
          className="w-12 h-12 object-contain rounded-full border-2 border-white shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />
        <h2 className="text-2xl font-bold text-white hidden sm:block">GoMobilez</h2>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleNavBar}
          aria-label="Toggle navigation menu"
          className="focus:outline-none"
        >
          {mobileNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

        {/* Animated MobileNav */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={mobileNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-[4.5rem] w-full bg-white shadow-md z-10"
        >
          {mobileNav && <MobileNav />}
        </motion.div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavList />
      </div>
    </div>
  );
};

export default NavBar;
