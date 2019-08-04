/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import WorkItemLink from './WorkItemLink';
import WorkItemInfo from './WorkItemInfo';

export default class WorkItemContent extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.30,
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
      techArr,
    } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="link-content--wrapper" ref={(el) => { this.element = el; }}>
        <WorkItemLink
          linkHref={linkHref}
          name={name}
          isVisible={isVisible}
        />
        <Media
          query="(min-width: 1001px)"
          render={
            () => (
              <WorkItemInfo
                number={number}
                subHeadline={subHeadline}
                bio={bio}
                techArr={techArr}
                isVisible={isVisible}
              />
            )
          }
        />
      </div>
    );
  }
}

WorkItemContent.propTypes = {
  number: PropTypes.number.isRequired,
  linkHref: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  techArr: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  subHeadline: PropTypes.string.isRequired,
};
