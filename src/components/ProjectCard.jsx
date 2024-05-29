export const ProjectCard = ({ projectData, serial }) => {
   if (serial < 10) {
      serial = "0" + serial;
   }

   return (
      <div className="w-full h-[90vh] flex items-center justify-between p-[80px]">
         <div className="w-[40%] h-full grid place-content-center relative group">
            <h1 className="text-6xl text-sky-500 font-bold absolute top-2 -left-6 z-[-2] group-hover:text-orange-500 transition-colors duration-300">
               {serial}
            </h1>
            <div className="rounded-lg">
               <img
                  src={projectData.imgSrc}
                  alt={projectData.title}
                  className="w-[600px] h-[300px] object-cover rounded-3xl shadow-lg"
               />
               <div className="fadeBottom h-[5rem] relative bottom-[80px] right-0 rounded-b-3xl" />
            </div>
            <div className="text-[60px] scale-y-110 scale-x-110 text-sky-500 font-bold absolute bottom-[100px] -right-10 group-hover:text-orange-500 transition-colors duration-200 ease-in-out">
               {projectData.title}
            </div>
         </div>
         <div className="w-[60%] h-full grid place-content-center px-[100px] text-right text-xl text-[#111]">
            {projectData.description}
         </div>
      </div>
   );
};
