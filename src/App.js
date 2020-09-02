import React from 'react';
// import logo from './logo.svg';

import { portfolioLinks } from './util'

import NavBar from './asset/components/NavBar';
import Header from './asset/components/Header';
import Services from './asset/components/Services';
import Portfolio from './asset/components/Portfolio';
import About from './asset/components/About';
import OurTeam from './asset/components/OurTeam';
import Affiliates from './asset/components/Affiliates';
import ContactUs from './asset/components/ContactUs';
import Footer from './asset/components/Footer';

import './App.css';

function App() {
  return (
    <div classNameName="App">
      <NavBar></NavBar>
      <Header></Header>
      <Services></Services>
      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
      <About></About>
      <OurTeam></OurTeam>
      <Affiliates></Affiliates>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  )
}

export default App;
