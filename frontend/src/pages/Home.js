import React from 'react';
import About from '../Components/About';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import Skills from '../Components/Skills';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;