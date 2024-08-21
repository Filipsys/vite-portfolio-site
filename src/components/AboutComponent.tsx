import { motion } from "framer-motion";

export const AboutComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      key={3}
      className="absolute"
    >
      <div>
        <h1 className="text-3xl font-light">About</h1>
      </div>
    </motion.div>
  );
};
