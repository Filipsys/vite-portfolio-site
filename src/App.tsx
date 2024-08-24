import "./index.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "./components/ui/separator";
// import { ModeToggle } from "./components/mode-toggle";
import { HomeComponent } from "./components/HomeComponent";
import { AboutComponent } from "./components/AboutComponent";
import { ProjectsComponent } from "./components/ProjectsComponent";

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

      <div className="mx-80 flex h-screen items-center justify-center bg-background font-custom2 text-foreground">
        <nav className="w-2/5 p-8 py-24">
          <ul className="select-none text-right text-3xl tracking-tight">
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
              className="cursor-pointer"
              whileHover={{
                x: 5,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <a onClick={() => handleClick("About")} className="">
                About
              </a>
            </motion.li>
            <motion.li
              className="cursor-pointer"
              whileHover={{
                x: 5,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <a onClick={() => handleClick("Projects")} className="">
                Projects
              </a>
            </motion.li>
          </ul>
        </nav>

        <div className="h-screen items-center md:hidden lg:flex">
          <Separator orientation="vertical" className="h-1/5" />
        </div>

        <main className="font-sansss relative flex h-screen w-3/5 items-center justify-center p-6 text-xl">
          <div className="flex h-2/3 w-full items-center justify-center">
            <div className="relative h-full w-full">
              <AnimatePresence>
                {activePage === "Home" && (
                  <motion.div key="home">
                    <HomeComponent />
                  </motion.div>
                )}
                {activePage === "About" && (
                  <motion.div key="about">
                    <AboutComponent />
                  </motion.div>
                )}
                {activePage === "Projects" && (
                  <motion.div key="projects">
                    <ProjectsComponent />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-0 h-screen w-screen select-none overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 700 700"
          opacity=".5"
          className="h-screen w-screen scale-[3] overflow-hidden"
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="linearRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.162"
                numOctaves="4"
                seed="15"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feSpecularLighting
                surfaceScale="29"
                specularConstant="1"
                specularExponent="20"
                lighting-color="#aaaaaa"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth="3" elevation="133"></feDistantLight>
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width="700" height="700" fill="transparent"></rect>
          <rect
            width="700"
            height="700"
            fill="#aaaaaa"
            filter="url(#nnnoise-filter)"
          ></rect>
        </svg>
      </div>
    </>
  );
}

export default App;
