import { useState } from "react";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import NavList from "./NavList";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNavBar = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <div className="p-4 flex justify-between items-center shadow-lg bg-yellow-500 fixed w-full z-30">
      {/* Logo */}
      <h2 className="text-4xl font-bold">GO-MOBILE</h2>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleNavBar}
          aria-label="Toggle navigation menu"
          className="focus:outline-none"
        >
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
