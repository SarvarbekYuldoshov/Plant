import React from 'react'
import Rasm_1 from "../images/Plant.png"

const Header = () => {
  return (
    <>
      <div className=''>
        <div className='max-w-[1200px] mx-auto p-[20px] flex justify-between'>
          <ul className=''>
             <img className='' src={Rasm_1} alt="Plant logo" />
          </ul>
          <ul className="flex list-none space-x-8">
            <li>
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
          <ul className=''>
       <p></p>
          </ul> 
        </div>
      </div>
    </>
  )
}
export default Header
