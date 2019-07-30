import React from 'react';
import PropTypes from 'prop-types';
import WorkItemLink from './WorkItemLink';
import WorkItemInfo from './WorkItemInfo';

export default class WorkItemContent extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.50,
    };
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
        <WorkItemLink
          linkHref={linkHref}
          name={name}
          isVisible={isVisible}
        />
        <WorkItemInfo
          number={number}
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
