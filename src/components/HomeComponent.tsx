import { motion } from "framer-motion";

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
      <div>
        <h1 className="text-3xl font-light">
          Hi, I'm <span className="">Filip</span>, a front-end developer from
          Poland. I mainly work with{" "}
          <span className="text-green-500">React</span>,{" "}
          <span className="text-pink-500">NextJS</span>,{" "}
          <span className="text-blue-600">TypeScript</span>, and relational
          databases like <span className="text-orange-400">SQLite</span> and{" "}
          <span className="text-red-500">Drizzle</span>.
        </h1>
      </div>
    </motion.div>
  );
};
