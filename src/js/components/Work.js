import React from 'react';
import WorkItemContent from './WorkItemContent';


// !
// TODO: Add a function that detects if the user is using a touch screen device
// That way I can render a component below the
// title or above to intruct the user to press and hold (no hover)

const workItems = [
  {
    name: 'Beagles',
    subHeadline: 'Producer/DJ',
    bio: 'Website created to showcase work from local Washington D.C. based DJ, Beagles. Designed and developed entirely from scratch.',
    techArr: [
      {
        tech: {
          name: 'GSAP',
          link: 'https://greensock.com/',
        },
      },
      {
        tech: {
          name: 'ScrollOut',
          link: 'https://scroll-out.github.io/',
        },
      },
      {
        tech: {
          name: 'Barba',
          link: 'https://barba.js.org/',
        },
      },
      {
        tech: {
          name: 'Sass',
          link: 'https://sass-lang.com/',
        },
      },
      {
        tech: {
          name: 'Webpack',
          link: 'https://webpack.js.org/',
        },
      },
    ],
    linkHref: 'https://www.beaglesmusic.com/',
  },
  {
    name: 'Katy Pentz',
    subHeadline: 'Privacy Professional',
    bio: 'Commisioned résumé site for Washington D.C. based Privacy Professional, Katy Pentz.',
    techArr: [
      {
        tech: {
          name: 'GSAP',
          link: 'https://greensock.com/',
        },
      },
      {
        tech: {
          name: 'ScrollMagic',
          link: 'http://scrollmagic.io/',
        },
      },
      {
        tech: {
          name: 'Sass',
          link: 'https://sass-lang.com/',
        },
      },
      {
        tech: {
          name: 'Parcel',
          link: 'https://parceljs.org/',
        },
      },
    ],
    linkHref: 'https://www.katypentz.com/',
  },
  {
    name: 'Blonded Player',
    subHeadline: 'Side Project',
    bio: 'Created a small site and music player to explore serverless functions and work with third party API data.',
    techArr: [
      {
        tech: {
          name: 'AWS Lambda',
          link: 'https://aws.amazon.com/lambda/',
        },
      },
      {
        tech: {
          name: 'Sass',
          link: 'https://sass-lang.com/',
        },
      },
      {
        tech: {
          name: 'Howlerjs',
          link: 'https://howlerjs.com/',
        },
      },
      {
        tech: {
          name: 'Parcel',
          link: 'https://parceljs.org/',
        },
      },
    ],
    linkHref: 'https://blonded-player.netlify.com/',
  },
];

export default function Work() {
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
