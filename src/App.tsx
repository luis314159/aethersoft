import React from 'react';
import './styles/App.css';
import AppHeader from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Mission from './components/Mission';
import Vision from './components/Vision';
import Contact from './components/Contact';
import AppFooter from './components/Footer';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <HeroSection logoSrc={logo} />
      <AboutUs />
      <Services />
      <Portfolio />
      <Mission />
      <Vision />
      <Contact />
      <AppFooter />
    </div>
  );
}

export default App;
