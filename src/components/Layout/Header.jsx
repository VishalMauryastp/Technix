import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo/logo.png"

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className='font-robo'>
            <nav className='sm:w-[80%] w-[90%] mx-auto py-4 flex justify-between items-center'>
                <NavLink to={"/"}>
                    <img className=' w-[70%] sm:w-full h-full object-contain' src={logo} alt="Logo" />
                </NavLink>
                <button onClick={() => {
                    navigate("/comming-soon")
                }} className='relative capitalize py-3 px-6 md:py-4 md:px-10 bg-darkblue text-white after:absolute after:w-[1.2rem] after:h-[1.2rem] after:bg-cyan after:right-0 after:bottom-0 after:content-[""] after:rounded-tl-lg md:text-base text-xs '>get started today</button>
            </nav>
        </header>
    )
}

export default Header