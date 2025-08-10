import React from "react";
import Hero from "../components/Home/Hero/Hero";
import Services from "../components/Home/Services/Services";
import Contact from "../components/Home/contact/Contact";
import Playground from "../components/Home/PlayGround/Playground";
const Home = (props) => {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
      <Playground />
    </>
  );
};

export default Home;
