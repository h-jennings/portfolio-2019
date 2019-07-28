import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import logoImg from '../../assets/images/logo.svg';


export default function Logo() {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <React.Fragment>
      <motion.img className="logo" src={logoImg} style={{ rotate }} />
    </React.Fragment>
  );
}
