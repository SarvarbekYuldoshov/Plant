import React from 'react'
import Rasm_1 from "../images/Plant.png"

const Header = () => {
  return (
    <>
        <div className=''>
           <div className='max-w-[1200px] mx-auto p-[20px] flex justify-between'>
                <img className='' src={Rasm_1} alt="" />
                <ul className=''>
                    <li className='w-[44px] h-[19.42px] font-dm-sans text-[16px] font-normal leading-[20.83px] text-left'><a href="">Home</a></li>
                    <li className='w-[44px] h-[19.42px] font-dm-sans text-[16px] font-normal leading-[20.83px] text-left'><a href="">Services</a></li>
                    <li className='w-[44px] h-[19.42px] font-dm-sans text-[16px] font-normal leading-[20.83px] text-left'><a href="">About Us</a></li>
                    <li className='w-[44px] h-[19.42px] font-dm-sans text-[16px] font-normal leading-[20.83px] text-left'><a href="">Blog</a></li>
                    <li className=''><a href="">Contact</a></li>
                </ul>
           </div>
        </div>
    </>
  )
}

export default Header
