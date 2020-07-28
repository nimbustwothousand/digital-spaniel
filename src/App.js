import React from 'react';
import './css/App.css';
import {
  About,
  Capabilities,
  CaseStudies,
  Footer,
  Header,
  Hero,
  Recent,
  Testimonials
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Recent />
        <CaseStudies />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
