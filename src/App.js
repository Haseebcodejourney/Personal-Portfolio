import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Services />
      <Features />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
