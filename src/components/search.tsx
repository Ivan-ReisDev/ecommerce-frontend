import { CiSearch } from "react-icons/ci";


export default function Search() {
    return (
        <div className='w-min-[500px] w-[500px] h-min-[40px] h-[40px] rounded bg-[#fff] flex flex-row items-center justify-between '>
            <input
                type="text"
                placeholder='Buscar'
                className='w-full bg-transparent pl-3 text-[#000]'
            />
            <CiSearch
            className="text-[#7c7c7c] mr-4 text-[22px]"
            />
        </div>


    )
}
