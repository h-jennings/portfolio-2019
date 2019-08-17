import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Intro from './Intro';
import Work from './Work';
import Footer from './Footer';
import Logo from './Logo';

const fadeIn = {
  opacity: 1,
  transition: {
    delay: 0.3,
    ease: 'easeOut',
  },
};

export default function Home(props) {
  const { isGridAnimationFinished } = props;
  return (
    <motion.main
      style={{ opacity: 0 }}
      animate={
        isGridAnimationFinished
          ? fadeIn
          : { opacity: 0 }}
      className="home"
    >
      <Logo />
      <Intro />
      <Work />
      <Footer />
    </motion.main>
  );
}


Home.propTypes = {
  isGridAnimationFinished: PropTypes.bool.isRequired,
};
