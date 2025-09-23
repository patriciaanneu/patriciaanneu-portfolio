import React from 'react'
import portraitImage from '../../assets/portrait.png'

{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}
export const About = () => {
    {/*list of skills*/}
    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"];
    const backendSkills = ["SQL", "Python", "Java", "C#", "C++"];
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-[#8F8A76] to-[#BE4732] bg-clip-text text-transparent text-center'>
                About Me
            </h2>
            <div className='p-8'>
                {/* Flip Card: Front shows the paragraph, back shows the image */}
                <div className='flip-card mb-6 rounded-xl border border-[#8F8A76] hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all perspective-[1000px]'>
                    <div className='flip-card-inner relative w-full h-[300px] transition-transform duration-700 ease-in-out transform-style-preserve-3d hover:rotate-y-180'>
                        {/* Front Side: Paragraph */}
                        <div className='flip-card-front absolute w-full h-full backface-hidden flex items-center justify-center p-8 bg-[#323532] rounded-xl'>
                            <p className='text-center leading-relaxed'>
                                Hi! I'm Patricia Anne Usal, an aspiring web developer passionate about creating beautiful, functional, and user-friendly websites. I enjoy turning ideas into reality by writing clean, efficient code, and continuously learning new technologies.<br />
                                <br />
                                I'm excited to contribute to meaningful projects and build a career in web development. Feel free to explore my projects or get in touch to connect!
                            </p>
                            </div>
                        {/* Back Side: Image */}
                        <div className='flip-card-back absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-white rounded-xl overflow-hidden'>
                            <img 
                                src={portraitImage}
                                alt="About Me - Patricia Anne Usal"
                                className='w-full h-full object-cover rounded-xl'
                            />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {frontendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className='bg-[#BE4732] text-white py-1 px-3 rounded-full text-sm hover:bg-[#BE4732B3] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-xl font-bold mb-4'>Backend</h3>
                        <div className='flex flex-wrap gap-2'>
                            {backendSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className='bg-[#BE4732] text-white py-1 px-3 rounded-full text-sm hover:bg-[#BE4732B3] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}