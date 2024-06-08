import { forwardRef } from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = forwardRef(({ projects, id }, ref) => {
   return (
      <div
         className="mt-20 md:mt-0 py-20 md:py-0 flex gap-28 md:gap-0 flex-col"
         ref={ref}
      >
         {projects.map((project, idx) => {
            return (
               <ProjectCard
                  key={project.title}
                  projectData={project}
                  serial={idx + 1}
                  isInverted={idx % 2}
                  id={id}
               />
            );
         })}
      </div>
   );
});
