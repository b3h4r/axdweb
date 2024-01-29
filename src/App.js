import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Citation from './components/Citation/Citation';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise';
import Projets from './components/Projets/Projets';
import Faqs from './components/Faqs/Faqs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './init.scss';

const App = () => {
  return (
    <div id='App'>
      <Header />
      <Home />
      <Citation />
      <Services />
      <Expertise />
      <Projets />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;