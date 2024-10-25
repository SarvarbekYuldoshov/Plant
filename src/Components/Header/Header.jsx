import React from 'react'
import Rasm_1 from "../images/Plant.png"

const Header = () => {
  return (
    <>
        <div className=''>
           <div className='max-w-[1200px] mx-auto p-[20px] flex justify-between'>
                <img className='' src={Rasm_1} alt="" />
                <ul class="flex">
                    <li class="">
                        <a className='font-dm-sans text-[16px] font-normal leading-[20.83px]' href="">Home</a>
                    </li>
                    <li>
                        <a className='font-dm-sans text-[16px] font-normal leading-[20.83px]' href="">Services</a>
                    </li>
                    <li>
                        <a className='font-dm-sans text-[16px] font-normal leading-[20.83px]' href="">About Us</a>
                    </li>
                    <li>
                        <a className='font-dm-sans text-[16px] font-normal leading-[20.83px]' href="">Blog</a>
                    </li>
                    <li>
                        <a className='font-dm-sans text-[16px] font-normal leading-[20.83px]' href="">Contact</a>
                    </li>
                </ul>
           </div>
        </div>
    </>
  )
}
export default Header
