import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <img className='w-32 cursor-pointer' src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' alt='Netflix Logo' />
        <div>
            <button className=' px-6 py-2 m-2 rounded cursor-pointer text-white'>Sign in</button>
            <button className='bg-red-600 px-6 py-2 m-2 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar