import React, { useEffect } from 'react'
import Presentation from '@/components/presentation'


export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="  dark:bg-gray-800 dark:text-gray-50 ">

      <Presentation />

    </div>


  )
}
