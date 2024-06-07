import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "./styles.css";

export const ProjectsMini = ({ id }) => {
   const menuItemRef = useRef([]);
   const scrollHeight = document.documentElement.scrollHeight;

   const [imageSources] = useState([
      "img1-1.jpg",
      "img4-4.jpg",
      "img2-2.jpg",
      "img3-3.jpg",
   ]);

   const appendImages = (src) => {
      const preview1 = document.querySelector(".preview-img-1");
      const preview2 = document.querySelector(".preview-img-2");

      const img1 = document.createElement("img");
      const img2 = document.createElement("img");

      img1.src = src;
      img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
      img2.src = src;
      img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

      preview1.appendChild(img1);
      preview2.appendChild(img2);

      gsap.to([img1, img2], {
         clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
         duration: 1,
         ease: "power3.out",
         onComplete: function () {
            removeExtraImages(preview1);
            removeExtraImages(preview2);
         },
      });
   };

   // TODO implement image optimization
   function removeImages() {
      const preview1 = document.querySelector(".preview-img-1");
      const preview2 = document.querySelector(".preview-img-2");

      const img1 = document.querySelector(".preview-img-1 > img");
      const img2 = document.querySelector(".preview-img-2 > img");

      preview1.removeChild(img1);
      preview2.removeChild(img2);
   }

   function removeExtraImages(container) {
      while (container.children.length > 10) {
         container.removeChild(container.firstChild);
      }
   }

   function handleMouseOver(item, index) {
      mouseOverAnimation(item);
      appendImages(imageSources[index]);
   }

   function handleMouseOut(item) {
      mouseOutAnimation(item);
   }

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

   function handlePreviewMouseOut() {
      gsap.to(".preview-img img", {
         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
         duration: 1,
         ease: "power3.out",
      });
   }

   function handlePreviewMouseMove(e) {
      const preview = document.querySelector(".preview");
      gsap.to(preview, {
         x: e.clientX + 200,
         y: e.clientY + scrollHeight - 2800,
         duration: 1,
         ease: "power3.out",
      });
   }

   return (
      <div
         className="container h-[100vh]"
         onMouseMoveCapture={handlePreviewMouseMove}
      >
         <div className="preview absolute top-0 left-0 w-[500px] h-[250px] z-10 pointer-events-none">
            <div className="preview-img absolute w-[100%] h-[100%] preview-img-1"></div>
            <div className="preview-img absolute w-[100%] h-[100%] preview-img-2 top-[20px] left-[20px]"></div>
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
                  onMouseOver={() =>
                     handleMouseOver(menuItemRef.current[idx], idx)
                  }
                  onMouseOut={() => handleMouseOut(menuItemRef.current[idx])}
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
      link: "http://localhost:5173/projects#homely",
   },
   {
      info: "Conception",
      name: "Productivity at peak",
      tag: "Beauty",
      link: "http://localhost:5173/projects#conception",
   },
   {
      info: "Intercord",
      name: "MCQ Examination System",
      tag: "Power",
      link: "http://localhost:5173/projects#intercord",
   },
   {
      info: "Hunger Bites",
      name: "Food Point",
      tag: "Lightening Fast",
      link: "http://localhost:5173/projects#hunger-bites",
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
