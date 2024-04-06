import React from "react";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BodySection from "./components/BodySection";
import FeatureSection from "./components/FeatureSection";
import Explore from "./components/ExploreSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BodySection />
      <FeatureSection />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
