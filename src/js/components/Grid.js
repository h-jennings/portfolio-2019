import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

export default function Grid(props) {
  const { onGridAnimationChange } = props;
  const controls = useAnimation();

  const handleAnimationChange = (bool) => {
    onGridAnimationChange(bool);
  };

  React.useEffect(() => {
    controls.start({
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
      height: '100vh',
    })
      .then(() => {
        handleAnimationChange(true);
      });
  }, []);

  return (
    <motion.div
      style={{
        height: '0vh',
      }}
      animate={controls}
      className="grid"
    >
      <div className="col" />
      <div className="col" />
      <div className="col" />
    </motion.div>
  );
}

Grid.propTypes = {
  onGridAnimationChange: PropTypes.func.isRequired,
};
