import gsap from "gsap";
import React, { useRef } from "react";
import { useEffect } from "react";

export const GsapMagnetic = ({ children }) => {
   const ref = useRef(null);
   const cursorRef = useRef(null);

   useEffect(() => {
      const mouseMove = (e) => {
         const { clientX, clientY } = e;
         const { width, height, left, top } =
            ref.current.getBoundingClientRect();
         console.log(width, height);
         const x = clientX - (left + width / 2);
         const y = clientY - (top + height / 2);
         gsap.to(ref.current, { x: x });
         gsap.to(ref.current, { y: y });
         cursorRef.current.style.left = `${x}px`;
         cursorRef.current.style.top = `${y}px`;
      };

      const mouseLeave = (e) => {
         gsap.to(ref.current, { x: 0 });
         gsap.to(ref.current, { y: 0 });
      };

      ref.current.addEventListener("mousemove", mouseMove);
      ref.current.addEventListener("mouseleave", mouseLeave);

      return () => {
         ref.current.removeEventListener("mousemove", mouseMove);
         ref.current.removeEventListener("mouseleave", mouseLeave);
      };
   }, []);

   return React.cloneElement(children, { ref });
};
