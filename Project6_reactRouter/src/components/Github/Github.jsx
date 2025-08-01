import React, { useEffect, useState } from 'react'
import { data, useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  // const [data, setData] =useState([]) 
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/moinul5")
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response =  await fetch("https://api.github.com/users/moinul5")
  return response.json()
}