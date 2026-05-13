import { motion, type Transition } from "motion/react";

const transition: Transition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const transitionBumpingHeart: Transition = {
  duration: 0.4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

export default function CircleMotion() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
          <motion.path
            d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
            strokeWidth="1"
            fill="transparent"
            stroke="pink"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          ></motion.path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
          <motion.path
            d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
            strokeWidth="1"
            fill="red"
            stroke="red"
            initial={{ offsetDistance: "0%", scale: 1.3 }}
            animate={{ offsetDistance: "100%", scale: 0.8 }}
            transition={transitionBumpingHeart}
          ></motion.path>
        </svg>
      </div>
    </>
  );
}
