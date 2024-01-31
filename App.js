import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sometext from "./someText";
import RainEffect from "./effect/RainEffect";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
 

  return (
   <>
    <RainEffect/>
   </>
  )
};

export default App;
