const tl = gsap.timeline();

useGSAP(() => {

  tl.to(".box", { yPercent: 300, duration: 1 });
  tl.to(".box", { rotation: 360, duration: 3 });
  tl.to(".box", { xPercent: 350, duration: 1 });
});


// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Sometext from "./sometext";

// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".box",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         pinSpacing: false,
//         markers: false,
//       },
//     });

//     tl.to(".box", { y: 100, duration: 0.1 });

//     return () => ScrollTrigger.getById(".box")?.kill();
//   }, []);
//   return (
//     <div>
//       <h1>Scroll down to see the animation</h1>
//       <div className="container">
//         <div className="box"></div>
//         {/* Дополнительный контент */}
//         <div style={{ height: "200vh" }}>
//           {/* Дополнительный контент для создания прокрутки */}
//         </div>
//       </div>
//       <Sometext/>
//     </div>
//   );
// };

// export default App;

const Sometext = () => {
    return (
        <div style={{height: '200vh'}}>Hell world!</div>
    )
}

export default Sometext




useEffect(() => {
  gsap.to(".box", {
    y: 1000, // Adjust this value based on how far you want the box to move
    ease: "power1.inOut", // Choose the easing function
    duration: 0.1,
    scrollTrigger: {
      trigger: ".box",
      start: "top top",
      end: "+=1000", // Adjust this value based on how far you want the scroll to affect the animation
      scrub: true,
      markers: true, // You can remove this in production
    },
  });

  return () => ScrollTrigger.getById(".box")?.kill();
}, []);
return (
  <div>
    <h1>Scroll down to see the animation</h1>
    <div className="container">
      <div className="box" id="box"></div>
      {/* Дополнительный контент */}
      <div style={{ height: "400vh" }}>
        {/* Дополнительный контент для создания прокрутки */}
        assd
      </div>
    </div>
    {/* <Sometext/> */}
  </div>
);