import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Pace } from "pace-js";
import styles from "./styles.css";

const paceOptions = {
   ajax: true,
   document: true,
};

export const PreLoader = () => {
   useEffect(() => {
      Pace.on("done", () => {
         gsap
            .timeline()
            .add("p")
            .to(
               ".pace",
               {
                  transform: "scale(10, 1)",
                  duration: 4,
               },
               "+=.2"
            )
            .to(
               ".pace",
               {
                  duration: 1,
                  height: "100%",
               },
               "-=2.5"
            )
            .to(
               ".loading__text",
               {
                  delay: 0.2,
                  duration: 3,
                  opacity: 0,
                  yPercent: -400,
                  ease: "BezierEasing(0.19,1,0.22,1)",
               },
               "p"
            )
            .to(
               ".title",
               {
                  duration: 2,
                  delay: 0.3,
                  y: -10,
                  opacity: 1,
                  ease: "Expo.easeInOut",
               },
               "-=2.5"
            );
      });
   }, []);
   return (
      <>
         <div className={styles.title}>Code with Steve</div>
         <div id="preloader">
            <div className={styles.loading__text}>LOADING</div>
         </div>
      </>
   );
};
