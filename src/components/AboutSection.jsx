import { WaterDropGrid } from "./WaterDropGrid";

export const AboutSection = () => {
   return (
      <div className="h-screen flex items-center justify-center my-10 mb-40 px-28 text-left relative">
         <div className="z-10">
            <h1 className="w-fit text-[80px] font-[1000] text-slate-950">
               Namaste🙏
            </h1>
            <p className="text-4xl font-[400] mt-10 w-2/3">
               I'm Prem Sapkale, an aspiring FullStack Developer who aims to
               create immersive experience on the internet.
            </p>
         </div>
         <div className="absolute top-auto right-0">
            <WaterDropGrid gridWidth={28} gridHeight={56} />
         </div>
      </div>
   );
};
