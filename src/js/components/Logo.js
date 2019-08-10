import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import logoImg from '../../assets/images/logo.svg';


export default function Logo() {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <Link to="/" className="logo">
      <motion.img src={logoImg} style={{ rotate }} />
    </Link>
  );
}
