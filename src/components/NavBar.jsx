import React, { useEffect } from 'react'
{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}
export const NavBar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <a href='#home' alt = 'icon' className='font-mono text-xl font-bold text-[#8F8A76] flex items-center'>
                    <img src='/icon.png' className='mr-2 object-contain' style={{width: '55px', height: '55px'}}/>
                    patricia<span className='text-[#BE4732]'>anne</span><span className='text-[#8F8A76]'>u</span>
                </a>

                {/*mobile menu*/}
                <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={()=> setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>
                {/*mobile menu end*/}

                <div className='hidden md:flex items-center space-x-8'>
                    <a href='#home' className='text-gray-300 hove:text-white transition-colors'>Home</a>
                    <a href='#about' className='text-gray-300 hove:text-white transition-colors'>About Me</a>
                    <a href='#projects' className='text-gray-300 hove:text-white transition-colors'>Projects</a>
                    <a href='#services' className='text-gray-300 hove:text-white transition-colors'>Services</a>
                    <a href='#contact' className='text-gray-300 hove:text-white transition-colors'>Contact</a>

                </div>

            </div>

        </div>

    </nav>
  )
}
