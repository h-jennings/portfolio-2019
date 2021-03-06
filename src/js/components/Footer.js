import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer--wrapper">
        <div className="col">
          <p>
            This website was built with React. Framer Motion for animation.
            All projects are available on Github.
          </p>
        </div>
        <div className="col">
          <a href="https://github.com/h-jennings" target="_blank" rel="noopener noreferrer">
            Github.
          </a>
          <a href="https://twitter.com/jennings_hunter" target="_blank" rel="noopener noreferrer">
            Twitter.
          </a>
          <a href="mailto:jenningsdhunter@gmail.com">
            Email.
          </a>
        </div>
      </div>
    </footer>
  );
}
