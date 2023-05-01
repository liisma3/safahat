import React from 'react'

import Footer from '@/components/Layout/Footer'
import useInterface from '@/store/hooks/useInterface'
import Navigation from './Navigation'
function Layout({ children }) {
    const { show } = useInterface()

    return (
        <div className='min-h-screen font-mont overflow-x-hidden '>
            <Navigation />
            <div className=' w-full mt-20'>

                {children}
            </div>
            <div className=' w-full flex justify-center items-center '>
                <Footer />
            </div>
        </div>

    )
}

export default Layout