import { useState } from "react"
import { Link } from "react-router-dom"
import downloadStore from "../asset/google.svg"
import appleStore from "../asset/apple.svg"


const MobileNav = () => {
    const [dropDown, setDropDown] = useState(false); 
    const toggleDropDown = () => {
        setDropDown((prev) => !prev);
      };
  return (
    <div className="flex flex-col gap-6 p-4 bg-yellow-300 md:hidden h-96 font-mono font-bold">
         <Link to="/">Rates</Link>
      <Link to="/">Blog</Link>
      <div className="relative">
        {/* Parent link */}
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDropDown}
        >
          <Link to="/">Company</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        {/* Dropdown Menu */}
        {dropDown && (
          <div className="absolute bg-white shadow-lg border rounded mt-2 w-40">
            <Link
              to="/about"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
      <Link to="/">Help</Link>
      <Link to="/">Support</Link>
      {/* <button className="bg-red-400 rounded-full w-64 h-12">Buy Credits</button> */}
      <div className="flex">
        <img src={downloadStore} alt="google" />
        <img src={appleStore} alt="apple" />
        </div>
    </div>
  )
}

export default MobileNav