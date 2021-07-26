import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/Contact';


function App() {

  return (
    <div>
      <main>
      <Nav></Nav>
        <About></About>
        <Footer></Footer>
        <ContactForm></ContactForm>
       
      </main>
    </div>
  );
}

export default App;
