import { ContactElement } from "./ContactElement";
import { ProjectCard } from "./ProjectCard";

export const ProjectsElement = () => {
   return (
      <div className="mt-[101px]">
         <div className="h-[90vh] grid place-content-center gap-10 text-center text-6xl">
            <h1 className="font-[1000] scale-y-[2.2] scale-x-[0.8] uppercase">
               Recent Projects
            </h1>
            <h2 className="text-xl text-slate-800 mt-10">
               Check out some of the most recent projects I've had the <br />{" "}
               pleasure of working on.
            </h2>
         </div>
         <div className="flex flex-col">
            {projects.map((project, idx) => (
               <a href={project.link} target="_blank" className="z-10">
                  <ProjectCard
                     key={project.title}
                     projectData={project}
                     serial={idx + 1}
                     isInverted={idx % 2}
                  />
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
