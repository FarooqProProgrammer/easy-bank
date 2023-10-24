import React from 'react'

export default function DisplayCard() {
  return (
    <div className='w-full p-3 bg-green-500'>
      <div className='w-full rounded-md bg-white p-2 flex flex-col justify-start items-start '>
            <h3 className='text-xs text-gray-400'>Muhammad Ayoub</h3>
            <h3 className='text-3xl font-bold'>123456789</h3>
            <h3 className='text-xs text-gray-400'>Sign In to your Favourite Account</h3>
            <button className='px-5 py-1 text-xs mt-3 bg-green-500 text-white rounded-md'>Sign In</button>
      </div>
    </div>
  )
}
