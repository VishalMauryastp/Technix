import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import icon1 from "../../assets/feature/home-3/icon-1.png";
import icon2 from "../../assets/feature/home-3/icon-2.png";
import icon3 from "../../assets/feature/home-3/icon-3.png";
import img1 from "../../assets/feature/img-1.jpg";
import img2 from "../../assets/feature/img-2.jpg";
import img3 from "../../assets/feature/img-3.jpg";
import trangle from "../../assets/feature/trangle.svg";
import toptrangle from "../../assets/feature/toptrangle.svg";


const data = [
  {
    icon: icon1,
    img: img1,
    heading: "Our Mission",
    para: "As far as we might be concerned making an extraordinary advanc ad",
  },
  {
    icon: icon2,
    img: img2,
    heading: "About History",
    para: "As far as we might be concerned making an extraordinary advanc ad",
  },
  {
    icon: icon3,
    img: img3,
    heading: "Our Partner",
    para: "As far as we might be concerned making an extraordinary advanc ad",
  },
];
const Feature = () => {
  return (
    <section className="relative  font-robo    bg-cover  bg-[-100px_0px]   bg-[url(./src/assets/feature/shape-1.png)] py-16 before:top-0 before:absolute sm:before:h-[75%] before:h-[90%] before:bg-[#f3fbfe] before:z-[-1] before:w-full after:bottom-0 after:absolute sm:after:h-[25%] after:h-[10%] after:bg-[#020626] after:z-[-1] after:w-full">
      <div className="lg:w-[90%] w-[95%] max-sm:w-[80%] m-auto ">
        <div className="flex lg:flex-row flex-col justify-between items-center ">
          <div>
            <h1 className="lg:text-xl md:text-base text-sm max-lg:text-center wavyUnderline italic">
              feature <span className="text-[#6ee6d9] ">it solutions </span>{" "}
            </h1>
            <h2 className="lg:text-4xl max-sm:text-center md:text-3xl text-2xl font-bold mt-4 font-rele ">
              We've Been Thriving In
              <span className="text-[#6ee6d9]">38 Years</span>
            </h2>
          </div>
          <div className="lg:w-[500px] lg:mt-0 mt-4 border-cyan border-l-2 pl-4">
            <p className="md:text-base text-sm">
              As the complexity of buildings to increase, the field of
              architecture became multi-disciplinary with technological
              expertise.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-x-4  max-md:gap-y-10 mt-16">
          {data.map((val, i) => {
            return (
              <div
                key={i}
                className="group relative bg-[url(./src/assets/feature/shape-2.png)]  bg-[#fdfdfd] text-center px-4 lg:py-16 py-8"
                style={{
                  boxShadow:
                    " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0px",
                }}
              >
                <div className=" relative w-fit mx-auto">
                  <img
                    className="rounded-[80px] transition-all duration-500"
                    src={val.img}
                    alt="loading..."
                  />
                  <span className="absolute w-[50px] top-8 group-hover:opacity-100 opacity-0 duration-500 transition-all -right-4 shadow-lg  p-3 bg-white rounded-full ">
                    <img className="w-full h-full object-contain" src={val.icon} alt="loading..." />
                  </span>
                </div>

                <h3 className="md:text-2xl text-xl font-semibold  mt-6 wavyUnderline">
                  {val.heading}
                </h3>
                <p className="mt-4 lg:text-base text-sm lg:leading-[25px] text-gray-500">{val.para}</p>
                <button className=" transition-all duration-500 text-white bg-[#6ee6d9] group-hover:translate-y-0 translate-y-4 group-hover:opacity-[1] opacity-0 absolute left-[50%] -translate-x-1/2 bottom-[-25px] mt-8 w-[50px] h-[50px] flex border-[#6ee6d9] border-2 rounded-full backdrop-blur-[2px]">
                  <BiRightArrowAlt className="m-auto text-3xl" />
                </button>

                <span
                  className="absolute group-hover:w-[30px] group-hover:opacity-[1] opacity-0  h-[80px] w-0 transition-all -top-[3px] left-0 duration-500
                "
                >
                  <img
                    className="  w-full h-full"
                    src={trangle}
                    alt="loading..."
                  />
                </span>
                <span
                  className="absolute group-hover:h-[30px] h-0 group-hover:opacity-[1] opacity-0  w-[70px]  transition-all -bottom-0 right-0 duration-500
                "
                >
                  <img
                    className="  w-full h-full"
                    src={toptrangle}
                    alt="loading..."
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
