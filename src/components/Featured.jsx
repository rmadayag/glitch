import React from "react";

const Featured = () => {
  // Replace these URLs with actual URLs to your plushie images
  const plushieImages = [
    "https://glitchproductions.store/cdn/shop/files/Gummigoo-Plush_02.png?v=1719388435&width=1280",
    "https://glitchproductions.store/cdn/shop/files/King-Plush_01.png?v=1712122592&width=1280",
    "https://glitchproductions.store/cdn/shop/files/Gangle-Plush_01.png?v=1712122540&width=1280",
    "https://glitchproductions.store/cdn/shop/files/Zooble-Plush_01_d91aff51-0f4d-40fc-a7e7-ac2cfb1842c5.png?v=1713942635&width=1280",
  ];

  const storeLink = "https://glitchproductions.store/collections/shop-all"; // Replace with actual link to your plushies page

  return (
    <section id="featured" className="py-[100px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-accent m-10">FEATURED AMIIBO FIGURES</h2>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-600 mx-auto">
            Check out some of our popular plushies!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plushieImages.map((imageUrl, index) => (
            <div key={index} className="relative">
              <img
                src={imageUrl}
                alt={`Plushie ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <a
                  href={storeLink}
                  className="text-white font-semibold px-4 py-2 bg-primary rounded hover:bg-secondary transition-colors duration-300"
                >
                  View Our Plushies
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
