import { CgArrowRight } from "react-icons/cg";
import { BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import img1 from "../../assets/about/about-1.png";

import icon1 from "../../assets/about/icon-1.png";
import icon2 from "../../assets/about/icon-2.png";
import icon3 from "../../assets/about/icon-3.png";
import callicon from "../../assets/icon/call.svg";
import bgpattern from "../../assets/about/shape-1.png";
import { NavLink, useNavigate } from "react-router-dom";

const data = [
  {
    img: icon1,
    heading: "Business Services",
    para: "As far as we might be concerned making an extraordinary advanc ed experience is a blend bet",
  },
  {
    img: icon2,
    heading: "Education And Training",
    para: "As far as we might be concerned making an extraordinary advanc ed experience is a blend bet",
  },
  {
    img: icon3,
    heading: "Artificial Intelligence",
    para: "As far as we might be concerned making an extraordinary advanc ed experience is a blend bet",
  },
];
const About = () => {
  const navigate = useNavigate()

  return (
    <section className="min-h-screen font-robo py-16">
      <div className="xl:hidden block w-full text-center">
        <h2 className="sm:text-xl text-sm px-8  wavyUnderline italic">best  <span className="text-[#6ee6d9]">it service </span>
        </h2>
        <h1 className="lg:text-4xl md:text-3xl text-2xl mt-4 font-bold px-8 font-rele">
          It Industries W're offering
        </h1>
      </div>
      <div className="w-[90%] m-auto xl:gap-10 flex xl:flex-row flex-col">
        <div className={`xl:w-[40%] sm:w-[50%] max-xl:h-[400px] mx-auto bg-[url(/src/assets/about/shape-1.png)] bg-contain bg-no-repeat xl:bg-[0_4rem] bg-right-top`}>
          <img className="w-full h-full object-contain" src={img1} alt="loading.." />
        </div>
        <div className="xl:w-[60%] w-full xl:py-16">
          <div className="xl:block hidden">
            <h2 className="text-xl px-8  wavyUnderline italic">best  <span className="text-[#6ee6d9]">it service </span>
            </h2>
            <h1 className="text-4xl mt-4 font-bold px-8 font-rele">
              It Industries W're offering
            </h1>
          </div>
          <div className="grid md:grid-cols-3 md:gap-0 gap-8 sm:grid-cols-2 grid-cols-1 mt-12 ">
            {data.map((val, i) => {
              return (
                <div key={i} className="flex group max-sm:border-t-2 max-sm:border-dashed max-sm:pt-8 max-sm:first:border-0">
                  <div className="px-8" >
                    <img
                      className="group-hover:scale-x-[-1] transition-all duration-500 max-[640px]:block max-[640px]:mx-auto"
                      src={val.img}
                      alt="loading"
                    />
                    <h3 className="md:text-2xl text-xl font-semibold font-rele md:mt-6 max-sm:text-center mt-4">{val.heading}</h3>
                    <p className="md:mt-4 mt-1 md:text-base text-sm md:leading-[25px] text-gray-500">
                      {val.para}
                    </p>

                    <button
                      onClick={() => {
                        navigate("/comming-soon")
                      }}
                      className="md:mt-8 mt-4 md:w-[50px] md:h-[50px] w-10 aspect-square flex border rounded-full">
                      <BiRightArrowAlt className="m-auto text-xl" />
                    </button>
                  </div>
                  <div className={`border h-[75%] border-dashed ${i == 2 ? "border-0" : ""} ${i == 1 ? "border-0 md:border" : ""} ${i == 0 ? "border-0 sm:border" : ""}`}></div>
                </div>
              );
            })}
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center border mx-auto mt-10 px-5 sm:py-2 py-5 lg:w-[70%] sm:w-[80%] rounded-3xl">
            <div className="flex justify-between items-center sm:text-center text-xs gap-2">
              <img className="w-[23px]" src={callicon} alt="loading.." />
              Provide IT services to hundreds customers
            </div>
            <NavLink to={'tel:88 01310-069824'} className="underline whitespace-nowrap block text-sm sm:text-base">+88 01310-069824</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
