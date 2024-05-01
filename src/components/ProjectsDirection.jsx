import gsap from "gsap";
import { useEffect, useRef } from "react";

export const ProjectsDirection = () => {
   // useEffect(() => {
   //    // document.addEventListener("DOMContentLoaded", function () {
   //    const imageSources = [
   //       "/img1.png",
   //       "/img2.png",
   //       "/img3.png",
   //       "/img4.png",
   //       "/img5.png",
   //    ];

   //    const menuItems = document.querySelectorAll(".menu-item");

   //    menuItems.forEach((item) => {
   //       const copyElement = item.querySelectorAll(".info, .name, .tag");

   //       copyElement.forEach((div) => {
   //          const copy = div.querySelector("p");

   //          if (copy) {
   //             const duplicateCopy = document.createElement("p");
   //             duplicateCopy.textContent = copy.textContent;
   //             div.appendChild(duplicateCopy);
   //          }
   //       });
   //    });

   //    const appendImages = (src) => {
   //       const preview1 = document.querySelector(".preview-img-1");
   //       const preview2 = document.querySelector(".preview-img-2");

   //       const img1 = document.createElement("img");
   //       const img2 = document.createElement("img");

   //       img1.src = src;
   //       img1.style.clipPath =
   //          "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
   //       img2.src = src;
   //       img2.style.clipPath =
   //          "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

   //       preview1.appendChild(img1);
   //       preview2.appendChild(img2);

   //       gsap.to([img1, img2], {
   //          clipPath: "polygon(0%, 100%, 100% 100%, 100% 0%, 0% 0%)",
   //          duration: 1,
   //          ease: "power3.out",
   //          onComplete: function () {
   //             removeExtraImages(preview1);
   //             removeExtraImages(preview2);
   //          },
   //       });
   //    };

   //    function removeExtraImages(container) {
   //       while (container.children.length > 10) {
   //          container.removeChild(container.firstChild);
   //       }
   //    }

   //    document.querySelectorAll(".menu-item").forEach((item, index) => {
   //       item.addEventListener("mouseover", function () {
   //          mouseOverAnimation(item);
   //          appendImages(imageSources[index]);
   //       });

   //       item.addEventListener("mouseout", function () {
   //          mouseOutAnimation(item);
   //       });
   //    });

   //    const mouseOverAnimation = (elem) => {
   //       gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
   //          top: "-100%",
   //          duration: 0.3,
   //       });
   //       gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
   //          top: "0%",
   //          duration: 0.3,
   //       });
   //    };

   //    const mouseOutAnimation = (elem) => {
   //       gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
   //          top: "0%",
   //          duration: 0.3,
   //       });
   //       gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
   //          top: "100%",
   //          duration: 0.3,
   //       });
   //    };

   //    document.querySelector(".menu").addEventListener("mouseout", function () {
   //       gsap.to(".preview-img img", {
   //          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
   //          duration: 1,
   //          ease: "power3.out",
   //       });
   //    });

   //    document.addEventListener("mousemove", function (e) {
   //       const preview = document.querySelector(".preview");

   //       gsap.to(preview, {
   //          x: e.clientX,
   //          y: e.clientY,
   //          duration: 1,
   //          ease: "power3.out",
   //       });
   //    });
   //    // });
   // }, []);

   const imageSources = [
      "/img1.png",
      "/img2.png",
      "/img3.png",
      "/img4.png",
      "/img5.png",
   ];

   const menuItemsRefs = useRef([]);
   const preview1Ref = useRef(null);
   const preview2Ref = useRef(null);
   const previewRef = useRef(null);

   const appendImages = (src) => {
      const img1 = createImage(src);
      const img2 = createImage(src);

      [preview1Ref.current, preview2Ref.current].forEach((preview) => {
         preview.appendChild(img1.cloneNode(true));
         preview.appendChild(img2.cloneNode(true));
      });

      gsap.to([img1, img2], {
         clipPath: "polygon(0%, 100%, 100% 100%, 100% 0%, 0% 0%)",
         duration: 1,
         ease: "power3.out",
         onComplete: () => {
            [preview1Ref.current, preview2Ref.current].forEach(
               removeExtraImages
            );
         },
      });
   };

   const createImage = (src) => {
      const img = document.createElement("img");
      img.src = src;
      img.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
      return img;
   };

   const removeExtraImages = (container) => {
      while (container.children.length > 10) {
         container.removeChild(container.firstChild);
      }
   };

   const mouseOverAnimation = (elem) => {
      gsap.to(elem.querySelectorAll("p:nth-child(1), p:nth-child(2)"), {
         top: (index) => (index === 0 ? "-100%" : "0%"),
         duration: 0.3,
      });
   };

   const mouseOutAnimation = (elem) => {
      gsap.to(elem.querySelectorAll("p:nth-child(1), p:nth-child(2)"), {
         top: (index) => (index === 0 ? "0%" : "100%"),
         duration: 0.3,
      });
   };

   const menuMouseOverHandler = (item, index) => {
      mouseOverAnimation(item);
      appendImages(imageSources[index]);
   };

   const menuMouseOutHandler = (item) => {
      mouseOutAnimation(item);
   };

   const menuMouseOutAllHandler = () => {
      gsap.to(".preview-img img", {
         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
         duration: 1,
         ease: "power3.out",
      });
   };

   const mouseMoveHandler = (e) => {
      const previewElement = previewRef.current;
      gsap.to(previewElement, {
         x: e.clientX,
         y: e.clientY,
         duration: 1,
         ease: "power3.out",
      });
   };

   useEffect(() => {
      const registerHandlers = () => {
         menuItemsRefs.current.forEach((item, index) => {
            item.addEventListener("mouseover", () =>
               menuMouseOverHandler(item, index)
            );
            item.addEventListener("mouseout", () => menuMouseOutHandler(item));
         });

         document
            .querySelector(".menu")
            .addEventListener("mouseout", menuMouseOutAllHandler);
         document.addEventListener("mousemove", mouseMoveHandler);
      };

      registerHandlers();

      // Cleanup
      return () => {
         menuItemsRefs.current.forEach((item) => {
            item.removeEventListener("mouseover", () =>
               menuMouseOverHandler(item)
            );
            item.removeEventListener("mouseout", () =>
               menuMouseOutHandler(item)
            );
         });

         document
            .querySelector(".menu")
            .removeEventListener("mouseout", menuMouseOutAllHandler);
         document.removeEventListener("mousemove", mouseMoveHandler);
      };
   }, []);

   return (
      <div className="container text-slate-400 w-full h-full">
         <div
            className="preview absolute top-0 left-0 w-[225px] h-[275px] z-[2] pointer-events-none"
            ref={previewRef}
         >
            <div
               className="preview-img absolute w-full h-full preview-img-1"
               ref={preview1Ref}
            ></div>
            <div
               className="preview-img absolute w-full h-full preview-img-2 top-[20px] left-[20px]"
               ref={preview2Ref}
            ></div>
         </div>
         {/* <div className="menu w-full my-[20em] mx-0">
            <div className="menu-item w-full py-0 px-[2em] flex cursor-pointer">
               <div
                  className="info relative overflow-hidden h-[14px] text-[14px]"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Puma POV
                  </p>
               </div>
               <div
                  className="name relative overflow-hidden h-[60px] text-[60px] text-center"
                  style={{
                     flex: 4,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Breathing Video Experience
                  </p>
               </div>
               <div
                  className="tag relative overflow-hidden h-[14px] text-[14px] text-right"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Creative Design
                  </p>
               </div>
            </div>
            <div className="menu-item w-full py-0 px-[2em] flex cursor-pointer">
               <div
                  className="info relative overflow-hidden h-[14px] text-[14px]"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Jarvis
                  </p>
               </div>
               <div
                  className="name relative overflow-hidden h-[60px] text-[60px] text-center"
                  style={{
                     flex: 4,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Jarvis Noir Show
                  </p>
               </div>
               <div
                  className="tag relative overflow-hidden h-[14px] text-[14px] text-right"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Event
                  </p>
               </div>
            </div>
            <div className="menu-item w-full py-0 px-[2em] flex cursor-pointer">
               <div
                  className="info relative overflow-hidden h-[14px] text-[14px]"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Puma
                  </p>
               </div>
               <div
                  className="name relative overflow-hidden h-[60px] text-[60px] text-center"
                  style={{
                     flex: 4,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     DPSC x Puma
                  </p>
               </div>
               <div
                  className="tag relative overflow-hidden h-[14px] text-[14px] text-right"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Creative Concept
                  </p>
               </div>
            </div>
            <div className="menu-item w-full py-0 px-[2em] flex cursor-pointer">
               <div
                  className="info relative overflow-hidden h-[14px] text-[14px]"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Grid
                  </p>
               </div>
               <div
                  className="name relative overflow-hidden h-[60px] text-[60px] text-center"
                  style={{
                     flex: 4,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Grid 7 Years
                  </p>
               </div>
               <div
                  className="tag relative overflow-hidden h-[14px] text-[14px] text-right"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Art Direction
                  </p>
               </div>
            </div>
            <div className="menu-item w-full py-0 px-[2em] flex cursor-pointer">
               <div
                  className="info relative overflow-hidden h-[14px] text-[14px]"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Puma
                  </p>
               </div>
               <div
                  className="name relative overflow-hidden h-[60px] text-[60px] text-center"
                  style={{
                     flex: 4,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Puma Music Battle
                  </p>
               </div>
               <div
                  className="tag relative overflow-hidden h-[14px] text-[14px] text-right"
                  style={{
                     flex: 1,
                  }}
               >
                  <p
                     className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                     style={{
                        letterSpacing: "-0.02em",
                     }}
                  >
                     Direction
                  </p>
               </div>
            </div>
         </div> */}
         <div className="menu w-full my-[20em] mx-0">
            {menuItemsData.map((item, index) => (
               <div
                  key={index}
                  className="menu-item w-full py-0 px-[2em] flex cursor-pointer"
                  ref={(el) => (menuItemsRefs.current[index] = el)}
               >
                  {Object.entries(item).map(([key, value]) => (
                     <div
                        key={key}
                        className={`${key} relative overflow-hidden h-[${value.height}] text-[${value.fontSize}] ${value.alignment}`}
                        style={{ flex: value.flex }}
                     >
                        <p
                           className="absolute top-0 w-full font-[500] uppercase leading-[100%] transition-colors duration-200"
                           style={{ letterSpacing: "-0.02em" }}
                        >
                           {value.content}
                        </p>
                     </div>
                  ))}
               </div>
            ))}
         </div>
      </div>
   );
};

