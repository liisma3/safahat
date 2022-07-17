import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FaBars } from 'react-icons/fa'
import useInterface from '@/store/hooks/useInterface'

function Navigation() {
    const [showMenu, setShowMenu] = useState('sm:hidden')
    const router = useRouter()

    const isRoute = (route) => {
        return router.pathname.slice(1) === route
    }
    useEffect(() => {
        setShowMenu('sm:hidden')
    }, [router])

    return (
        <div className={`flex bg-green-200  justify-between items-center shadow-lg w-screen z-10 rounded-t-md top-0 left-0 right-0  fixed `} >

            <div className={`w-full items-center flex-col`}>
                <div className='flex justify-between items-center ' >
                    <Link href='/' >
                        <a>

                            <h1 className='font-logo text-blue-400 text-3xl  font-semibold mx-3 py-2
                             cursor-pointer'> liismaiil</h1>
                        </a>
                    </Link>
                    <FaBars onClick={() => {
                        console.log({ showMenu })
                        if (showMenu == 'sm:hidden') {
                            setShowMenu('')
                        } else { setShowMenu('sm:hidden') }

                    }}
                        className='sm:flex mr-4 xl:hidden 2xl:hidden font-logo 
                    font-bold hover:text-3xl text-2xl hover:text-green-300 cursor-pointer' />
                </div>


                <ul className={`sm:flex ${showMenu} md:hidden lg:hidden xl:hidden 2xl:hidden  flex-col
                font-mont font-semibold w-1/2  items-start mb-10  `} >
                    <li className={`list-none px-6 py-3 ${isRoute('') && 'bg-orange-200 px-12'} 
                     hover:bg-orange-100  rounded-md  `} >
                        <Link key={`home`} href='/' > Home </Link>
                    </li>
                    <li className={`list-none px-6 py-3  ${isRoute('space') && 'bg-orange-200 px-12'} w-3/4  hover:bg-orange-100 rounded-md  `}>
                        <Link key={`space`} href='/space'> Space </Link>
                    </li>
                    <li className={`list-none px-6 py-3 ${isRoute('tablets') && 'bg-orange-200 px-12'} w-3/4   hover:bg-orange-100  rounded-md  `}>
                        <Link key={`tablets`} href='/tablets'> Tablets </Link>
                    </li>
                    <li className={`list-none  px-6 py-3 ${isRoute('wolouj') && 'bg-orange-200 px-12'} w-3/4
                    hover:bg-orange-100  rounded-md  `}>
                        <Link key={`wolouj`} href='/wolouj'> Wolouj </Link>
                    </li>
                    <li className={`list-none ${isRoute('khorouj') && 'bg-orange-200 px-12'} w-3/4
                    hover:bg-orange-100 px-6 py-3 rounded-md  `}>
                        <Link key={`khorouj`} href='/khorouj'> Khorouj </Link>
                    </li>
                    <li className={`list-none ${isRoute('auth') && 'bg-orange-200 px-12'} w-3/4
                    hover:bg-orange-100 px-6 py-3 rounded-md `}>

                        <Link key={`signin`} href='/auth'> Signin </Link>
                    </li>

                </ul>

            </div>


            <ul className='flex justify-between  font-mont font-semibold w-3/4 sm:hidden items-center  '>
                <li className={`list-none ${isRoute('') && 'bg-orange-200'} hover:bg-orange-100 p-2 mx-1 rounded-xl`}>
                    <Link key={`home`} href='/' > Home </Link>
                </li>
                <li className={`list-none ${isRoute('space') && 'bg-orange-200 '} hover:bg-orange-100 p-2 mx-1 rounded-xl`}>

                    <Link key={`space`} href='/space'> Space </Link>
                </li>
                <li className={`list-none  ${isRoute('tablets') && 'bg-orange-200'} hover:bg-orange-100 p-2 
                mx-1 rounded-xl`}>

                    <Link key={`tablets`} href='/tablets'> Tablets </Link>
                </li>
                <li className={`list-none ${isRoute('wolouj') && 'bg-orange-200'}
                mx-1  hover:bg-orange-100 p-2 rounded-xl`}>

                    <Link key={`wolouj`} href='/wolouj'> Wolouj </Link>
                </li>
                <li className={`list-none ${isRoute('khorouj') && 'bg-orange-200'} 
                mx-1 hover:bg-orange-100 p-2 rounded-xl`}>

                    <Link key={`khorouj`} href='/khorouj'> Khorouj </Link>
                </li>
                <li className={`list-none  ${isRoute('auth') && 'bg-orange-200'} 
                mx-1 hover:bg-orange-100 p-2 rounded-xl mr-4`}>

                    <Link key={`signin`} href='/auth'> Signin </Link>
                </li>

            </ul>


        </div >
    )
}

export default Navigation