import React, { useState, useEffect } from "react";

const Hero = () => {
  const [showYouTubeBanner, setShowYouTubeBanner] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(10500000); // Simulated subscriber count

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowYouTubeBanner(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-hero-pattern bg-cover bg-center min-h-screen">
       <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      {/* Glitch Logo Banner */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${showYouTubeBanner ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center">
          <img src="/logo 1.png" alt="Glitch Logo" className="h-24 mx-auto" />
          <h1 className="text-6xl md:text-8xl font-bold text-white mt-4">WELCOME</h1>
        </div>
      </div>

      {/* YouTube Banner */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showYouTubeBanner ? 'opacity-100' : 'opacity-0'}`}>
        {/* Glitch background with play button overlay */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button
              className="bg-transparent border-none cursor-pointer transform hover:scale-110 transition-transform duration-300"
              onClick={() => window.open("https://www.youtube.com/glitchprod", "_blank")}
            >
              {/* YouTube Play Button Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-80 hover:opacity-100 transition-opacity duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </button>
            {/* Display subscriber count */}
            <h2 className="text-white font-semibold text-4xl mt-4 text-center">{subscriberCount.toLocaleString()} Subscribers</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
