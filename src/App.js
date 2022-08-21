import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./HeaderFooter/Footer/Footer";
import Header from "./HeaderFooter/Header/Header";
import LearnProgramming from "./LearnProgramming/LearnProgramming";
import Canvas from "../src/Canvas/Canvas";
import Info from "../src/Info/Info";
import Facultet from "./Facultets/Facultet";
import Services from "./Services/Services";
import OurPartners from "./OurPartners/OurPartners";
import FollowUs from "./FollowUs/FollowUs";
import CallPopUp from "./CallPopUp/CallPopUp";
import { createContext } from "react";

export const ThemeContext = createContext(null);

export default function App() {
  const [width, setWidth] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : 'light'))
  }

  useEffect(() => {
    window.onresize = () => {
      setWidth(window.screen.width);
    };
  }, [window.screen.width]);
  console.log(width);

  const [open, setOpen] = useState(false);

  console.log(open);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        {open && <CallPopUp theme={theme} pop={open} setPop={setOpen} />}
        <div className="body">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <LearnProgramming pop={open} setPop={setOpen} />
          <Canvas theme={theme} />
          <Info theme={theme} />
          <Facultet theme={theme} fac="fac" />
          <Services theme={theme} serv="serv" />
          <OurPartners theme={theme} />
          <FollowUs />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
