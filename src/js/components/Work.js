import React from 'react';
import workItemsData from '../data/workItems.json';
import WorkItemContent from './WorkItemContent';

export default function Work() {
  const { workItems } = workItemsData;
  return (
    <section className="work">
      <div className="work-section-title--wrapper">
        <h1 className="work-section--title">
          Selected Work
          <span className="red">.</span>
        </h1>
      </div>
      <ul>
        {workItems.map((item, index) => (
          <li
            className="work_item"
            key={item.name}
          >
            <WorkItemContent
              number={index + 1}
              linkHref={item.linkHref}
              bio={item.bio}
              techArr={item.techArr}
              name={item.name}
              subHeadline={item.subHeadline}
            />
          </li>
        ))}
      </ul>

    </section>
  );
}
