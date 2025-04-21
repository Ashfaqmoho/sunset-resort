import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Offers from "./Components/Offers/Offers";
import Reviews from "./Components/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Gallery" subtitle="Sunset Resort" />
        <Programs />
        <About />
        <Title title="Special Offers" subtitle="Offers" />
        <Offers />
        <Title title="Customer Reviews" subtitle="Reviews" />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default App;
