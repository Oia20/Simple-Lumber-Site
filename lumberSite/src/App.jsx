import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Quote from './Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
