import { useEffect, useState } from "react";
import { ContactElement } from "./ContactElement";
import { ProjectCard } from "./ProjectCard";

export const ProjectsElement = ({ id, socialRef, projectsRef }, ref) => {
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show");
         } else {
            entry.target.classList.remove("show");
         }
      });
   });

   useEffect(() => {
      const projectsElement = document.querySelectorAll(`#${id}`);
      projectsElement.forEach((el) => observer.observe(el));
   }, []);

   return (
      <div className="mt-[101px]">
         <div className="h-[90vh] grid place-content-center gap-10 text-center text-6xl">
            <h1 className="font-[1000] scale-y-[2.2] scale-x-[0.8] uppercase drop-shadow-lg">
               Recent Projects
            </h1>
            <h2 className="text-xl text-slate-800 mt-10">
               Check out some of the most recent projects I've had the <br />{" "}
               pleasure of working on.
            </h2>
         </div>
         <div className="flex flex-col" ref={projectsRef}>
            {projects.map((project, idx) => (
               <ProjectCard
                  key={project.title}
                  // ref={(el) => (projectsRef.current[idx] = el)}
                  projectData={project}
                  serial={idx + 1}
                  isInverted={idx % 2}
                  id={id}
               />
            ))}
         </div>
         <ContactElement ref={socialRef} />
      </div>
   );
};

export const projects = [
   {
      title: "Homely",
      link: "https://homely-jet.vercel.app",
      description:
         "Homely is an innovative web application developed using Next.js that mirrors the core functionalities of Airbnb, a leading online marketplace for lodging and tourism experiences. This meticulously crafted platform offers a spectrum of features, empowering users to seamlessly create listings, reserve accommodations, mark favorites, and engage in robust user authentication.",
      imgSrc: "/img1-1.jpg",
   },
   {
      title: "Intercord",
      link: "https://intercord.vercel.app",
      description:
         "Intercord is seamless examination platform which offers students an authenticated and powerful experience of exams. This platform aims to bring the power of technology at the students' desk.",
      imgSrc: "/img2-2.jpg",
   },
   {
      title: "Hunger Bites",
      link: "https://hunger-bites.vercel.app",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam est deleniti, et accusantium suscipit deserunt non eos exercitationem vitae, rerum labore quaerat nulla dolore, quisquam provident sequi. Cumque magnam doloribus tempore temporibus architecto.",
      imgSrc: "/img3-3.jpg",
   },
];
