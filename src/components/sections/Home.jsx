import React from 'react'
{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}
export const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
        <div className='text-center z-10 px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#8F8A76] to-[#BE4732] bg-clip-text text-transparent leading-right'>
                Welcome to My Portfolio
            </h1>
            <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
                Explore my journey and projects as I grow in this exciting field!
            </p>
            <div className='flex justify-center space-x-4'>
                <a href='#projects' className='bg-[#BE4732] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'>
                    View Projects
                </a>

                <a href='#contact' className='border border-[#BE473280] text-[#BE4732] py-3 px-6 rounded font-medium transition-all  duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-[#BE473240]'>
                    Contact Me
                </a>
            </div>
        </div>

    </section>
  )
}
