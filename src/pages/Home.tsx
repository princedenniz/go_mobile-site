import image1 from "../asset/PngItem_5202957.png";
import image2 from "../asset/Calling-Transparent-Background.png"; // Replace with another image of your choice
import downloadStore from "../asset/google.svg"
import appleStore from "../asset/apple.svg"

const Home = () => {
  return (
    <div className="bg-yellow-300 min-h-screen text-white">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-cover bg-center h-screen text-center px-6 md:px-12 lg:px-16 py-12"
        style={{ backgroundImage: `url(${image1})`, opacity: "0.9"}}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
        GoMobilez International Calling App
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl opacity-80 mb-6 drop-shadow-lg font-serif font-bold">
          Affordable calls to any mobile or landline in the world.
        </h2>

        <div className="flex">
        <img src={downloadStore} alt="google" />
        <img src={appleStore} alt="apple" />
        </div>
            
        {/* <button className="bg-white text-yellow-500 font-bold rounded-full py-3 px-10 shadow-lg transition transform hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500">
          Buy Credits
        </button> */}
      </section>

      {/* Features Section */}
      <section className="bg-yellow-300 text-gray-800 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Why Choose GoMobilez?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <img src={image1} alt="Feature 1" className="w-20 h-20 mb-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-2">High-Quality Calls</h4>
              <p className="text-lg opacity-80 font-serif">
                Enjoy crystal-clear voice quality on every call, regardless of where you’re calling.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={image2} alt="Feature 2" className="w-20 h-20 mb-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-2">Affordable Rates</h4>
              <p className="text-lg opacity-80 font-serif">
                Get the best rates for international calls with GoMobilez is simple and transparent pricing.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={image1} alt="Feature 3" className="w-20 h-20 mb-4 rounded-full" />
              <h4 className="text-xl font-semibold mb-2">Global Coverage</h4>
              <p className="text-lg opacity-80 font-serif">
                Connect to friends, family, and colleagues in over 200+ countries across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-yellow-200 text-gray-800 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">About GoMobilez</h3>
          <p className="text-lg opacity-80 mb-8 font-serif">
          GoMobilez is designed to make international calling simple, affordable, and accessible for everyone.
            With a focus on quality, we provide the best international rates to call any mobile or landline globally.
          </p>
          <div>
            <img src={image2} alt="About Go-Mobile" className="w-full max-w-3xl mx-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-yellow-100 text-gray-800 py-6 w-full font-serif">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold text-yellow-600">GoMobilez</h4>
            <p className="text-sm text-gray-600">
              Affordable international calling at your fingertips.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="text-gray-600 hover:text-yellow-600">Features</a>
            <a href="#about" className="text-gray-600 hover:text-yellow-600">About</a>
            <a href="#gallery" className="text-gray-600 hover:text-yellow-600">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-600">Contact</a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>&copy; 2024 Go-Mobile. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
