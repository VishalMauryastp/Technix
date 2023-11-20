import React from 'react'
import { BsArrowRight, BsFillCaretRightFill } from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

import img1 from "../../assets/hero/hero-1.jpg"
import img2 from "../../assets/hero/hero-2.jpg"
import img3 from "../../assets/hero/hero-3.jpg"
import shape5 from "../../assets/hero/shape-5.png"
import shape4 from "../../assets/hero/shape-4.png"
import shape3 from "../../assets/hero/shape-3.png"
import shape2 from "../../assets/hero/shape-2.png"
import shape1 from "../../assets/hero/shape-1.png"
import shape7 from "../../assets/hero/shape-7.png"
import quot from "../../assets/hero/quot.png"
import { useNavigate } from 'react-router-dom';


const images = [img1, img2, img3]
const Card = ({ _this }) => {
    return (
        <div className='relative sm:h-[calc(100vh-88px)] h-[calc(100vh-72px)]'>
            <img className='h-full w-full object-cover' src={_this} alt="loading.." />
        </div>
    )
}

const Landing = () => {
    const navigate = useNavigate()
    return (
        <section className='relative w-[98%] mr-0 ml-auto font-robo overflow-hidden'>
            <Swiper navigation={{
                nextEl: ".nextBtn",
                prevEl: ".preBtn"
            }}
                loop={true}
                autoplay={{
                    delay: 4000,
                }}
                modules={[Navigation, Autoplay]}
                id="homeCaousel"
            >
                {
                    images.map((value,
                        i) => {
                        return (
                            <SwiperSlide key={i}><Card _this={value} /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className='flex gap-4 absolute sm:bottom-7 bottom-2 left-1/2 -translate-x-1/2 z-30'>
                <button className='preBtn swiperbtn'><BsArrowRight className='rotate-[180deg]' /></button>
                <button className='nextBtn swiperbtn'><BsArrowRight /></button>
            </div>
            <div className='absolute sm:left-0 left-4 sm:bottom-0 sm:top-auto top-5 z-20 bg-cyan sm:h-[8rem] sm:w-[10rem] text-white flex items-center justify-center sm:p-0 p-2 rounded sm:rounded-none'>
                <p className='sm:text-sm text-xs'><span className='block text-center sm:text-5xl text-2xl font-bold tracking-[-3px]'>13</span>Year of Experince</p>
            </div>
            <div className='absolute left-0 bottom-0 z-10 w-[30%]'>
                <img className='object-contain w-full h-full' src={shape4} alt="loading.." />
            </div>
            <div className='absolute sm:right-0 sm:bottom-0 bottom-[4rem] z-20 bg-darkblue sm:h-[8rem] h-[6rem] sm:w-[40%] mx-[10%] sm:m-0 text-white '>
                <div className='relative flex items-center justify-center w-full h-full bg-[url(/src/assets/hero/shape-6.png)] bg-cover bg-no-repeat'>
                    <div className="w-[80%]">
                        <p className='text-[14px] font-normal whitespace-normal border-l-2 border-cyan pl-2'>
                            Our company provide full <span className='text-yellow text-[14px]'>services</span> for the cons
                            <span className='lg:block'>private houses and cottagaes since 19</span>
                        </p>
                    </div>
                    <div className='absolute right-0 bottom-0 sm:w-auto sm:h-auto w-[4rem]'>
                        <img className='w-full h-full object-contain' src={shape5} alt="loading..." />
                    </div>
                    <div className='absolute -left-5 bg-white p-3 rounded-lg -top-5'>
                        <img src={quot} alt="quot" />
                    </div>
                </div>
            </div>
            <div className='absolute right-0 bottom-0 z-10 h-full'>
                <img src={shape2} alt="loading.." />
            </div>
            <div className='linearGradiant absolute left-0 bottom-0 z-10 h-full w-1/2'>
                <img src={shape1} alt="loading.." />
            </div>
            <div className='absolute z-10 top-1/2 -translate-y-1/2 w-full'>
                <div className='w-[80%] flex justify-between mx-auto z-10'>
                    <div>
                        <h2 className="wavyUnderline italic sm:text-base text-sm ">best <span className='text-cyan'>it solutions</span></h2>
                        <h1 className='text_animation relative text-white capitalize lg:text-6xl md:text-4xl text-2xl font-rele font-bold lg:mt-8 md:mt-6 mt-4 '>
                            <span className='text-black'>Trusted It &</span>
                            <span className='text-cyan'>Tech</span>
                            <span className='strokeme block '> Solution</span>
                        </h1>
                        <button className='relative capitalize py-3 px-6 md:py-4 md:px-10 bg-darkblue text-white after:absolute after:w-[1.2rem] after:h-[1.2rem] after:bg-cyan after:right-0 after:bottom-0 after:content-[""] after:rounded-tl-lg flex gap-4 items-center lg:mt-5 sm:mt-[5rem] md:text-base text-sm mt-9'
                            onClick={() => {
                                navigate("/comming-soon")
                            }}
                        >
                            Learn more <BsArrowRight className='sm:text-xl text-lg' />
                        </button>
                        <div className='w-full'>
                            <img className='ml-auto mr-4' src={shape7} alt="loading.." />
                        </div>
                    </div>
                    <div className='w-[30%] flex items-center justify-center'>
                        <button className='ripple border-2 border-white rounded-full md:w-[5rem] md:h-[5rem] w-[3.5rem] aspect-square flex items-center justify-center'><BsFillCaretRightFill className='text-white sm:text-3xl text-2xl' /></button>
                    </div>
                </div>
            </div>
            <div className='z-10 absolute sm:top-24 top-20 sm:right-5 -right-1'>
                <img className='bollBounce md:w-full w-[70%]' src={shape3} alt="loading.." />
            </div>
        </section>
    );
}

export default Landing