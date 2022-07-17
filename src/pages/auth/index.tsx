import React from 'react'

function Authentication() {
  return (

    <div className=' flex justify-center shadow-inner'>


      <div className='flex flex-col items-center justify-center h-3/4 mt-28  w-4/5 shadow-2xl'>
        <div className='my-5 md:w-full w-3/4 sm:mx-28 flex justify-center shadow-xl p-3 bg-gray-100 rounded-md'  >
          <label htmlFor='login' className='mr-14 p-2'> Login</label>
          <input type='text' id='login' name='login' className='border-2 border-cyan-400 ml-3 rounded-md p-2  ' />
        </div>
        <div className=' my-5  md:w-full w-3/4 sm:mx-28 flex justify-center shadow-xl p-3 bg-gray-100 rounded-md'>
          <label htmlFor='password' className='mr-10'> Password</label>
          <input type='password' id='password' name='password' className='border-2 border-cyan-400 ml-3 rounded-md p-2' />
        </div>
        <button className='bg-slate-500 rounded text-white  py-2 font-bold text-xl px-11 my-9'> signin For free</button>
      </div>
    </div>
  )
}

export default Authentication