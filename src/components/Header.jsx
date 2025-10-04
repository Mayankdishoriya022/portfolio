import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-900 flex justify-between p-4 text-white'>
      <h1>Logo</h1>
      <div className='flex gap-5'>
        <a href="">Home</a>
        <a href="">About me</a>
        <a href="">Experience</a>
        <a href="">Contact Me</a>
      </div>
      <button className='bg-blue-500 hover:bg-blue-800 rounded-md p-2 text-white'>Connect</button>
    </div>
  )
}

export default Header
