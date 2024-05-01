import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Header } from "./Header";

export const BlockReveal = () => {
   const counterRef = useRef(null);

   function startLoader() {
      let currentValue = 0;
      function updateCounter() {
         if (currentValue === 100) {
            return;
         }

         currentValue += Math.floor(Math.random() * 10) + 1;

         if (currentValue > 100) {
            currentValue = 100;
         }

         counterRef.current.innerText = currentValue;

         let delay = Math.floor(Math.random() * 200) + 50;
         setTimeout(updateCounter, delay);
      }

      updateCounter();
   }

   useEffect(() => {
      startLoader();

      // 0.25
      gsap.to(".counter", {
         delay: 3.5,
         opacity: 0,
      });

      // 1.5
      gsap.to(".bar", {
         delay: 3.5,
         height: 0,
         stagger: {
            amount: 0.5,
         },
         ease: "power4.inOut",
      });
   }, []);

   return (
      <div className="z-[99999]">
         <div
            className="counter fixed bottom-0 right-0 w-full h-full flex justify-end items-end z-[99999] text-[rgb(148,163,184)] px-[0.4em] text-[20vw] font-mono"
            ref={counterRef}
         >
            0
         </div>
         <div className="overlay fixed w-screen h-screen z-[2] flex">
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
            <div className="bar w-[10vw] h-[105vh] bg-[#1a1a1a]"></div>
         </div>

         <Header />
      </div>
   );
};
