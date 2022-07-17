import Layout from '@/components/Layout'
import React from 'react'

function Presentation() {
    return (
        <div className="bg-blue-500">
            <div className=' grid items-center min-h-screen min-w-screen sm:grid-cols-1 grid-cols-2 
            bg-orange-400 
        transform rotate-6 border-4 border-green-200 sm:rotate-0 sm:border-0 '>
                <div className="sm:w-screen w-1/2 h-1/2   font-semibold px-12 py-12">
                    Presentation
                </div>
                <h1 className=" sm:w-screen w-1/2 h-1/2 text-3xl px-9">
                    <b className='text-yellow-300'> Presentation</b>
                </h1>
            </div>
        </div>

    )
}


export default Presentation