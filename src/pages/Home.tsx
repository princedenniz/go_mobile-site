import { motion } from "framer-motion"; // Import Framer Motion
import image1 from "../asset/PngItem_5202957.png";
import image2 from "../asset/Calling-Transparent-Background.png"; 
import downloadStore from "../asset/google.svg";
import appleStore from "../asset/apple.svg";

const Home = () => {
  return (
    <div className="bg-yellow-300 min-h-screen text-white">
      
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center bg-cover bg-center h-screen text-center px-6 md:px-12 lg:px-16 py-12"
        style={{ backgroundImage: `url(${image1})`, opacity: "0.9" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg"
        >
          Talk More, Spend Less
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="text-lg sm:text-xl md:text-2xl opacity-80 mb-6 drop-shadow-lg font-serif font-bold"
        >
          Affordable calls to any mobile or landline in the world.
        </motion.h2>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={downloadStore} alt="google" className="w-40 h-auto" />
          <img src={appleStore} alt="apple" className="w-40 h-auto" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-yellow-300 text-gray-800 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Why Choose GoMobilez?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image1} alt="Feature 1" className="w-20 h-20 mb-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-2">High-Quality Calls</h4>
              <p className="text-lg opacity-80 font-serif">
                Enjoy crystal-clear voice quality on every call, regardless of where you’re calling.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image2} alt="Feature 2" className="w-20 h-20 mb-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-2">Affordable Rates</h4>
              <p className="text-lg opacity-80 font-serif">
                Get the best rates for international calls with simple and transparent pricing.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image1} alt="Feature 3" className="w-20 h-20 mb-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-2">Global Coverage</h4>
              <p className="text-lg opacity-80 font-serif">
                Connect to friends, family, and colleagues in over 200+ countries across the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
<section className="bg-yellow-300 text-gray-800 py-16 px-6 md:px-16">
  <div className="max-w-5xl mx-auto text-center">
    <h3 className="text-3xl font-bold mb-8">Choose Your Plan</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Pay As You Go */}
      <motion.div 
        className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-2xl font-semibold mb-4 text-yellow-600">Pay As You Go</h4>
        <p className="text-lg opacity-80 mb-4 font-serif">
          Only pay for the minutes you use. Perfect for occasional callers.
        </p>
        <p className="text-xl font-bold mb-4">8 <b className="text-sm">cent</b> / Minute</p>
        <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition">
          Get Started
        </button>
      </motion.div>
      
      {/* Standard Subscription */}
      <motion.div 
        className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-2xl font-semibold mb-4 text-yellow-600">Standard Subscription</h4>
        <p className="text-lg opacity-80 mb-4 font-serif">
        Unlimited 1-hour calls every day for 30 day.
        </p>
        <p className="text-xl font-bold mb-4">$25.99 / Month</p>
        <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition">
          Subscribe Now
        </button>
      </motion.div>
      
      {/* Premium Subscription */}
      <motion.div 
        className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-2xl font-semibold mb-4 text-yellow-600">Premium Subscription</h4>
        <p className="text-lg opacity-80 mb-4 font-serif">
        Unlimited 3-hours of calls   Every day for 30 days.
        </p>
        <p className="text-xl font-bold mb-4">$40.99 / Month</p>
        <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition">
          Go Premium
        </button>
      </motion.div>

    </div>
  </div>
</section>


      {/* About Us Section */}
      <section className="bg-yellow-200 text-gray-800 py-16 px-6 md:px-16 flex items-center justify-center min-h-screen">
  <div className="max-w-5xl text-center">
    <h3 className="text-3xl font-bold mb-8">About GoMobilez</h3>
    <p className="text-lg opacity-80 mb-8 font-serif text-black">
      GoMobilez is your trusted partner for affordable international calling and seamless remittance services. With a commitment to keeping you connected, we provide high-quality calls at unbeatable rates, ensuring you can “Talk More, Spend Less.”
      <br /><br />
      Our platform is designed for simplicity and convenience, allowing you to stay in touch with loved ones across the globe without breaking the bank. Whether you’re making a quick call or sending money back home, GoMobilez offers reliable solutions you can count on.
      <br /><br />
      Join the growing GoMobilez family and experience the freedom of staying connected wherever you are. Go farther, call longer, and save more with GoMobilez.
    </p>
    <div>
      <img src={image2} alt="About GoMobilez" className="w-full max-w-3xl mx-auto rounded-lg shadow-xl" />
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-yellow-100 text-gray-800 py-6 w-full font-serif">
        <div className="flex flex-col text-center md:flex-row justify-between items-center px-6 md:px-12">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold text-yellow-600">GoMobilez</h4>
            <p className="text-sm text-black">Talk More, Spend Less.</p>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="text-black hover:text-yellow-600">Features</a>
            <a href="#about" className="text-black hover:text-yellow-600">About</a>
            <a href="#gallery" className="text-black hover:text-yellow-600">Gallery</a>
            <a href="#contact" className="text-black hover:text-yellow-600">Contact</a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-black">
          <p>&copy; 2024 Go-Mobilez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