const menuItemsData = [
   {
      info: {
         content: "Puma POV",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-center",
         flex: 1,
      },
      name: {
         content: "Breathing Video Experience",
         height: "60px",
         fontSize: "60px",
         alignment: "justify-center",
         flex: 4,
      },
      tag: {
         content: "Creative Design",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-end",
         flex: 1,
      },
   },
   {
      info: {
         content: "Jarvis",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-center",
         flex: 1,
      },
      name: {
         content: "Jarvis Noir Show",
         height: "60px",
         fontSize: "60px",
         alignment: "justify-center",
         flex: 4,
      },
      tag: {
         content: "Event",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-end",
         flex: 1,
      },
   },
   {
      info: {
         content: "Puma",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-center",
         flex: 1,
      },
      name: {
         content: "DPSC x Puma",
         height: "60px",
         fontSize: "60px",
         alignment: "justify-center",
         flex: 4,
      },
      tag: {
         content: "Creative Concept",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-end",
         flex: 1,
      },
   },
   {
      info: {
         content: "Grid",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-center",
         flex: 1,
      },
      name: {
         content: "Grid 7 Years",
         height: "60px",
         fontSize: "60px",
         alignment: "justify-center",
         flex: 4,
      },
      tag: {
         content: "Art Direction",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-end",
         flex: 1,
      },
   },
   {
      info: {
         content: "Puma",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-center",
         flex: 1,
      },
      name: {
         content: "Puma Music Battle",
         height: "60px",
         fontSize: "60px",
         alignment: "justify-center",
         flex: 4,
      },
      tag: {
         content: "Direction",
         height: "14px",
         fontSize: "14px",
         alignment: "justify-end",
         flex: 1,
      },
   },
   // Add more menu items as needed
];
