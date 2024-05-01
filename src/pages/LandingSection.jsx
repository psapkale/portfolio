import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { gsap } from "gsap";

export const LandingSection = () => {
   useEffect(() => {
      const t1 = gsap.timeline({ delay: 1.75 });
      const movements = [-100, 300, 150, -300, -90, 100, -200];

      gsap.set("h1", { y: 100 });
      gsap.set(".counter p", { y: 35 });

      t1.to("h1", {
         y: 0,
         duration: 1,
         ease: "power3.out",
         stagger: 0.1,
      });

      return () => {
         t1.revert();
      };
   }, []);

   return (
      <div className="container repeat:false w-screen h-screen overflow-hidden">
         <footer>
            <p>&copy;2024</p>
            <p>Scroll to explore</p>
         </footer>
         <Hero />
      </div>
   );
};
