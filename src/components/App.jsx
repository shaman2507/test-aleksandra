import { useEffect, useState } from "react";
import "./App.css";
import BannerTop from "./BannerTop/BannerTop";
import BannerBottom from "./BannerBottom/BannerBottom";


export const App = () => {
  const [showBannerBottom, setshowBannerBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerDistance = 150;
      const isScrollPastTrigger = window.scrollY > triggerDistance;
      setshowBannerBottom(isScrollPastTrigger);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BannerTop />
      <BannerBottom className={`bannerBottom ${showBannerBottom ? "show" : ""}`} />
    </>
  );
};
