import React, { useState , useEffect} from 'react';
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import AboutUs from './components/AboutUs';
import CeoData from './data/CeoData' 
import Dropdown from './components/Dropdown';
import Projects from './components/Projects';
import Services from './components/Services';
import Banner from './components/Banner';
import Process from './components/Process';
import Footer from './components/Footer';
import { SliderData, TitleData } from './data/SlideData';
import { PartnersData } from './data/PartnersData';
import Aos from 'aos'
import 'aos/dist/aos.css';

function App() {



  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    Aos.init({
      once: true
    })
  },[])
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Hero slides={SliderData} titles={TitleData} />
      <Partners partners={PartnersData} />
      <AboutUs {...CeoData} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Projects />
      <Services />
      <Banner />
      <Process />
      <Footer />


    </>
  );
}


export default App;