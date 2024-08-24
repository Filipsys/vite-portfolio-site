import { motion } from "framer-motion";

export const AboutComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      key={3}
      className=""
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-3xl font-light">About</h1>

        <p>Coming soon</p>
      </div>
    </motion.div>
  );
};
