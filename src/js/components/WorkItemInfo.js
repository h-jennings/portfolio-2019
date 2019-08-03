/* eslint-disable react/forbid-prop-types */

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
      delay: 0.5,
      type: 'spring',
      stiffness: 100,
      damping: 40,
    },
  },
};

export default function WorkItemInfo(
  {
    subHeadline,
    bio,
    techArr,
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
      <p>
        <span className="bolded"> Technologies: </span>
        {techArr.map((item, index, arr) => {
          const { name, link } = item.tech;
          return (
            <React.Fragment key={name}>
              <a className="no-underline" rel="noopener noreferrer" target="_blank" href={link}>
                {name}
              </a>
              <React.Fragment>
                {
                  arr.length - 1 === index
                    ? '.'
                    : ', '
                }
              </React.Fragment>
            </React.Fragment>
          );
        })}
      </p>
    </motion.aside>
  );
}

WorkItemInfo.propTypes = {
  subHeadline: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  techArr: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired,
};
