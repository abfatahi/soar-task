import { useState, useEffect } from "react";

const isMobileScreen = () => window.matchMedia("(max-width: 768px)").matches;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(isMobileScreen());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileScreen());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
