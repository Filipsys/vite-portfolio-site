import { motion } from "framer-motion";

export const ProjectsComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      key={2}
      className="absolute"
    >
      <div>
        <h1 className="text-3xl font-light">Projects</h1>

        <p>Coming soon</p>
      </div>
    </motion.div>
  );
};
