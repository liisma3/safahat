
import React from 'react'

function space() {
  return (


    <div className='flex justify-center justify-items-center mt-20 bg-slate-600 h-screen ' >
      <div className="flex flex-col">
        <h2 className='text-gray-200  '> space</h2>
      </div>
      <div className="  ">
        <div className="flex flex-col ">

          <h2 className='text-gray-50  block'> Organisators Carousesel </h2>
          <div className="flex ">

            <div className="flex">Progress</div>
            <div className="flex">Stats</div>
            <div className="flex">Progress</div>
            <div className="flex">Stats</div>
          </div>
        </div>
        <div className="flex flex-row">safhas</div>
        <div className="flex">Progress</div>
        <div className="flex">Stats</div>

      </div>

    </div>

  )
}

export default React.memo(space)