import { useEffect, useRef, useState } from "react";
import { ContactElement } from "./ContactElement";
import { ProjectsSection } from "./ProjectsSection";

const ProjectsElement = ({ id, socialRef, projectsRef }, ref) => {
   const observer = useRef(null);

   useEffect(() => {
      observer.current = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("show");
            } else {
               entry.target.classList.remove("show");
            }
         });
      });

      const projectsElement = document.querySelectorAll(`#${id}`);
      projectsElement.forEach((el) => observer.current.observe(el));

      return () => {
         if (observer.current) {
            observer.current.disconnect();
         }
      };
   }, [id]);

   return (
      <div className="mt-[101px]">
         <div className="h-[90dvh] grid place-content-center gap-10 text-center text-6xl">
            <h1 className="font-[1000] scale-y-[2.2] scale-x-[0.8] uppercase drop-shadow-lg">
               Recent Projects
            </h1>
            <h2 className="text-xl text-slate-800 mt-10">
               Check out some of the most recent projects I've had the <br />{" "}
               pleasure of working on.
            </h2>
         </div>
         <ProjectsSection projects={projects} id={id} ref={projectsRef} />
         <ContactElement ref={socialRef} />
      </div>
   );
};

export default ProjectsElement;

export const projects = [
   {
      title: "Homely",
      link: "https://homely-jet.vercel.app",
      description:
         "Homely is an innovative web application developed using Next.js that mirrors the core functionalities of Airbnb, a leading online marketplace for lodging and tourism experiences. This meticulously crafted platform offers a spectrum of features, empowering users to seamlessly create listings, reserve accommodations, mark favorites, and engage in robust user authentication.",
      imgSrc: "/homely.jpg",
   },
   {
      title: "Conception",
      link: "https://theconception.vercel.app",
      description:
         "Conception, a visionary platform inspired by Notion's brilliance, brings organization and productivity to the forefront. Built with Next.js prowess, it mirrors its predecessor's essence flawlessly. From crafting scalable code to optimizing client-side performance, Conception ensures a seamless user experience.",
      imgSrc: "/conception.jpg",
   },
   {
      title: "Intercord",
      link: "https://intercord.vercel.app",
      description:
         "Intercord is seamless examination platform which offers students an authenticated and powerful experience of exams. This platform aims to bring the power of technology at the students' desk.",
      imgSrc: "/intercord.jpg",
   },
   {
      title: "Hunger Bites",
      link: "https://hunger-bites.vercel.app",
      description:
         "Hunger Bites, a dynamic platform inspired by the success of Swiggy, brings convenience and flavor to your fingertips. Built with cutting-edge technology React.js, Hunger Bites offers a delightful experience akin to its predecessor. From browsing a diverse array of restaurants to swift and awesome cart feature, Hunger Bites ensures that your cravings are met with efficiency and satisfaction.This innovative clone mirrors Swiggy's essence, making it your go-to destination for culinary adventures.",
      imgSrc: "/hunger-bites.jpg",
   },
];
