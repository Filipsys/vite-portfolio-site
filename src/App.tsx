import "./index.css";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "./components/ui/separator";
import { HomeComponent } from "./components/HomeComponent";

function App() {
  const hoverItemRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState<"Home" | "About" | "Projects">(
    "Home",
  );

  const handleClick = (page: "Home" | "About" | "Projects") => {
    setActivePage(page);
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const hoverItem = hoverItemRef.current;
    if (!hoverItem) return;

    const { clientX, clientY } = e;
    hoverItem.style.maskPosition = `${clientX - hoverItem.clientWidth / 2}px ${clientY - hoverItem.clientHeight / 2}px`;
  };

  const handleMouseOver: React.MouseEventHandler<HTMLDivElement> = () => {
    const hoverItem = hoverItemRef.current;
    if (!hoverItem) return;

    hoverItem.style.opacity = "0.2";
  };

  const handleMouseOut: React.MouseEventHandler<HTMLDivElement> = () => {
    const hoverItem = hoverItemRef.current;
    if (!hoverItem) return;

    hoverItem.style.opacity = "0";
  };

  return (
    <>
      <div
        className="absolute left-0 top-0 z-10 h-screen w-screen"
        onMouseMove={handleMouseMove}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <div className="h-screen items-center justify-center font-custom2 text-foreground md:flex-col lg:mx-16 lg:flex lg:flex-row xl:mx-40 2xl:mx-80">
        <nav className="block h-fit w-screen p-8 lg:w-1/5 2xl:w-2/5">
          <ul className="flex select-none justify-center gap-x-8 text-xl tracking-tight sm:gap-x-16 sm:text-2xl lg:flex-col lg:items-end lg:text-3xl">
            <motion.li
              className="z-50 cursor-pointer"
              whileHover={{
                x: 5,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <a onClick={() => handleClick("Home")}>Home</a>
            </motion.li>
            <motion.li
              className="line-through"
              // className="cursor-pointer"
              // whileHover={{
              //   x: 5,
              //   transition: {
              //     duration: 0.25,
              //   },
              // }}
            >
              <a /*onClick={() => handleClick("About")}*/>About</a>
            </motion.li>
            <motion.li
              className="line-through"
              // className="cursor-pointer"
              // whileHover={{
              //   x: 5,
              //   transition: {
              //     duration: 0.25,
              //   },
              // }}
            >
              <a /* onClick={() => handleClick("About")} */>Notes</a>
            </motion.li>
            <motion.li
              className="line-through"
              // className="cursor-pointer"
              // whileHover={{
              //   x: 5,
              //   transition: {
              //     duration: 0.25,
              //   },
              // }}
            >
              <a /* onClick={() => handleClick("Projects")} */ className="">
                Projects
              </a>
            </motion.li>
          </ul>
        </nav>

        <div className="hidden h-dvh lg:flex lg:items-center">
          <Separator orientation="vertical" className="h-1/5" />
        </div>

        <main className="flex w-screen items-center justify-center p-6 font-custom2 text-xl lg:h-dvh lg:w-4/5">
          <div className="w-full">
            <div className="relative w-full">
              <AnimatePresence>
                {activePage === "Home" && (
                  <motion.div key="home">
                    <HomeComponent />
                  </motion.div>
                )}
                {/* {activePage === "About" && (
                  <motion.div key="about">
                    <AboutComponent />
                  </motion.div>
                )}
                {activePage === "Projects" && (
                  <motion.div key="projects">
                    <ProjectsComponent />
                  </motion.div>
                )} */}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>

      <div className="absolute left-0 top-0 hidden h-screen w-screen select-none overflow-hidden lg:block">
        <div className="relative h-screen w-screen">
          <div
            className="absolute left-0 top-0 h-screen w-screen"
            ref={hoverItemRef}
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.7) 4%, transparent 4%)`,
              backgroundSize: "3vmin 3vmin",
              maskMode: "alpha",
              maskImage: `url(radialmask.svg)`,
              maskPosition: "50% 50%",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
              opacity: 0,
              transition: "opacity 0.2s ease-in-out",
            }}
          />
          <div
            className="absolute left-0 top-0 h-screen w-screen"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.05) 4%, transparent 4%)`,
              backgroundSize: "3vmin 3vmin",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
