import { WaterDropGrid } from "./WaterDropGrid";

export const AboutSection = () => {
   return (
      <div className="h-screen flex items-center justify-center my-10 mb-40 px-28 text-left relative">
         <div className="z-10">
            <h1 className="w-fit text-[80px] font-[1000] text-slate-950 drop-shadow-lg">
               Namaste🙏
            </h1>
            <p className="text-2xl font-[600] mt-8 w-2/3">
               Hellow, I'm Prem Sapkale, an curious FullStack Developer who
               enjoys creating immersive experience on the internet. I develop
               exceptional websites and web apps that provide intutive,
               pixel-perfect user interfaces.
            </p>
         </div>
         <div className="absolute top-auto right-0">
            <WaterDropGrid gridWidth={28} gridHeight={56} />
         </div>
      </div>
   );
};
