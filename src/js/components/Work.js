import React from 'react';
import WorkItemContent from './WorkItemContent';

const workItems = [
  {
    name: 'Beagles',
    subHeadline: 'Producer/DJ',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkHref: 'https://www.beaglesmusic.com/',
  },
  {
    name: 'Katy Pentz',
    subHeadline: 'Privacy Professional',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkHref: 'https://www.katypentz.com/',
  },
  {
    name: 'Blonded Player',
    subHeadline: 'Side Project',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    linkHref: 'https://blonded-player.netlify.com/',
  },
];

export default function Work() {
  return (
    <section className="work">
      <h1 className="work-section--title">
          Selected Work
        <span className="red">.</span>
      </h1>

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
              name={item.name}
              subHeadline={item.subHeadline}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
