import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import {
  InfoIcon,
  SmallGithubIcon,
  SmallGmailIcon,
  SmallLinkedinIcon,
  TinyStarIcon,
} from "@/icons/dev-icons";
import { Card, CardContent } from "./ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
// import { FullColumn, EmptyColumn } from "@/icons/dev-icons";

export const HomeComponent = () => {
  const WHATIUSEDICT = {
    languages: [
      { type: "Python", link: "https://www.python.org/", stars: 5 },
      { type: "JavaScript", link: "https://www.javascript.com/", stars: 3 },
      {
        type: "TypeScript",
        link: "https://www.typescriptlang.org/",
        stars: 2,
      },
      { type: "HTML + CSS", link: "https://www.w3.org/html/", stars: 4 },
      { type: "SQL", link: "https://www.sql.org/", stars: 4 },
    ],
    libraries: [
      { type: "TailwindCSS", link: "https://tailwindcss.com/", stars: 3 },
      { type: "Drizzle", link: "https://orm.drizzle.team/", stars: 2 },
      { type: "React", link: "https://reactjs.org/", stars: 3 },
      {
        type: "Framer motion",
        link: "https://www.framer.com/motion/",
        stars: 2,
      },
      {
        type: "Discord.py",
        link: "https://discordpy.readthedocs.io/en/stable/",
        stars: 5,
      },
    ],
    tools: [
      { type: "Next.js", link: "https://nextjs.org/", stars: 3 },
      { type: "Git", link: "https://git-scm.com/", stars: 4 },
      { type: "Vite", link: "https://vitejs.dev/", stars: 3 },
      { type: "Bun", link: "https://bun.sh/", stars: 4 },
      { type: "Flask", link: "https://expressjs.com/", stars: 3 },
    ],
  };

  const handleForward = (websiteNumber: number) => {
    const websites: { [key: number]: string } = {
      1: "https://github.com/Filipsys",
      2: "https://linkedin.com/in/filipsysak",
      3: "mailto:sysakfilip@gmail.com",
    };

    window.open(websites[websiteNumber], "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      key={1}
      className=""
    >
      <div className="px-2 py-6">
        <h1 className="text-xl font-light tracking-wide xs:text-2xl sm:text-3xl">
          Hi, I'm <span className=" ">Filip</span>, a self-taught front-end
          developer from Poland. I mainly work with{" "}
          <span className="text-green-500">React</span>,{" "}
          <span className="text-pink-500">NextJS</span>,{" "}
          <span className="text-blue-600">TypeScript</span>, and relational
          databases like <span className="text-orange-400">SQLite</span> and{" "}
          <span className="text-red-500">Drizzle</span>.
        </h1>
      </div>

      <div className="px-2">
        <Separator />
      </div>

      <div className="px-2 py-6">
        <h2 className="py-2 text-lg underline underline-offset-4 xs:text-xl">
          Links
        </h2>

        <div className="flex flex-col fill-white/50 font-mono text-white/50 *:flex *:cursor-pointer *:justify-between *:text-xs *:font-light *:tracking-wider *:xs:text-sm *:sm:text-base">
          <div
            className="group/github z-50 transition-colors duration-200 hover:text-white"
            onClick={() => handleForward(1)}
          >
            <a href="https://github.com/Filipsys" target="_blank">
              github.com/Filipsys
            </a>

            <div className="flex items-center gap-2">
              <p className="hidden xs:block">Github</p>
              <div className="size-4 duration-200 group-hover/github:fill-white">
                <SmallGithubIcon />
              </div>
            </div>
          </div>
          <div
            className="group/linkedin z-50 py-1 transition-colors duration-200 hover:text-[#0A66C2] xs:p-0"
            onClick={() => handleForward(2)}
          >
            <a href="https://linkedin.com/in/filipsysak" target="_blank">
              linkedin.com/in/filipsysak
            </a>
            <div className="flex items-center gap-2">
              <p className="hidden xs:block">LinkedIn</p>
              <div className="size-4 duration-200 group-hover/linkedin:fill-[#0A66C2]">
                <SmallLinkedinIcon />
              </div>
            </div>
          </div>
          <div
            className="group/email z-50 transition-colors duration-200 hover:text-[#EA4335]"
            onClick={() => handleForward(3)}
          >
            <a href="mailto:sysakfilip@gmail.com">sysakfilip@gmail.com</a>

            <div className="flex items-center gap-2">
              <p className="hidden xs:block">Email</p>
              <div className="size-4 duration-200 group-hover/email:fill-[#EA4335]">
                <SmallGmailIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-2">
        <Separator />
      </div> */}

      <div className="z-50 px-2">
        <div className="flex items-center">
          <h2 className="py-2 text-lg underline underline-offset-4 xs:text-xl">
            Tech I know and use
          </h2>
          <div className="z-50 mb-auto px-1 py-2">
            <HoverCard>
              <HoverCardTrigger className="z-50 *:hidden *:size-4 *:sm:block">
                <InfoIcon />
              </HoverCardTrigger>
              <HoverCardContent className="p-2">
                <p className="text-xs text-white">
                  The stars indicate my level of proficiency in each technology.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <div className="mb-8 grid w-full grid-cols-1 gap-3 text-white/50 sm:grid-cols-3 lg:mb-0">
          {Object.entries(WHATIUSEDICT).map(([key, value]) => (
            <div key={key}>
              <p className="pl-2 pr-1 text-base font-light tracking-wider">
                - {key}
              </p>
              <Card className="bg-gradient-to-tr from-gray-400/5 to-transparent duration-300 ease-in-out">
                <CardContent className="p-3 text-sm font-light text-white/50 sm:text-base">
                  {value.map((item) => (
                    <div
                      key={item.type}
                      className="flex flex-row justify-between"
                    >
                      <motion.a
                        href={item.link}
                        target="_blank"
                        className="z-50 line-clamp-1 font-mono underline-offset-4 hover:underline"
                      >
                        {item.type}
                      </motion.a>
                      <div className="flex items-center justify-center gap-[2px] *:size-3">
                        {[...Array(5 - item.stars)].map((_, i) => (
                          <TinyStarIcon key={i} />
                          // <EmptyColumn key={i} />
                        ))}
                        {[...Array(item.stars)].map((_, i) => (
                          <TinyStarIcon key={i} fill={true} />
                          // <FullColumn key={i} />
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="block sm:hidden">
          <p className="p-3 text-center text-xs text-white/50">
            * The stars indicate my level of proficiency in each technology.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
