import { useEffect } from "react";
import { fadeIn, preLoaderAnim } from "../animations";

export const PreLoader = () => {
   useEffect(() => {
      preLoaderAnim();
   }, []);

   return (
      <div className="preloader h-screen w-full bg-black text-[#f0f0f0] fixed bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden z-50">
         <div className="preloader-container flex items-center justify-between h-[60px] w-[200px] text-[20px] font-[800] overflow-hidden">
            <span>Developer,</span>
            <span>Curator,</span>
            <span>Vibe.</span>
         </div>
      </div>
   );
};
