import React from 'react';
import WorkItem from './WorkItem';

const workItems = [
  {
    name: 'Beagles',
    subHeadline: 'Producer/DJ',
    linkHref: 'https://blonded-player.netlify.com/',
  },
  {
    name: 'Katy Pentz',
    subHeadline: 'Privacy Professional',
    linkHref: 'https://www.katypentz.com/',
  },
  {
    name: 'Blonded Player',
    subHeadline: 'Side Project',
    linkHref: 'https://www.beaglesmusic.com/',
  },
];

export default function Work() {
  return (
    <section className="work">
      <ul>
        {workItems.map((item, index) => {
          const numb = index;
          return (
            <li key={item.name}>
              <div className="work-item-number">
                { numb + 1 }
              </div>
              <WorkItem linkHref={item.linkHref} name={item.name} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
