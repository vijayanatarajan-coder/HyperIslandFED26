import { useEffect } from "react";

export const useIsMobile = () => {
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 499;
      console.log(isMobile);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
