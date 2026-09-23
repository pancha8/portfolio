import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Number from "./components/Number/Number";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Number />
      <Footer />
    </div>
  );
}

export default App;
