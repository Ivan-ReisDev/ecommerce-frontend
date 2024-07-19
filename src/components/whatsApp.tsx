import Image from 'next/image'
import React from 'react'
import whatsapp from "../assets/whatsApp.png"
import Link from 'next/link'
export default function WhatsApp() {
  return (
    <div className='fixed bottom-5 right-5 z-20'>
        <Link 
            href={"/"}
        >
        <Image 
            src={whatsapp}
            alt='Whatsapp'
            width={70}
        />
        </Link>


    </div>
  )
}
