import React from 'react'
import CardProducts from './cardProducts'

export default function ListProducts() {
  return (
    <div className='flex flex-col w-full h-auto items-center mt-10 mb-[400px]'>
        <h1 className='text-[35px] mb-10 font-bold'>Mais Vendidos</h1>
        <div className='w-[90%] h-auto flex justify-center flex-wrap'>
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />
          <CardProducts />

        </div>
    </div>
  )
}
