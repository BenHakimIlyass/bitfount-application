import { motion } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      type: 'tween',
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -4 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
type Props = {
  children: React.ReactChild;
  [key: string]: any;
};
export const MotionWrapper = ({ children, ...props }: Props) => (
  <motion.div variants={container} initial='hidden' animate='show' {...props}>
    {children}
  </motion.div>
);
export const MotionChild = ({ children, ...props }: Props) => (
  <motion.div variants={item} {...props}>
    {children}
  </motion.div>
);
