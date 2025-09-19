import React, { useEffect } from 'react'
{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}
export const MobileMenu = ({menuOpen, setMenuOpen}) => {

  return (
    
    <div className={`fixed top-0 left-0 w-full bg-[#323532] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
    ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>

        {/*close mobile menu */}
        <button onClick={() => setMenuOpen(false)} className='absolute top-6 right-6 text-[#8F8A76] text-3xl focus:outline-none cursor-pointer' aria-label='Close Menu'>
            &times;
        </button>

        <a href='#home'
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#8F8A76] my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-o': 'opacity-0 translate-y-5'}`}>Home</a>
        <a href='#about'
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#8F8A76] my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-o': 'opacity-0 translate-y-5'}`}>About Me</a>
        <a href='#projects'
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#8F8A76] my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-o': 'opacity-0 translate-y-5'}`}>Projects</a>
        <a href='#services'
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#8F8A76] my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-o': 'opacity-0 translate-y-5'}`}>Services</a>
        <a href='#contact'
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#8F8A76] my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-o': 'opacity-0 translate-y-5'}`}>Contact</a>

    </div>
  );
}
