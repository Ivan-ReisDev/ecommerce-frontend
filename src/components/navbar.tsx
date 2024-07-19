import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/logo-sem-fundo.png';
import { PiShoppingCartThin } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import Sidebar from './sidebar';
import Search from './search';

export default function Navbar() {
    return (
        <header className='bg-gradient-to-r from-blue-600 to-blue-400 pt-4 pb-1 text-[#fff]'>
            <div className='flex flex-row justify-between items-center border-b border-[#6ebbfa] pb-2'>
                <div className="flex items-center justify-center ml-10">
                    <Link href="/">
                    <Image
                     className='ml-3' 
                     src={Logo}
                     alt="Logo Principal" 
                     width={90} 
                     height={90} />
                    </Link>
                </div>
                <Search />
                <div className='mr-[50px] flex items-center justify-center'>
                <Link 
                className='text-[15px] mx-3 flex flex-col items-center justify-center' 
                href={`/login`}
                >
                    <HiOutlineUser className='text-[#fff] text-[40px]'/>
                    Minha Conta
                </Link>

                <button className='text-[15px] mx-3 flex flex-col items-center justify-center'>
                    <PiShoppingCartThin className='text-[#fff] text-[40px]'/>
                    Meu Carrinho
                </button>
                </div>
            </div>
            <Sidebar />
        </header>
    );
}
