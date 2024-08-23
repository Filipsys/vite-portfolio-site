import { motion } from "framer-motion";
import { Separator } from "./ui/separator";
import {
  SmallGithubIcon,
  SmallGmailIcon,
  SmallLinkedinIcon,
} from "@/icons/dev-icons";

export const HomeComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
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
              <div className="size-4 group-hover/github:fill-white">
                <SmallGithubIcon />
              </div>
            </div>
          </div>
          <div className="group/linkedin transition-colors duration-200 hover:text-[#0A66C2]">
            <a href="https://www.linkedin.com/in/filip-sysak-54b69b319">
            https://www.linkedin.com/in/filip-sysak-54b69b319
            </a>
            <div className="flex items-center gap-2">
              <p>LinkedIn</p>
              <div className="size-4 group-hover/linkedin:fill-[#0A66C2]">
                <SmallLinkedinIcon />
              </div>
            </div>
          </div>
          <div className="group/email transition-colors duration-200 hover:text-[#EA4335]">
            <a href="mailto:sysakfilip@gmail.com">sysakfilip@gmail.com</a>

            <div className="flex items-center gap-2">
              <p>Email</p>
              <div className="size-4 group-hover/email:fill-[#EA4335]">
                <SmallGmailIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
