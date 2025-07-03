import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
