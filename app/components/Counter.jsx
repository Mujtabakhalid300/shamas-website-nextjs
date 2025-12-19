"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 40,
    damping: 20,
    mass: 1.5,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  return (
    /* 'tabular-nums' is the magic class here. 
       It ensures 1, 2, 3... all take up the same horizontal space.
       'inline-block' and a 'min-w' can also help if the font doesn't support tabular nums.
    */
    <motion.span
      ref={ref}
      className="tabular-nums inline-block transition-all duration-75"
    >
      {displayValue}
    </motion.span>
  );
};

export default Counter;
