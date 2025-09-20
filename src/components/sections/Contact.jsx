import React from 'react'
{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}
export const Contact = () => {
  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
        <div className='px-4 w-150'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-[#8F8A76] to-[#BE4732] bg-clip-text text-transparent text-center'>Get In Touch</h2>

            <form className='space-y-6'>
                <div className='relative'>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        required
                        className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50'
                        placeholder='Full Name'></input>
                </div>

                <div className='relative'>
                    <input
                        type='tel'
                        id='number'
                        name='number'
                        required
                        className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50'
                        placeholder='Contact Number'></input>
                </div>

                <div className='relative'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        required
                        className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50'
                        placeholder='Email'></input>
                </div>

                <div className='relative'>
                    <textarea
                        id='message'
                        name='message'
                        required
                        rows={5}
                        className='w-full bg-white/5 border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/50'
                        placeholder='Your Message'></textarea>
                </div>

                <button type='submit' className='w-full bg-[#BE4732] text-white py-3 px-6 font-medium rounded transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'>
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}
