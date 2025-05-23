import React from "react"

function Card({Name1, ID ,Info,pic}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-1260 h-60"  src={pic}/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{Name1}</div>
      <div >ID: {ID}</div>
      <p className="text-white text-base">
        {Info}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
  )
}

export default Card