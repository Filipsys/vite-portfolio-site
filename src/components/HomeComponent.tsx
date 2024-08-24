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

export const HomeComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      key={1}
      className="absolute"
    >
      <div className="px-2 py-6">
        <h1 className="text-3xl font-light tracking-wide">
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
        <h2 className="py-2 text-2xl underline underline-offset-4">Links</h2>

        <div className="flex flex-col fill-white/50 font-mono text-white/50 *:flex *:cursor-pointer *:justify-between *:text-base *:font-light *:tracking-wider">
          <div className="group/github transition-colors duration-200 hover:text-white">
            <a href="https://github.com/Filipsys">
              https://github.com/Filipsys
            </a>

            <div className="flex items-center gap-2">
              <p>Github</p>
              <div className="size-4 duration-200 group-hover/github:fill-white">
                <SmallGithubIcon />
              </div>
            </div>
          </div>
          <div className="group/linkedin transition-colors duration-200 hover:text-[#0A66C2]">
            <a href="https://linkedin.com/in/filipsysak">
              https://linkedin.com/in/filipsysak
            </a>
            <div className="flex items-center gap-2">
              <p>LinkedIn</p>
              <div className="size-4 duration-200 group-hover/linkedin:fill-[#0A66C2]">
                <SmallLinkedinIcon />
              </div>
            </div>
          </div>
          <div className="group/email transition-colors duration-200 hover:text-[#EA4335]">
            <a href="mailto:sysakfilip@gmail.com">sysakfilip@gmail.com</a>

            <div className="flex items-center gap-2">
              <p>Email</p>
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
          <h2 className="py-2 text-2xl underline underline-offset-4">
            Tech I know and use
          </h2>
          <div className="mb-auto px-1 py-2">
            <HoverCard>
              <HoverCardTrigger className="*:size-4">
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

        <div className="grid w-full grid-cols-3 gap-3 text-white/50">
          <div>
            <p className="pl-2 pr-1 font-mono text-base font-light tracking-wider">
              - Languages
            </p>
            <Card className="bg-gradient-to-tr from-gray-500/5 to-transparent duration-300 ease-in-out hover:border-white/30">
              <CardContent className="p-3 text-base font-light text-white/50">
                <div className="flex flex-row justify-between">
                  <p>Python</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>JavaScript</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>TypeScript</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon />
                    <TinyStarIcon />
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>HTML + CSS</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>SQL</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <p className="pl-2 pr-1 font-mono text-base font-light tracking-wider">
              - Libraries
            </p>
            <Card className="bg-gradient-to-tr from-gray-500/5 to-transparent duration-300 ease-in-out hover:border-white/30">
              <CardContent className="p-3 text-base font-light text-white/50">
                <div className="flex flex-row justify-between">
                  <p>TailwindCSS</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Drizzle</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon />
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Discord.py</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <p className="pl-2 pr-1 font-mono text-base font-light tracking-wider">
              - Tools
            </p>
            <Card className="bg-gradient-to-tr from-gray-500/5 to-transparent duration-300 ease-in-out hover:border-white/30">
              <CardContent className="p-3 text-base font-light text-white/50">
                <div className="flex flex-row justify-between">
                  <p>Next.js</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Vite</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Bun</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Express</p>
                  <div className="flex items-center justify-center gap-[2px] *:size-3">
                    <TinyStarIcon />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                    <TinyStarIcon fill={true} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
