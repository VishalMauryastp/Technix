import React from 'react'
import { BsArrowRight } from "react-icons/bs"
import services1 from "../../assets/services/services-1.jpg"
import services2 from "../../assets/services/services-2.jpg"
import services3 from "../../assets/services/services-3.jpg"
import services4 from "../../assets/services/services-4.jpg"
import { useNavigate } from 'react-router-dom'

const Card = ({ value }) => {
  const navigate = useNavigate()

  return (
    <div className='relative group hover:border hover:border-cyan border border-transparent transition-all duration-300 p-4 rounded bg-[#0d1130] h-[380px]  cursor-pointer'>
      <p className='border border-gray-500 rounded-full w-10 h-10 text-sm flex justify-center items-center ml-auto mr-0'>
        {value.title.slice("0", "1")}
      </p>
      <h3 className='text-xl font-rele font-semibold text-center mt-4 mx-auto px-8'>{value.title}</h3>
      <div className='relative mt-8'>
        <p className='text-sm mt-6 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out'>
          {value.contant}
        </p>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full flex items-center justify-center opacity-100 group-hover:opacity-0 transition-all duration-900 ease-in-out'>
          <img src={value.img} alt="loading..." />
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/comming-soon")
        }}
        className='absolute bottom-8 w-full left-0 text-cyan flex items-center justify-center gap-2 capitalize text-sm'>read out more <BsArrowRight className='-rotate-45' /> </button>
    </div>
  )
}

const cardData = [
  {
    title: 'Product development',
    img: services1,
    contant: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet repellendus perspiciatis eum deleniti expedita sunt eos sed maiores consectetur."
  },
  {
    title: 'Voice Over Internet Protocol',
    img: services2,
    contant: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet repellendus perspiciatis eum deleniti expedita sunt eos sed maiores consectetur."
  },
  {
    title: 'Clouds Backup Services',
    img: services3,
    contant: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet repellendus perspiciatis eum deleniti expedita sunt eos sed maiores consectetur."
  },
  {
    title: 'Mobile and Remote Networking',
    img: services4,
    contant: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet repellendus perspiciatis eum deleniti expedita sunt eos sed maiores consectetur."
  },
  {
    title: 'Data Backup and Restoration',
    img: services2,
    contant: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet repellendus perspiciatis eum deleniti expedita sunt eos sed maiores consectetur."
  },
]

const ServicesFirst = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-darkblue text-white pt-8 font-robo'>
      <p className='text-center italic wavyUnderline'>
        service <span className='text-cyan'>it solutions</span>
      </p>
      <h1 className='text-center lg:text-4xl md:text-3xl text-2xl mt-8 font-rele font-bold max-sm:w-[90%] max-sm:mx-auto'>
        All Professional <span className="text-cyan">IT Solutions</span> & Services
      </h1>
      <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 md:gap-4 gap-8 px-4 my-16 max-sm:w-[90%] max-sm:mx-auto'>
        {
          cardData.map((value, i) => {
            return (
              <Card key={i} value={value} />
            )
          })
        }
      </div>
      <button
        onClick={() => {
          navigate("/comming-soon")
        }}
        className='block mx-auto relative capitalize py-4 px-10 bg-darkblue text-white after:absolute after:w-[1.2rem] after:h-[1.2rem] after:bg-cyan after:right-0 after:bottom-0 after:content-[""] after:rounded-tl-lg border border-gray-600'>view all services</button>
    </section>
  )
}

export default ServicesFirst