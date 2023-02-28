import About from './components/About/About';
import Feedback from './components/Feedback/Feedback';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Cases from './components/Cases/Cases';

import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Section heightFull={true}>
        <Navbar />
        <Intro />
      </Section>
      <Section title="о нас" id="about">
        <About />
      </Section>
      <Section title="кейсы" id="cases">
        <Cases />
      </Section>
      <Section title="форма обратной связи" sm id="feedback">
        <Feedback />
      </Section>
      <Footer id="contacts" />
    </>
  );
}

export default App;
