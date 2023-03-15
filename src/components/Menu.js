import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-jakarta  text-blue-100 h-28">
        <a href="/" className="logo lg:my-12">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-12 items-center uppercase">
            <li><a href="/" className="font-bold">Home</a></li>
            <li><a href="#working" className="font-bold">working</a></li>
            <li><a href="#" className="font-bold">whitepaper</a></li>
            <li><a href="#about" className="font-bold">about us</a></li>
            <li><a href="#faq" className="font-bold">FAQ</a></li>
          </ul>
        </nav>

        <a href="/">
          <button className="text-purple-100 font-inter border border-purple-100 py-2 lg:px-8 px-4 font-semibold mt-5 rounded-full hover:bg-purple-100 hover:text-white-100">
            Download
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-jakarta">
        <a href="/" className="text-white-100">
          <img src={logo} alt="Logo" />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-jakarta font-semibold bg-seagreen-100 z-20" style={{ left: "0" }}>

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 uppercase text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 uppercase text-white-100">
            <a href="#working" className="text-lg ml-4 font-semibold">working</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 uppercase text-white-100">
            <a href="#" className="text-lg ml-4 font-semibold">whitepaper</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 uppercase text-white-100">
            <a href="#about" className="text-lg ml-4 font-semibold">about us</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 uppercase text-white-100">
            <a href="#faq" className="text-lg ml-4 font-semibold">FAQ</a>
          </button>
        </div> : null
      }


    </header >
  )
}
