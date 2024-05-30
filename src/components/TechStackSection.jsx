export const TechStackSection = () => {
   return (
      <div className="h-screen grid place-content-center px-20 bg-[#111]">
         <div className="flex gap-10 flex-wrap items-center justify-around">
            {techStack.map((stack, idx) => (
               <div
                  key={stack.title}
                  className="px-10 py-6 rounded-xl text-lg font-bold bg-sky-500 hover:bg-black hover:text-[#f0f0f0] z-10 transition-all duration-200"
               >
                  <h1 className="pointer-events-none">{stack.title}</h1>
               </div>
            ))}
         </div>
      </div>
   );
};

const techStack = [
   {
      title: "HTML",
      img: "",
   },
   {
      title: "CSS",
      img: "",
   },
   {
      title: "TailwindCSS",
      img: "",
   },
   {
      title: "JavaScript",
      img: "",
   },
   {
      title: "TypeScript",
      img: "",
   },
   {
      title: "Java",
      img: "",
   },
   {
      title: "React",
      img: "",
   },
   {
      title: "Next",
      img: "",
   },
   {
      title: "Prisma",
      img: "",
   },
   {
      title: "PostgreSQL",
      img: "",
   },
   {
      title: "MongoDB",
      img: "",
   },
   {
      title: "NodeJs",
      img: "",
   },
   {
      title: "ExpressJs",
      img: "",
   },
];
