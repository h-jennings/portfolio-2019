import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function DivTest() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <motion.div className="divTest" style={{ scale }} />
    </>
  );
}
