import React from 'react';
import './App.css';
import AboutUs from './container/AboutUs/AboutUs';
import Chef from './container/Chef/Chef';
import FindUs from './container/Findus/Findus'
import Footer from './container/Footer/Footer';
import Gallery from './container/Gallery/Gallery';
import Header from './container/Header/Header';
import Intro from './container/Intro/Intro';
import Laurels from './container/Laurels/Laurels';
import SpecialMenu from './container/Menu/SpecialMenu';

import  Navbar  from './components/Navbar/Navbar';
function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
  );
}

export default App;
