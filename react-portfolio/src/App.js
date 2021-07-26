import React,{useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ContactForm from './components/Contact';


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
      </>
        ) : (
          <ContactForm></ContactForm>
    
    
    )}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
