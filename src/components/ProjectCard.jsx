export const ProjectCard = ({ projectData, serial, isInverted }) => {
   if (serial < 10) {
      serial = "0" + serial;
   }

   const leftContent = (
      <div className="w-[40%] h-full grid place-content-center relative">
         <h1
            className={`text-6xl text-sky-500 font-bold absolute ${
               isInverted ? "-right-6" : "-left-6"
            } top-2 -z-10 group-hover:text-orange-500 transition-colors duration-300`}
         >
            {serial}
         </h1>
         <div className="rounded-lg">
            <img
               src={projectData.imgSrc}
               alt={projectData.title}
               className="w-[600px] h-[300px] object-cover rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-400"
            />
            <div className="fadeBottom h-[5rem] relative bottom-[80px] right-0 rounded-b-3xl" />
         </div>
         <div
            className={`text-[60px] scale-y-110 scale-x-110 text-sky-500 font-bold absolute ${
               isInverted ? "-left-10" : "-right-10"
            } bottom-[90px] group-hover:text-orange-500 transition-colors duration-200 ease-in-out font-extrabold custom-text group-hover:custom-text-unset`}
         >
            {projectData.title}
         </div>
      </div>
   );

   const rightContent = (
      <div
         className={`w-[60%] h-full grid place-content-center px-[100px] ${
            isInverted ? "text-left" : "text-right"
         } text-xl text-[#111]`}
      >
         {projectData.description}
      </div>
   );

   return (
      <>
         <div className="w-full h-[90vh] flex items-center justify-between p-[80px] group">
            {isInverted ? (
               <>
                  {rightContent}
                  {leftContent}
               </>
            ) : (
               <>
                  {leftContent}
                  {rightContent}
               </>
            )}
         </div>
         <hr className="w-[80vw] mx-auto" />
      </>
   );
};
