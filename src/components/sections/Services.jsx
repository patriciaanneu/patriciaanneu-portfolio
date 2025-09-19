import React from 'react'
{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}
export const Services = () => {
  return (
    <section id='services' className='min-h-screen flex items-center justify-center py-20'>
        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-[#8F8A76] to-[#BE4732] bg-clip-text text-transparent text-center'>Services</h2>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-6'>
                {/* */}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Website Design and Development</h3>
                    <p className='text-[#8F8A76] mb-4'>Creating responsive, user-friendly websites tailored to client needs.</p>
                </div>
                {/* */}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Front-End Development</h3>
                    <p className='text-[#8F8A76] mb-4'>Building interactive interfaces using HTML, CSS, JavaScript, and frameworks like React.</p>
                </div>

                {/* */}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Back-End Development</h3>
                    <p className='text-[#8F8A76] mb-4'>Developing server-side logic, databases, and APIs using technologies like Java, and Python.</p>
                </div>

                {/* */}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Website Maintenance and Updates</h3>
                    <p className='text-[#8F8A76] mb-4'>Regularly updating website content, fixing bugs, and ensuring security are applied.</p>
                </div>
                
                {/* */}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Mobile Optimization</h3>
                    <p className='text-[#8F8A76] mb-4'>Ensuring website are fully functional and visually appealing on mobile devices.</p>
                </div>

                {/* */}
                <div className='p-6 rounded-xl border border-[#8F8A76] hover:-translate-y-1 hover:border-[#BE4732] hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Consultation and Strategy</h3>
                    <p className='text-[#8F8A76] mb-4'>Advising clients on best practices, technology choices, and digital strategies.</p>
                </div>

            </div>

        </div>

    </section>
  )
}
