import Image from 'next/image'
import React from 'react'
import Preloader from "../../public/loading.gif"

export default function Loading() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <Image src={Preloader} alt="Loading" />
    </div>
  )
}
