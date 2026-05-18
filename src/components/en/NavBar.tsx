import Menu2Line from "@iconify-react/ri/menu-2-line";
import { homeData } from "src/data/en/home";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const { icons, brand } = homeData.navBar;
export default function NavBar() {
  const [changeNav, setChangeNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setChangeNav(true);
      } else {
        setChangeNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        changeNav
          ? `w-full pl-4 pr-4 z-20  flex items-center  text-(--foreground)  fixed backdrop-blur-sm top-0 shadow-sm transition-all `
          : `w-full pl-4 pr-4 z-20  flex items-center  text-(--background)   fixed backdrop-blur-sm top-0 shadow-sm transition-all `
      }
    >
      <div className="w-1/4">
        <Button>
          <Menu2Line height="6rem" width="6rem" />
        </Button>
      </div>

      <div className="text-xl m-auto lg:text-3xl font-bold font-serif hover:text-(--primary) transition-all cursor-pointer hover:text-shadow-lg ">
        {brand}
      </div>

      <div className="w-1/4 flex justify-end items-center gap-4">
        {icons.map((icon) => (
          <span className=" hover:text-(--primary) cursor-pointer">{icon}</span>
        ))}

        <AnimatedThemeToggler className="hover:text-(--primary) cursor-pointer" />
      </div>
    </div>
  );
}
