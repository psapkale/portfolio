import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

export const ProjectsMini = ({ id }) => {
   const menuItemRef = useRef([]);
   const preview1Ref = useRef(null);
   const preview2Ref = useRef(null);
   const previewRef = useRef(null);

   const [imageSources] = useState([
      "img1-1.jpg",
      "img4-4.jpg",
      "img2-2.jpg",
      "img3-3.jpg",
   ]);

   const appendImages = (src) => {
      if (!preview1Ref.current || !preview2Ref.current) return;

      const img1 = document.createElement("img");
      const img2 = document.createElement("img");

      img1.src = src;
      img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
      img2.src = src;
      img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

      preview1Ref.current.appendChild(img1);
      preview2Ref.current.appendChild(img2);

      gsap.to([img1, img2], {
         clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
         duration: 1,
         ease: "power3.out",
         onComplete: () => {
            removeExtraImages(preview1Ref.current);
            removeExtraImages(preview2Ref.current);
         },
      });
   };

   const removeExtraImages = (container) => {
      while (container.children.length > 10) {
         container.removeChild(container.firstChild);
      }
   };

   const handleMouseOver = (index) => {
      const item = menuItemRef.current[index];
      if (item) {
         mouseOverAnimation(item);
         appendImages(imageSources[index]);
      }
   };

   const handleMouseOut = (index) => {
      const item = menuItemRef.current[index];
      if (item) {
         mouseOutAnimation(item);
      }
   };

   const mouseOverAnimation = (elem) => {
      gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
         top: "-100%",
         duration: 0.3,
      });
      gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
         top: "0%",
         duration: 0.3,
      });
   };

   const mouseOutAnimation = (elem) => {
      gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
         top: "0%",
         duration: 0.3,
      });
      gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
         top: "100%",
         duration: 0.3,
      });
   };

   const handlePreviewMouseOut = () => {
      gsap.to(".preview-img img", {
         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
         duration: 1,
         ease: "power3.out",
      });
   };

   const handlePreviewMouseMove = (e) => {
      if (!previewRef.current) return;
      gsap.to(previewRef.current, {
         x: e.clientX + 200,
         y: e.clientY + document.documentElement.scrollHeight - 2800,
         duration: 1,
         ease: "power3.out",
      });
   };

   return (
      <div
         className="container h-[100dvh]"
         onMouseMoveCapture={handlePreviewMouseMove}
      >
         <div
            className="preview absolute top-0 left-0 w-[500px] h-[250px] z-10 pointer-events-none"
            ref={previewRef}
         >
            <div
               className="preview-img absolute w-[100%] h-[100%] preview-img-1"
               ref={preview1Ref}
            ></div>
            <div
               className="preview-img absolute w-[100%] h-[100%] preview-img-2 top-[20px] left-[20px]"
               ref={preview2Ref}
            ></div>
         </div>

         <div
            className="menu w-screen my-[20em]"
            onMouseOut={handlePreviewMouseOut}
            id={id}
         >
            {menuItems.map((item, idx) => (
               <a
                  href={item.link}
                  className="menu-item w-[100%] px-[0.6em] sm:px-[2em] flex items-center cursor-pointer"
                  key={idx}
                  ref={(el) => (menuItemRef.current[idx] = el)}
                  onMouseOver={() => handleMouseOver(idx)}
                  onMouseOut={() => handleMouseOut(idx)}
               >
                  <div className="info relative text-[#111] overflow-hidden flex-[1] h-[12px] sm:h-[14px] text-[12px] sm:text-[14px]">
                     <p>{item.info}</p>
                     <p className="text-[#111]">{item.info}</p>
                  </div>
                  <div className="name relative text-[#111] overflow-hidden flex-[4] h-[30px] sm:h-[70px] text-[20px] text-nowrap sm:text-[60px] text-center">
                     <p>{item.name}</p>
                     <p className="text-[#111]">{item.name}</p>
                  </div>
                  <div className="tag relative text-[#111] overflow-hidden flex-[1] h-[12px] sm:h-[14px] text-[12px] sm:text-[14px] text-right">
                     <p>{item.tag}</p>
                     <p className="text-[#111]">{item.tag}</p>
                  </div>
               </a>
            ))}
         </div>
      </div>
   );
};

const menuItems = [
   {
      info: "Homely",
      name: "Immersive Booking Experience",
      tag: "Elegance",
      link:
         import.meta.env.MODE === "DEVELOPMENT"
            ? `${import.meta.env.DEVELOPMENT_URL}/projects#homely`
            : `${import.meta.env.PRODUCTION_URL}/projects#homely`,
   },
   {
      info: "Conception",
      name: "Productivity at peak",
      tag: "Beauty",
      link:
         import.meta.env.MODE === "DEVELOPMENT"
            ? `${import.meta.env.DEVELOPMENT_URL}/projects#conception`
            : `${import.meta.env.PRODUCTION_URL}/projects#conception`,
   },
   {
      info: "Intercord",
      name: "MCQ Examination System",
      tag: "Power",
      link:
         import.meta.env.MODE === "DEVELOPMENT"
            ? `${import.meta.env.DEVELOPMENT_URL}/projects#intercord`
            : `${import.meta.env.PRODUCTION_URL}/projects#intercord`,
   },
   {
      info: "Hunger Bites",
      name: "Food Point",
      tag: "Lightening Fast",
      link:
         import.meta.env.MODE === "DEVELOPMENT"
            ? `${import.meta.env.DEVELOPMENT_URL}/projects#hunger-bites`
            : `${import.meta.env.PRODUCTION_URL}/projects#hunger-bites`,
   },
   // {
   //    info: "Grid",
   //    name: "Grid 7 Years",
   //    tag: "Art Direction",
   // },
   // {
   //    info: "Puma",
   //    name: "Puma Music Battle",
   //    tag: "Direction",
   // },
];
