import { useEffect, useState } from "react";

export const useIsDesktop = (breakpoint = 600) => {
   const [isDesktop, setIsDesktop] = useState(
      document.body.clientWidth > breakpoint
   );

   useEffect(() => {
      // const handleResize = () => setIsDesktop(window.outerWidth > breakpoint);
      // window?.addEventListener("resize", handleResize);

      // return () => window?.removeEventListener("resize", handleResize);
      setIsDesktop(document.body.clientWidth > breakpoint);
   }, [document.body.clientWidth]);

   console.log(document.body.clientWidth);

   return isDesktop;
};
