import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Services } from './components/sections/Services';

{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-[#323532] text-[#8F8A76]`}>

        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <img src='/icon.png' alt='icon'/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />


      </div>
    </>
  );
}

export default App
