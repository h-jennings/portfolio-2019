import React from 'react';
import Intro from './Intro';
import Work from './Work';
import Footer from './Footer';
import Logo from './Logo';

export default function Home() {
  return (
    <main className="home">
      <Logo />
      <Intro />
      <Work />
      <Footer />
    </main>
  );
}
