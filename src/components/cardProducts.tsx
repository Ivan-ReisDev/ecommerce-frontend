import Image from 'next/image'
import React from 'react'
import Relogio from "../assets/relogio.png"
import Link from 'next/link'
import { FaStar, FaRegStar  } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

export default function CardProducts() {
  return (
    <div className='bg-[#fff] max-w-[250px] p-4 rounded shadow-2xl	m-4'>
      <Link
        href={"/"}
        className='text-[13px]'>
        <div className=''>
          <Image
            src={Relogio}
            alt='Produto'
            width={200}
            height={200} />
        </div>
        <div>
          <h3 className='font-bold text-[#4486f3ff]'>Relógio Xiaomi Smart Mi Band 8 1.62 Amoled Preto</h3>
          <div>
            <div className='flex items-center'>
              <span className='mr-1 text-[11px] text-[#818181f5]'>3.7</span>
              <FaStar className='text-[#ffaf02f5]' /> 
              <FaStar className='text-[#ffaf02f5]' />
              <FaStar className='text-[#ffaf02f5]' />
              <FaStarHalf className='text-[#ffaf02f5]' />
              <FaStar  className='text-[#b8b8b8f5]' />
              </div>
          </div>
          <div>
            <span className='line-through text-[11px] text-[#a5a5a5]'>De R$ 590,90</span>
            <h3 className='font-bold  text-[19px]'>R$ 260,00</h3>
            <span className='font-bold text-[12px]'>em 12x R$ 26,00</span>
          </div>
          <div>
            <h3>Enviado por <span className='font-bold text-[#4486f3ff]'>Sedex</span></h3>
          </div>
        </div>
      </Link>
    </div>
  )
}
