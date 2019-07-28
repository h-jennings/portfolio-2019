import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const itemInfoAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      ease: 'easeInOut',
      duration: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

export default function WorkItemInfo(
  {
    subHeadline,
    bio,
    isVisible,
  },
) {
  return (
    <motion.aside variants={itemInfoAnimation} animate={isVisible ? 'visible' : 'hidden'}>
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
  isVisible: PropTypes.bool.isRequired,
};
