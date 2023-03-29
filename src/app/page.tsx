import Header from '@/components/Header';
import Banner from '@/components/Banner';
import React from 'react';
import Nav from '@/components/Nav';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import About from '@/components/About';

// components


const App = () => {
  return (
    <div className='bg-black bg-cover overflow-hidden'>
      <Header />
      <Banner />
      {/* <Nav /> */}
      <About />
      <Services />
      <Work />
      <Contact />
    <div ></div>
    </div>

  );
};

export default App;
