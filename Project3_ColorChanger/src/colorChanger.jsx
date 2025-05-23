import React, { useState } from 'react'

function ColorChanger() {
  const [color, setColor] = useState('white')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <h1 className=' justify-center flex align-middle text-6xl items-center h-screen '>
      <div class="bg-gray-300 px-4 py-2 rounded-4xl">
        Color Picker
    </div>
        </h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={()=>setColor('Blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={()=>setColor('Pink')} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: 'Pink'}}>Pink</button>
            <button onClick={()=>setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: 'purple'}}>Purple</button>
            <button onClick={()=>setColor('Orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: 'Orange'}}>Orange</button>
            <button onClick={()=>setColor('Yellow')} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: 'Yellow'}}>Yellow</button>
        </div>

      </div>
    </div>
    
  )
}

export default ColorChanger