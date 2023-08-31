"use client";
import Image from "next/image";
import { useState } from "react";
import { slides } from "../../(defaultLayout)/article/images";
import "tw-elements/dist/css/tw-elements.min.css";
function CarouselArticle() {
  const [initComplete, setInitComplete] = useState<boolean>(false);
  const init = async () => {
    const { Carousel, initTE } = await import("tw-elements");
    initTE({ Carousel });
    setInitComplete(true);
  };
  init();
  return (
    <div className="">
      {/* Carousel */}
      <div
        id="carouselIndicators"
        className="relative mb-[30px]"
        data-te-carousel-init
        data-te-ride="carousel"
        data-te-interval="4000"
      >
        {/* Carousel indicators */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          {slides.map((item, index) => (
            <button
              key={index}
              type="button"
              data-te-target="#carouselIndicators"
              data-te-slide-to={index}
              {...(index === 0 ? { "data-te-carousel-active": true } : {})}
              className="mx-[3px] slide-control opacity-50 box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none  hover:scale-125 bg-white hover:opacity-70 rounded"
              aria-current="true"
              aria-label={`Slide ${index}`}
            ></button>
          ))}
        </div>
        {/* Carousel items */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {slides.map((item, index) => (
            <div
              key={index}
              className={`relative ${
                index === 0 ? "" : "hidden"
              } float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none rounded-[5px]`}
              data-te-carousel-item
              {...(index === 0 ? { "data-te-carousel-active": true } : {})}
            >
              <div className="relative">
                <div>
                  <Image
                    src={item.src}
                    alt="image"
                    className="w-full max-h-[537px] rounded-[5px]"
                  />
                </div>
                <div className="absolute bg-black/80 w-[380px] h-full top-0 right-0 rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-center items-start px-[36px] gap-2 z-30">
                  <button className="w-[92px] h-[25px] px-[10px] py-[6px] font- nunito font-normal text-[10px] leading-[14px] bg-white rounded-[10px]">
                    Technology
                  </button>
                  <h3 className="font-lato font-bold text-[32px] leading-[44.6px] text-white">
                    {item.title}
                  </h3>
                  <p className="font-light text-xs leading-[16.8px] text-white">
                    {item.desc}
                  </p>
                  <p className="font-light text-xs leading-[16.8px] text-white">
                    {item.date}
                  </p>
                  <button className="w-[119px] h-[44px] flex items-center justify-around  rounded-[2px] py-[6px] px-[10px] bg-pink-700 text-white font-nunito font-normal text-xs leading-[16.8px] mt-[40px]">
                    Read More
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.1665 3.99996H12.8332M12.8332 3.99996L9.49984 7.33329M12.8332 3.99996L9.49984 0.666626"
                        stroke="white"
                        strokeLinecap="round"
                        strokeWidth="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel controls - prev item */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[28px] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none hover:bg-main-grayColor-20 "
          type="button"
          data-te-target="#carouselIndicators"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeWidth="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[40] flex w-[28px] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-no hover:bg-main-grayColor-20"
          type="button"
          data-te-target="#carouselIndicators"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeWidth="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
}

export default CarouselArticle;
