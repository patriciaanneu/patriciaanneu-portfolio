import React from 'react'
import timerImage from '../../assets/timer.png'
import heavenlyImage from '../../assets/heavenly.png'
import libraryImage from '../../assets/library.png'
import reeseImage from '../../assets/reese.png'

{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}
export const Projects = () => {
  return (
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-[#8F8A76] to-[#BE4732] bg-clip-text text-transparent text-center'>Featured Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                {/*timer*/}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                <h3 className='text-xl font-bold mb-2'>Countdown Timer</h3>
                <p className='text-[#8F8A76] mb-4'>A countdown timer where the user enters a time (in seconds), and the page dynamically updates the countdown while using DOM manipulation and BOM functions jn JavaScript.</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {["DOM Manipulation", "Event Handling", "HTML", "CSS"].map((tech, key) => (
                        <span 
                            key={key}
                            className='bg-[#BE4732] text-white py-1 px-3 rounded-full text-sm hover:bg-[#BE4732B3] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                                {tech}
                        </span>
                    ))}
                </div>
                <div className='flex justify-between items-center'>
                    <a href='https://patriciaanneu.github.io/User_Countdown_Timer/' target = '_blank' className='text-[#8F8A76] hover:text-[#BE4732E6] transitions-colors my-4'>View Project <span>&rarr;</span></a>
                </div>
                <div>
                    <a href='https://patriciaanneu.github.io/User_Countdown_Timer/' target = '_blank' className='text-[#8F8A76] hover:text-[#BE4732E6] transitions-colors my-4'>
                        <img src={timerImage} />                    
                    </a>
                </div>
                </div>

                {/*heavenly*/}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                <h3 className='text-xl font-bold mb-2'>Heavenly Treats Website</h3>
                <p className='text-[#8F8A76] mb-4'>A clean and visually appealing bakery website built with HTML and CSS, featuring a Home page, Menu, About, and Contact pages for easy navigation and an inviting user experience.</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {["HTML", "CSS"].map((tech, key) => (
                        <span 
                            key={key}
                            className='bg-[#BE4732] text-white py-1 px-3 rounded-full text-sm hover:bg-[#BE4732B3] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                                {tech}
                        </span>
                    ))}
                </div>
                <div className='flex justify-between items-center'>
                    <a href='https://patriciaanneu.github.io/HeavenlyTreats/' target = '_blank' className='text-[#8F8A76] hover:text-[#BE4732E6] transitions-colors my-4'>View Project <span>&rarr;</span></a>
                </div>
                <div>
                    <a href='https://patriciaanneu.github.io/HeavenlyTreats/' target = '_blank' className='text-[#8F8A76] hover:text-[#BE4732E6] transitions-colors my-4'>
                        <img src={heavenlyImage} />
                    </a>
                </div>
                </div>

                {/*library*/}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                <h3 className='text-xl font-bold mb-2'>Online Library System</h3>
                <p className='text-[#8F8A76] mb-4'>A web-based Library Management System that allows users to add, remove, and view books using an interactive form with client-side validation and JavaScript.</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {["DOM Manipulation", "Event Handling", "HTML", "CSS"].map((tech, key) => (
                        <span 
                            key={key}
                            className='bg-[#BE4732] text-white py-1 px-3 rounded-full text-sm hover:bg-[#BE4732B3] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                                {tech}
                        </span>
                    ))}
                </div>
                <div className='flex justify-between items-center'>
                    <a href='https://patriciaanneu.github.io/Online_Library_System/' target = '_blank' className='text-[#8F8A76] hover:text-[#BE4732E6] transitions-colors my-4'>View Project <span>&rarr;</span></a>
                </div>
                <div className='flex justify-between items-center'>
                    <a href='https://patriciaanneu.github.io/Online_Library_System/' target = '_blank' className='text-[#8F8A76] hover:text-[#BE4732E6] transitions-colors my-4'>
                        <img src={libraryImage} />
                    </a>
                </div>
                </div>

                {/*reese*/}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                <h3 className='text-xl font-bold mb-2'>Reese's Website</h3>
                <p className='text-[#8F8A76] mb-4'>A product page featuring a detailed nutrition information, images, interactive links, and an image map of Canada linking local distributors for enhanced user navigation.</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {["Image Maps", "JavaScript", "HTML", "CSS"].map((tech, key) => (
                        <span 
                            key={key}
                            className='bg-[#BE4732] text-white py-1 px-3 rounded-full text-sm hover:bg-[#BE4732B3] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>
                                {tech}
                        </span>
                    ))}
                </div>
                <div className='flex justify-between items-center'>
                    <a href='https://patriciaanneu.github.io/favourite_product/Assignment3.html' target = '_blank' className='text-[#8F8A76] hover:text-[#BE4732E6] transitions-colors my-4'>View Project <span>&rarr;</span></a>
                </div>
                <div className='flex justify-between items-center'>
                    <a href='https://patriciaanneu.github.io/favourite_product/Assignment3.html' target = '_blank' className='text-[#8F8A76] hover:text-[#BE4732E6] transitions-colors my-4'>
                        <img src={reeseImage} />
                    </a>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
