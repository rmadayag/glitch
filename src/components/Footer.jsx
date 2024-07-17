import React from "react";
import logo from '/logo 1.png';

const Footer = () => {
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "Videos", link: "#videos" },
    { name: "About Us", link: "#service" },
    { name: "Contact Us", link: "#projects" },
    { name: "Store", link: "#testimony" },
  ];

  const socialLinks = [
    { name: "Twitter", link: "https://twitter.com/glitch_prod" },
    { name: "Instagram", link: "https://www.instagram.com/glitch_prod/" },
    { name: "YouTube", link: "https://www.youtube.com/glitchprod" },
    { name: "TikTok", link: "https://www.tiktok.com/@glitch_prod" },
    // Remove Facebook entry
  ];

  return (
    <footer className="bg-primary/5 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-12 md:h-20" /> {/* Adjusted logo height */}
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-20 gap-4">
          <ul className="flex flex-wrap gap-2 md:gap-5 mb-4 md:mb-0">
            {menuLinks.map((menu, i) => (
              <li key={i}>
                <a href={menu.link} className="text-primary hover:text-secondary">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="text-primary hover:text-secondary transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Adjusted ion-icon name for TikTok */}
                {social.name === "TikTok" ? (
                  <ion-icon name="logo-tiktok" size="large"></ion-icon>
                ) : (
                  <ion-icon name={`logo-${social.name.toLowerCase()}`} size="large"></ion-icon>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
