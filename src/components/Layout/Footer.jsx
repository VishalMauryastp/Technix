import React from 'react'
import logo from "../../assets/logo/footer-logo.png"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-[#040e1c] text-white py-16'>
      <div className='w-[90%] mx-auto'>
        <NavLink to={"/"} className="w-fit block">
          <img className="mb-4" src={logo} alt="loading..." />
        </NavLink>
        <hr />
        <div className='flex justify-between mt-4 text-xs max-sm:flex-col'>
          <p className='max-sm:text-center'>&copy; Copyright <span className='text-cyan'>&copy; 2023 </span>
            Themepure. All Right Reserved
          </p>
          <div className='flex gap-8 max-sm:justify-center max-sm:mt-1'>
            <NavLink className={"text-gray-400"} to={"/comming-soon"}>Terms and Conditions</NavLink>
            <NavLink className={"text-gray-400"} to={'/comming-soon'}>Privacy policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer