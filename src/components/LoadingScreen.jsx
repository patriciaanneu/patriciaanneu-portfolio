import React, { useEffect, useState } from 'react'
{/*
    portfolio-react
    Patricia Anne Usal
    301159080
    19-09-2025
*/}
export const LoadingScreen = ({onComplete}) => {
  const [text, setText] = useState("");
  const fullText = "<patriciaanneu />";

  useEffect (() => {
    let index = 0;
    const interval = setInterval (() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval)

        setTimeout(() => {
          onComplete();
        }, 1000)
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className='fixed inset-0 z-50 bg-[#323532] text-[#8F8A76] flex flex-col items-center justify-center'>
        <div className='mb-4 text-4xl font-mono font-bold'> {text} <span className='animate-blink ml-1'> | </span></div>

        <div className='w-[200px] h-[2px] bg-[#5A5D56] rounded relative overflow-hidden'>
            <div className='w-[40%] h-full bg-[#BB3524] shadow-[0_0_15px_#3b82f6] animate-loading-bar'></div>
        </div>


    </div>


  )
}
