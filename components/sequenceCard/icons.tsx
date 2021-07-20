import { motion } from "framer-motion";

export const Pending = () => (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
    <motion.path
      transition={{ repeat: Infinity, duration: 1, repeatType: "loop" }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      d="M32 16.5C32 7.93959 25.0604 1 16.5 1C7.93959 1 1 7.93959 1 16.5C1 25.0604 7.93959 32 16.5 32C21.1294 32 25.2848 29.9704 28.125 26.7526"
      stroke="#F36843"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export const Completed = () => (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
    <circle cx="16.5" cy="16.5" r="16.5" fill="#16B1E6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3028 18.6977L23.2085 9.79199L24.5638 11.1473L14.3028 21.4083L8.8335 15.9389L10.1888 14.5837L14.3028 18.6977Z"
      fill="white"
    />
  </svg>
);
export const Error = () => (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
    <circle cx="16.5" cy="16.5" r="16.5" fill="#FE3E3E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4999 18.5328L10.3288 24.7038L8.2959 22.6709L14.4669 16.4999L8.2959 10.3288L10.3288 8.2959L16.4999 14.4669L22.6709 8.2959L24.7038 10.3288L18.5328 16.4999L24.7038 22.6709L22.6709 24.7038L16.4999 18.5328Z"
      fill="white"
    />
  </svg>
);
export const Queued = () => (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
    <circle cx="16.5" cy="16.5" r="16.5" fill="#1B204C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5002 27.0413C10.6782 27.0413 5.9585 22.3216 5.9585 16.4997C5.9585 10.6777 10.6782 5.95801 16.5002 5.95801C22.3221 5.95801 27.0418 10.6777 27.0418 16.4997C27.0418 22.3216 22.3221 27.0413 16.5002 27.0413ZM16.5002 25.1247C21.2637 25.1247 25.1252 21.2632 25.1252 16.4997C25.1252 11.7362 21.2637 7.87467 16.5002 7.87467C11.7367 7.87467 7.87516 11.7362 7.87516 16.4997C7.87516 21.2632 11.7367 25.1247 16.5002 25.1247ZM21.2918 15.5413H17.4585V10.7497H15.5418V17.458H21.2918V15.5413Z"
      fill="white"
    />
  </svg>
);
