import Link from "next/link";

export default function Sidebar() {
    
  return (
    <nav className='h-full w-full flex items-center justify-center'>
      <ul className='flex'>
        <li className='mx-4 relative group pr-2'>
          <a href="/" className='block py-2'>Início</a>
          <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-[#6ebbfa] transition-all duration-300 group-hover:w-full'></span>
        </li>
        <li className='mx-4 relative group pr-2'>
          <a href="/" className='block py-2'>Acessórios</a>
          <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-[#6ebbfa] transition-all duration-300 group-hover:w-full'></span>
        </li>
        <li className='mx-4 relative group pr-2'>
          <a href="/" className='block py-2'>Fones de Ouvido</a>
          <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-[#6ebbfa] transition-all duration-300 group-hover:w-full'></span>
        </li>
        <li className='mx-4 relative group pr-2'>
          <a href="/" className='block py-2'>Caixas de Som</a>
          <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-[#6ebbfa] transition-all duration-300 group-hover:w-full'></span>
        </li>
        <li className='mx-4 relative group pr-2'>
          <a href="/" className='block py-2'>Lançamentos</a>
          <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-[#6ebbfa] transition-all duration-300 group-hover:w-full'></span>
        </li>
        <li className='mx-4 relative group pr-2'>
          <a href="/" className='block py-2'>Login</a>
          <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-[#6ebbfa] transition-all duration-300 group-hover:w-full'></span>
        </li>
      </ul>
    </nav>
  );
}
