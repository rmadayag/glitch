import React, { useEffect, useState } from "react";
import logo from '/logo 1.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "Videos", link: "#videos" },
    { name: "About Us", link: "#about" },
    { name: "Contact Us", link: "#contact" },
    { name: "Store", link: "#featured" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
      nav.classList.add("visible");
    } else {
      nav.classList.remove("visible");
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-bgaccent/80 p-5 px-5">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="text-txtcolor md:block hidden px-7 py-2 font-medium">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-4 hover:text-secondary">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`${open ? "text-txtcolor" : "text-primary"} text-4xl md:hidden`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-txtcolor absolute w-2/3 h-screen px-7 py-2 font-medium bg-bgcolor top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
            }`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="text-4xl text-primary" onClick={() => setOpen(false)}>
              <ion-icon name="close"></ion-icon>
            </div>
          </div>
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-primary"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;