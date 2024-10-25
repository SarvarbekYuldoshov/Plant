import React from 'react'
import Rasm_1 from "../images/Plant.png"

const Header = () => {
  return (
    <>
        <div className=''>
           <div className='max-w-[1200px] mx-auto p-[20px] flex justify-between'>
                <img className='' src={Rasm_1} alt="" />
                <ul className=''>
                    <li className=''><a href="">Home</a></li>
                    <li className=''><a href="">Services</a></li>
                    <li className=''><a href="">About Us</a></li>
                    <li className=''><a href="">Home</a></li>
                    <li className=''><a href="">Home</a></li>
                </ul>
           </div>
        </div>
    </>
  )
}

export default Header
