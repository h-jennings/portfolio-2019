import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const fadeInAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      ease: 'easeInOut',
      duration: 0.8,
      type: 'tween',
      stiffness: 100,
      damping: 40,
    },
  },
};

export default function WorkItemInfo(
  {
    subHeadline,
    bio,
    isVisible,
    number,
  },
) {
  return (
    <motion.aside
      variants={fadeInAnimation}
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <motion.div
        animate={isVisible ? 'visible' : 'hidden'}
        className="work-item-number"
        variants={fadeInAnimation}
      >
        { `/${number}` }
      </motion.div>
      <h2>
        {subHeadline}
      </h2>
      <p>
        {bio}
      </p>
    </motion.aside>
  );
}

WorkItemInfo.propTypes = {
  subHeadline: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
