import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import WorkItemLink from './WorkItemLink';
import WorkItemInfo from './WorkItemInfo';

const linkNumber = {
  hidden: {
    opacity: 0,
    x: '-100%',
  },
  visible: {
    opacity: 1,
    x: '0%',
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


export default class WorkItemContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      this.options,
    );

    this.observer.observe(this.element);
  }

  handleIntersect(entries) {
    entries.forEach((element) => {
      const { isIntersecting, target } = element;
      if (isIntersecting) {
        this.setState({
          isVisible: true,
        });
        this.observer.unobserve(target);
      }
    });
  }

  render() {
    const {
      number,
      linkHref,
      bio,
      name,
      subHeadline,
    } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="link-content--wrapper" ref={(el) => { this.element = el; }}>
        <motion.div
          animate={isVisible ? 'visible' : 'hidden'}
          className="work-item-number"
          variants={linkNumber}
        >
          { `/${number}` }
        </motion.div>
        <WorkItemLink
          linkHref={linkHref}
          name={name}
          isVisible={isVisible}
        />
        <WorkItemInfo
          subHeadline={subHeadline}
          bio={bio}
          isVisible={isVisible}
        />
      </div>
    );
  }
}

WorkItemContent.propTypes = {
  number: PropTypes.number.isRequired,
  linkHref: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subHeadline: PropTypes.string.isRequired,
};
