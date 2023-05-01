import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaBars } from 'react-icons/fa'
import useInterface from '@/store/hooks/useInterface'

function Navigation() {
    const [showMenu, setShowMenu] = useState<Boolean>(false)
    const router = useRouter()

    const isRoute = (route) => {
        return router.pathname.slice(1) === route
    }
    useEffect(() => {
        setShowMenu((showMenu) => !showMenu)
    }, [router])

    return (
        <div className={`flex bg-green-50 justify-between items-center  w-screen z-10 rounded-t-md fixed `} >


            <div className='flex justify-between items-center ' >
                <div className='cursor-pointer h-20 w-60 relative sm:hidden md:inline-grid' >
                    <Link href='/' >
                        <Image src="/liismLogo.svg" alt="liismaiil logo" layout='fill' className='object-contain' />
                    </Link>
                </div>
                <FaBars onClick={() => {
                    setShowMenu((showMenu) => !showMenu)

                }}
                    className='sm:inline-grid md:hidden xl:hidden 2xl:hidden  mr-4 absolute top-1 right-2
                     hover:text-3xl text-2xl hover:text-green-300 cursor-pointer' />
            </div>
            <div className='flex justify-between items-center ' >
                <ul className={` ${showMenu && 'sm:flex'} lg:hidden xl:hidden 2xl:hidden  flex-col font-mont  w-1/2  items-center mb-10 justify-items-center `} >
                    <li className={`list-none px-6 py-3 ${isRoute('') && 'bg-green-200'} hover:bg-green-300 rounded-md  `} >
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
            <div className='flex justify-between items-center ' >
                <ul className='flex justify-between  font-mont font-light w-3/4   sm:hidden items-center  '>
                    <li className={`list-none ${isRoute('') && 'bg-green-100 shadow-lg'} hover:bg-green-300 p-2 mx-1 rounded-md `}>
                        <Link key={`home`} href='/' > Home </Link>
                    </li>
                    <li className={`list-none ${isRoute('space') && 'bg-green-100 shadow-lg'} hover:bg-orange-100 p-2 mx-1 rounded-md`}>

                        <Link key={`space`} href='/space'> Space </Link>
                    </li>
                    <li className={`list-none  ${isRoute('tablets') && 'bg-green-100 shadow-lg'} hover:bg-orange-100 p-2 
                mx-1 rounded-md`}>

                        <Link key={`tablets`} href='/tablets'> Tablets </Link>
                    </li>
                    <li className={`list-none ${isRoute('free') && 'bg-orange-200'}
                mx-1  hover:bg-orange-100 p-2 rounded-md`}>

                        <Link key={`wolouj`} href='/free'> Free </Link>
                    </li>
                    <li className={`list-none ${isRoute('organisations') && 'bg-orange-200'} 
                mx-1 hover:bg-orange-100 p-2 rounded-md`}>

                        <Link key={`khorouj`} href='/organisations'> Organisations  </Link>
                    </li>
                    <li className={`list-none  ${isRoute('auth') && 'bg-green-100 shadow-lg'} 
                mx-1 hover:bg-orange-100 p-2 rounded-md mr-4`}>

                        <Link key={`signin`} href='/auth'> Signin </Link>
                    </li>

                </ul>
            </ div>
        </div>
    )
}

export default React.memo(Navigation)