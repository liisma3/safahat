import React, { useEffect } from 'react'
import Presentation from '@/components/presentation'
import Tablets from '@/components/Tablets'

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex sm:mt-18 min-h-screen flex-col">

      <Presentation />
      <Tablets />
    </div>


  )
}
