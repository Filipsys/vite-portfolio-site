import "./index.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "./components/ui/separator";
import { HomeComponent } from "./components/HomeComponent";
// import { ModeToggle } from "./components/mode-toggle";
// import { GridSVG } from "./icons/grid-svg";
// import { AboutComponent } from "./components/AboutComponent";
// import { ProjectsComponent } from "./components/ProjectsComponent";

function App() {
  const [activePage, setActivePage] = useState<"Home" | "About" | "Projects">(
    "Home",
  );

  const handleClick = (page: "Home" | "About" | "Projects") => {
    setActivePage(page);
  };

  return (
    <>
      {/* <div className="absolute right-0 top-0 aspect-square">
        <ModeToggle />
      </div> */}
      {/* bg-background */}
      <div className="h-screen items-center justify-center font-custom2 text-foreground md:flex-col lg:mx-16 lg:flex lg:flex-row xl:mx-40 2xl:mx-80">
        <nav className="block h-fit w-screen p-8 lg:w-1/5 2xl:w-2/5">
          <ul className="flex select-none justify-center gap-x-8 text-xl tracking-tight sm:gap-x-16 sm:text-2xl lg:flex-col lg:items-end lg:text-3xl">
            <motion.li
              className="cursor-pointer"
              whileHover={{
                x: 5,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <a onClick={() => handleClick("Home")} className="">
                Home
              </a>
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
              <a /*onClick={() => handleClick("About")}*/ className="">About</a>
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
              <a /* onClick={() => handleClick("About")} */ className="">
                Notes
              </a>
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
      {/* <div className="pointer-events-none absolute left-0 top-0 -z-50 hidden h-screen w-screen select-none overflow-hidden lg:block">
        <div
          className="absolute h-96 w-96 rounded-full bg-white"
          id="hoveritem"
          onMouseMove={handleMouseMove}
        ></div>
      </div> */}
    </>
  );
}

export default App;
