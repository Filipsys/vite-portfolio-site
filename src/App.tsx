import "./index.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "./components/ui/separator";
import { ModeToggle } from "./components/mode-toggle";
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
      <div className="absolute right-0 top-0 aspect-square">
        <ModeToggle />
      </div>

      <div className="mx-64 flex h-screen items-center justify-center bg-background text-foreground">
        <nav className="w-2/5 p-6 py-24">
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

        <main className={`relative h-screen w-3/5 p-6 py-52 text-xl`}>
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
        </main>
      </div>
    </>
  );
}

export default App;
