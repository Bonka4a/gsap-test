// RainEffect.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RainEffect.css';

gsap.registerPlugin(ScrollTrigger);

const RainEffect = () => {
  useEffect(() => {
    const raindrops = document.querySelectorAll('.raindrop');


    

    raindrops.forEach((raindrop) => {
      gsap.set(raindrop, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0,
      });

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { duration: 5, ease: 'power1.inOut' }
      });

      tl.to(raindrop, { opacity: 1, duration: 5, y: '+=150', ease: 'linear' })
        .to(raindrop, { opacity: 0, duration: 5, y: '+=150', ease: 'linear' }, '-=0.75');

      ScrollTrigger.create({
        trigger: raindrop,
        start: 'top bottom',
        end: '+=100%',
        animation: tl,
        scrub: true,
        onEnter: () => {
          gsap.set(raindrop, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          });
        },
        onLeaveBack: () => {
          gsap.to(raindrop, { y: Math.random() * window.innerHeight, opacity: 0, duration: 5, });
        }
      });
    });
  }, []);

  return (
    <div className="rain-container">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="raindrop" />
      ))}
    </div>
  );
};

export default RainEffect;
