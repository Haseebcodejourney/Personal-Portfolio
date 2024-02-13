import Header from './components/Header';
import Introduction from './components/Introduction';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
// import ThemeMode from './components/ThemeMode';
import ThemeMode from './components/ThemeMode';
import './style/darktheme.css';
import './style/common.css';
import './App.css'
 

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
      {/* <ThemeMode/> */}
    </>
  );
}

export default App;
