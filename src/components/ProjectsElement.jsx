import { ContactElement } from "./ContactElement";
import { ProjectCard } from "./ProjectCard";

export const ProjectsElement = () => {
   return (
      <div className="mt-[101px]">
         <div className="flex flex-col gap-[]">
            {projects.map((project, idx) => (
               <a href={project.link} target="_blank" className="z-[999]">
                  <ProjectCard projectData={project} serial={idx + 1} />
               </a>
            ))}
         </div>
         <ContactElement />
      </div>
   );
};

const projects = [
   {
      title: "Homely",
      link: "https://homely-jet.vercel.app",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam est deleniti, et accusantium suscipit deserunt non eos exercitationem vitae, rerum labore quaerat nulla dolore, quisquam provident sequi. Cumque magnam doloribus tempore temporibus architecto.",
      imgSrc: "/img1-1.jpg",
   },
   {
      title: "Intercord",
      link: "https://intercord.vercel.app",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam est deleniti, et accusantium suscipit deserunt non eos exercitationem vitae, rerum labore quaerat nulla dolore, quisquam provident sequi. Cumque magnam doloribus tempore temporibus architecto.",
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
