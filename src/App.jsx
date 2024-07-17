import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <VideoSection/>
      <Featured/>
      <Footer/>
    </div>
  );
};

export default App;
