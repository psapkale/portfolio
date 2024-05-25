import gsap from "gsap";
import { useRef } from "react";
import { useState } from "react";
import "./styles.css";

export const Projects = ({ id }) => {
   const menuItemRef = useRef([]);

   const [imageSources] = useState(["img1-1.jpg", "img2-2.jpg", "img3-3.jpg"]);

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
         y: e.clientY + 800,
         duration: 1,
         ease: "power3.out",
      });
   }

   return (
      <div className="container" onMouseMoveCapture={handlePreviewMouseMove}>
         <div className="preview">
            <div className="preview-img preview-img-1"></div>
            <div className="preview-img preview-img-2"></div>
         </div>

         <div className="menu" onMouseOut={handlePreviewMouseOut} id={id}>
            {menuItems.map((item, idx) => (
               <div
                  className="menu-item"
                  key={idx}
                  ref={(el) => (menuItemRef.current[idx] = el)}
                  onMouseOver={() =>
                     handleMouseOver(menuItemRef.current[idx], idx)
                  }
                  onMouseOut={() => handleMouseOut(menuItemRef.current[idx])}
               >
                  <div className="info">
                     <p>{item.info}</p>
                     <p>{item.info}</p>
                  </div>
                  <div className="name">
                     <p>{item.name}</p>
                     <p>{item.name}</p>
                  </div>
                  <div className="tag">
                     <p>{item.tag}</p>
                     <p>{item.tag}</p>
                  </div>
               </div>
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
   },
   {
      info: "Intercord",
      name: "MCQ Examination System",
      tag: "Power",
   },
   {
      info: "Hunger Bites",
      name: "Food Point",
      tag: "Lightening Fast",
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
