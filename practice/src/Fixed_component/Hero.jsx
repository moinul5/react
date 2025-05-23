import React from 'react'
import logo from '/image/teacher.png'
import { FaFacebook } from "react-icons/fa";


export default function Hero() {
  return (
    <div >
   <div className="min-h-screen">
  <div className="flex flex-row items-center justify-center px-50">
     <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    <FaFacebook className="mt-2 text-3xl text-blue-700" /> 
    </div>
   

    <img
      src={logo}
    />
   
  </div>
</div>
    </div>
  )
}
