import { motion } from "motion/react";

export const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      viewport={{ margin: "100% 0px -300px 0px" }}
    >
      {children}
    </motion.div>
  );
};
