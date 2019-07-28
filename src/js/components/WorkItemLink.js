import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const linkAnimation = {
  hidden: {
    opacity: 0,
    x: '-100%',
  },
  visible: {
    opacity: 1,
    x: '0%',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      type: 'spring',
      stiffness: 200,
      damping: 40,
    },
  },
};

export default function WorkItemLink(
  {
    linkHref,
    name,
    isVisible,
  },
) {
  return (
    <React.Fragment>
      <div
        className="link--wrapper"
      >
        <motion.a
          className="txt--xxl work--link"
          rel="noopener noreferrer"
          target="_blank"
          href={linkHref}
          animate={isVisible ? 'visible' : 'hidden'}
          variants={linkAnimation}
        >
          {name}
        </motion.a>
      </div>
    </React.Fragment>
  );
}

WorkItemLink.propTypes = {
  name: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};
