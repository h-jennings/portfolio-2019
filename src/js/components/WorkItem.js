import React from 'react';

export default function WorkItem({ name, linkHref }) {
  return (
    <React.Fragment>
      <div className="link--wrapper">
        <a className="txt--xxl work--link" href={linkHref}>{name}</a>
      </div>
    </React.Fragment>
  );
}
