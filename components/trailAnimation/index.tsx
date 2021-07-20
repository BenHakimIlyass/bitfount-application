import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: { opacity: 0, when: "beforeChildren" },
  show: {
    opacity: 1,
    transition: {
      staggerDirection: -1,
      duration: 0.6,
    
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

type Props = {
  children: React.ReactChild;
  [key: string]: any;
};
const MotionWrapper = ({ children, ...props }: Props) => (
  <motion.div variants={container} initial="hidden" animate="show" {...props}>
    {children}
  </motion.div>
);
const MotionChild = ({ children, ...props }: Props) => (
  <motion.div variants={item}  {...props}>
    {children}
  </motion.div>
);
export default { MotionWrapper, MotionChild };
