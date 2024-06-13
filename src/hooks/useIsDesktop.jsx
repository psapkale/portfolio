import { useEffect, useState } from "react";

export const useIsDesktop = (breakpoint = 600) => {
   const [isDesktop, setIsDesktop] = useState(
      document.body.clientWidth > breakpoint
   );

   useEffect(() => {
      setIsDesktop(document.body.clientWidth > breakpoint);
   }, [document.body.clientWidth]);

   return isDesktop;
};
