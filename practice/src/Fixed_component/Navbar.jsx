import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <section className="my-3 container mx-auto max-w-6xl flex flex-col justify-between items-center md:flex-row">
        <div>
            {/* logo */}
            <h1 className="text-4xl font-bold cursor-pointer">Moinul</h1>
        </div>
        <div className="flex flex-row gap-4 text-xl font-semibold ">
            {/* navigation */}
            <Link to={"/"} className='cursor-pointer  hover:underline decoration-sky-500'>Home</Link>
            <Link to={"/about"} className='cursor-pointer'>About</Link>
            <p className='cursor-pointer'>Contact</p>
        </div>
        <div className=''>
            {/* Button */}
            <button  className="bg-[#3B25C1]  px-3 py-1.5 text-amber-50 rounded-md hover:bg-blue-800 cursor-pointer active:bg-blue-950 ">Login</button>
        </div>
    </section>
  )
}
