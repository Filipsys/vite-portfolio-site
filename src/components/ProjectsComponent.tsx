import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "./ui/card";

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

        <div className="grid w-full grid-cols-3 gap-3 p-3">
          <Card className="duration-100 ease-in-out hover:-translate-y-0.5 hover:border-white/30">
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
          </Card>
          <Card className="duration-100 ease-in-out hover:-translate-y-0.5 hover:border-white/30">
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
          </Card>
          <Card className="duration-100 ease-in-out hover:-translate-y-0.5 hover:border-white/30">
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
          </Card>
          <Card className="duration-100 ease-in-out hover:-translate-y-0.5 hover:border-white/30">
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
          </Card>
          <Card className="duration-100 ease-in-out hover:-translate-y-0.5 hover:border-white/30">
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
          </Card>
          <Card className="duration-100 ease-in-out hover:-translate-y-0.5 hover:border-white/30">
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
