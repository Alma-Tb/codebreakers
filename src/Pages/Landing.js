import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Hero from "../Components/Landing/Hero";
import LandingChoose from "../Components/Landing/LandingChoose";
import HistoryPanel from "../Components/Landing/HistoryPanel";
import AboutPanel from "../Components/Landing/AboutPanel";
function Landing() {

  return (
    <>
    <div style={{width:1250}}>
      <header id="header" className="App-header">
        <Hero />
      </header>
      <LandingChoose />
      <HistoryPanel />
      <AboutPanel />
      </div>
    </>
  );
}
export default Landing;

