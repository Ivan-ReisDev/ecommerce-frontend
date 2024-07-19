import React from 'react'
import { FaTruckRampBox } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaArrowRotateRight } from "react-icons/fa6";

export default function Infos() {
    return (
        <div className='flex flex-row items-center justify-center text-[#3d3d3d]  mt-5 h-[150px]'>
            <div className='flex flex-row w-[250px] items-center justify-around mx-5'>
                <div className='w-[60px] h-[60px] w-min-[60px] h-min-[60px] rounded-[100%] border border-[#3d3d3d] flex items-center justify-center'>
                    <FaTruckRampBox className='text-[40px] text-[#3d3d3d]' />
                </div>
                <div>
                    <h2 className='font-bold text-[16px] uppercase'>Frete Grátis para <br></br>Todo Brasil</h2>
                    <p>Com Estoque Nacional</p>
                </div>
            </div>

            <div className='flex flex-row w-[250px] items-center justify-around mx-5'>
                <div className='w-[60px] h-[60px] w-min-[60px] h-min-[60px] rounded-[100%] border border-[#3d3d3d] flex items-center justify-center'>
                    <CiCreditCard1 className='text-[40px] text-[#3d3d3d]' />
                </div>
                <div>
                    <h2 className='font-bold text-[16px] uppercase'>Parcelamento Sem <br></br>juros</h2>
                    <p>ou desconto no PIX</p>
                </div>
            </div>

            <div className='flex flex-row w-[250px] items-center justify-around mx-5'>
                <div className='w-[60px] h-[60px] w-min-[60px] h-min-[60px] rounded-[100%] border border-[#3d3d3d] flex items-center justify-center'>
                    <MdOutlineVerifiedUser className='text-[40px] text-[#3d3d3d]' />
                </div>
                <div>
                    <h2 className='font-bold text-[16px] uppercase'>Site Seguro</h2>
                    <p>compre com segurança</p>
                </div>
            </div>


            <div className='flex flex-row w-[250px] items-center justify-around mx-5'>
                <div className='w-[60px] h-[60px] w-min-[60px] h-min-[60px] rounded-[100%] border border-[#3d3d3d] flex items-center justify-center'>
                    <FaArrowRotateRight className='text-[40px] text-[#3d3d3d]' />
                </div>
                <div>
                    <h2 className='font-bold text-[16px] uppercase'>Garantia de 90 dias</h2>
                    <p>Com Estoque Nacional</p>
                </div>
            </div>

        </div>
    )
}
