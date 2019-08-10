import React from 'react';
import Logo from './Logo';

export default function FourZeroFour() {
  return (
    <main className="fourZeroFour">
      <Logo />
      <section className="fourZeroFour">
        <div className="fourZeroFour--wrapper">
          <div className="content--wrapper">
            <h1>404</h1>
            <h1>
              {'(☉_☉)'}
            </h1>
            <p>Ah, dang.</p>
            <p>Looks like that page doesn&apos;t exist.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
