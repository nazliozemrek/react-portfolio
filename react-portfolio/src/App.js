import React,{useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      
      <Nav
      contactSelected={contactSelected}
      setContactSelected={setContactSelected
      }></Nav>
      <main>
      {!contactSelected ? (
      <>
      <About></About>
      <Portfolio></Portfolio>
      </>
        ) : (
          <ContactForm></ContactForm>
  
    )}

        <Footer/>
      </main>
    </div>
  );
}

export default App;
