import React from 'react'
import { FaInstagram, FaLinkedin, FaCopyright, FaMailBulk } from 'react-icons/fa'
import Link from 'next/link'
function Footer() {
    return (
        <div className='flex justify-center   bg-gray-800 rounded-b-md font-mont '>


            <div className=' sm:w-full w-4/5 flex justify-around items-center text-green-200 rounded-xl p-5'>
                <Link href='http://localhost:3008/'>

                    <div className=' flex items-center ' >
                        <FaCopyright size={30} /> <p className='ml-3 cursor-pointer'> copyright liismaiil.org</p>
                    </div>
                </Link>
                <div className='flex items-center '>
                    <FaInstagram size={30} />
                </div>

                <div>

                    <FaLinkedin size={30} />
                </div>
                <div>

                    <FaMailBulk size={30} />
                </div>
            </div>
        </div>
    )
}

export default Footer