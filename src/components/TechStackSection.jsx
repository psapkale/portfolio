import { useEffect } from "react";
import { useIsDesktop } from "../hooks/useIsDesktop";
export const TechStackSection = () => {
   const isDesktop = useIsDesktop(600);
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("tech-show");
         } else {
            entry.target.classList.remove("tech-show");
         }
      });
   });

   useEffect(() => {
      const techElement = document.querySelectorAll(`#techElement`);
      techElement.forEach((el) => observer.observe(el));
   }, []);

   return (
      <div className="h-[120vh] grid place-content-center gap-6 lg:gap-10 px-2 lg:px-20 bg-black">
         <h1 className="text-center text-[#f1f1f1] text-6xl font-[1000] drop-shadow-md mb-2 sm:mb-20">
            Skills
         </h1>
         <div className="w-full sm:w-[80%] mx-auto flex gap-4 sm:gap-10 flex-wrap items-center justify-center">
            {techStack.map((stack, idx) => (
               <div
                  id={`techElement`}
                  key={stack.title}
                  className="px-4 sm:px-10 py-[12px] sm:py-6 rounded-xl text-lg font-bold text-[#f1f1f1] bg-[#111] z-10 transition-all duration-300 flex gap-2 sm:gap-4 items-center hover:bg-[#f1f1f1] hover:text-[#111] tech-hidden"
               >
                  <h1 className="pointer-events-none">{stack.title}</h1>
                  <img
                     src={stack.img}
                     alt={stack.title}
                     width={!isDesktop ? 30 : 40}
                     height={!isDesktop ? 30 : 40}
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

const techStack = [
   {
      title: "HTML",
      img: "/html.jpg",
   },
   {
      title: "CSS",
      img: "/css.jpg",
   },
   {
      title: "TailwindCSS",
      img: "/tailwind.svg",
   },
   {
      title: "JavaScript",
      img: "/javascript.jpg",
   },
   {
      title: "TypeScript",
      img: "/typescript.svg",
   },
   {
      title: "Java",
      img: "/java.svg",
   },
   {
      title: "React",
      img: "/react.svg",
   },
   {
      title: "Next",
      img: "/next.jpg",
   },
   {
      title: "Prisma",
      img: "/prisma.svg",
   },
   {
      title: "PostgreSQL",
      img: "/postgresql.jpg",
   },
   {
      title: "MongoDB",
      img: "/mongodb.svg",
   },
   {
      title: "NodeJs",
      img: "/nodejs.svg",
   },
   {
      title: "ExpressJs",
      img: "/expressjs.svg",
   },
];
