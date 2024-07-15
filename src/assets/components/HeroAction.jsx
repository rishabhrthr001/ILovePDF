import React from 'react'

const HeroAction = ({text}) => {
    const handleButtonClick=()=>{ 
        console.log('Button clicked');
          alert('Button clicked');
        }
      
  return (
    <div className='flex flex-col justify-center items-center text-center mt-8'>
        <h1 className='lg:text-5xl md:text-3xl font-bold'>Every tool you need to work with PDFs in one place</h1>
        <h2 className='lg:text-2xl md:text-xl'>Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge,</h2>
        <h2 className='lg:text-2xl md:text-xl'>split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h2>
    <div className="flex justify-center">
      <button
        className="hidden md:block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
        onClick={handleButtonClick}
        style={{ marginTop: '20px' }}
      >
        {text}
      </button>
      <img
        src={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
          }
        alt="Logo"
        className="md:hidden h-10 w-auto ml-4 cursor-pointer"
        onClick={handleButtonClick}
        style={{ marginTop: '20px' }}
      />
    </div>
    </div>
  );
};
export default HeroAction