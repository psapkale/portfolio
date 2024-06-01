export const TechStackSection = () => {
   return (
      <div className="h-[120vh] grid place-content-center gap-10 px-20 bg-black">
         <h1 className="text-center text-[#f1f1f1] text-6xl font-[1000] drop-shadow-md mb-20">
            Skills
         </h1>
         <div className="w-[80%] mx-auto flex gap-10 flex-wrap items-center justify-around">
            {techStack.map((stack, idx) => (
               <div
                  key={stack.title}
                  className="px-10 py-6 rounded-xl text-lg font-bold text-[#f1f1f1] bg-[#111] z-10 transition-all duration-300 flex gap-4 items-center hover:bg-[#f1f1f1] hover:text-[#111]"
               >
                  <h1 className="pointer-events-none">{stack.title}</h1>
                  <img
                     src={stack.img}
                     alt={stack.title}
                     width={40}
                     height={40}
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
