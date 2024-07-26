import React from 'react'
import Link from "next/link"

const navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-48 items-center justify-center'>
        <div className=''>
           <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold">
              <span className='text-white '>Lama</span> 
              <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>dev</span> 
           </Link>
        </div>
        <div className="">2</div>
    </div>
  )
}

export default navbar  