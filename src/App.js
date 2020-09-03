import React from 'react';


import { portfolioData, experienceData } from './util';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div classNameName="App">
      <NavBar/>
      <Header/>
      <Portfolio portfolioData={portfolioData}/>
      <Experiences experienceData={experienceData}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
