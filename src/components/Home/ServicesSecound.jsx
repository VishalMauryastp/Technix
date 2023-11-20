import React, { useEffect, useState } from 'react'
import { BsCheck } from "react-icons/bs"

import world from "../../assets/fun-fact/world.png"
import shap2 from "../../assets/fun-fact/shape-2.png"
import shap1 from "../../assets/fun-fact/shape-1.png"
import shap3 from "../../assets/fun-fact/shape-3.png"
import shap4 from "../../assets/fun-fact/shape-4.png"
import { useNavigate } from 'react-router-dom'

const ServicesSecound = () => {
    const navigate = useNavigate()

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const updateScrollPercentage = () => {
        const percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        setScrollPercentage(Math.min(percentage, 100));
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPercentage);
        return () => {
            window.removeEventListener('scroll', updateScrollPercentage);
        };
    }, []);

    return (
        <section className='radialGradient relative overflow-hidden text-white py-16 flex lg:flex-row flex-col items-center gap-10 xl:gap-0 px-6'>
            <div className='lg:hidden block'>
                <p className='wavyUnderline italic max-lg:text-center md:text-base text-sm'>service <span className='text-cyan'>it solutions</span></p>
                <h2 className='md:text-3xl text-2xl font-rele font-semibold mt-7 max-sm:text-center'>Tech Change The World</h2>
            </div>
            <div className='lg:w-[55%] w-[80%] gap-4 flex items-center sm: justify-evenly '>
                <div className='flex items-center justify-evenly lg:gap-10 gap-6 flex-col'>
                    <p className='text-center whitespace-nowrap'>
                        <span className='strokeme lg:text-4xl text-3xl font-bold font-rele tracking-[2px] block'>10+</span>
                        Experience
                    </p>
                    <p className='text-center whitespace-nowrap'>
                        <span className='strokeme lg:text-4xl text-3xl font-bold font-rele tracking-[3px] block'>255</span>
                        square area
                    </p>
                    <p className='text-center whitespace-nowrap'>
                        <span className='strokeme lg:text-4xl text-3xl font-bold font-rele tracking-[3px] block'>310</span>
                        square area
                    </p>

                </div>
                <div className={`w-[350px]`}
                    style={{ transform: `rotate(${scrollPercentage}deg)` }}
                >
                    <img className='w-full h-full object-contain' src={world} alt="loading.." />
                </div>
            </div>
            <div className='lg:w-[45%] sm:w-[80%] relative z-10'>
                <div className='lg:block hidden'>
                    <p className='wavyUnderline italic'>service <span className='text-cyan'>it solutions</span></p>
                    <h2 className='text-3xl font-rele font-semibold mt-7'>Tech Change The World</h2>
                </div>
                <p className='mt-8 text-gray-500'>
                    Our company provides a full range of services for the construction
                    <span className='block'>of private houses and cottages since 19</span>
                </p>
                <div className=' text-gray-500 mt-4'>
                    <p><BsCheck className='text-cyan inline text-2xl mr-1' />series of manual and semi-manual activities.</p>
                    <p><BsCheck className='text-cyan inline text-2xl mr-1' />Construction is different from other industries</p>
                </div>
                <button
                    onClick={() => {
                        navigate("/comming-soon")
                    }}
                    className='mt-8 relative capitalize py-4 px-10 bg-lightBlue text-white after:absolute after:w-[1.2rem] after:h-[1.2rem] after:bg-cyan after:right-0 after:bottom-0 after:content-[""] after:rounded-tl-lg font-rele font-medium max-sm:mx-auto block md:text-base text-sm'>Tell Us How Can We Help
                </button>
                <div className='absolute -top-10 right-16'>
                    <img src={shap4} alt="loading..." />
                </div>
            </div>

            <div className='absolute xl:-bottom-[99%] xl:-left-[45%] lg:-bottom-[100%] lg:-left-[70%] md:-bottom-[68%] md:-left-[70%] -bottom-[70%] -left-[90%] '>
                <img className='rotateImage' src={shap2} alt="loading..." />
            </div>
            <div className='absolute sm:top-[10%] top-4 left-4'>
                <img src={shap1} alt="loading..." />
            </div>
            <div className='absolute bottom-0 right-0 max-sm:w-[50%]'>
                <div className='sm:h-[350px]'>
                    <img className='h-full object-contain w-full' src={shap3} alt="loading..." />
                </div>
            </div>
        </section>
    )
}

export default ServicesSecound