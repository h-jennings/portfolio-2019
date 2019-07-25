import React from 'react';
import Intro from './Intro';
import Work from './Work';
import Footer from './Footer';
import DivTest from './DivTest';

export default function Home() {
  return (
    <main className="home">
      <DivTest />
      <Intro />
      <Work />
      <Footer />
    </main>
  );
}
