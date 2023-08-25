import React, { useRef, useState } from "react";

const DailygiftItem = ({
  day,
  count,
  className,
}: {
  day: string;
  count: string;
  className: string;
}) => {
  const [check, setCheck] = useState<boolean>(false);
  const itemClick = useRef<HTMLDivElement>(null);
  const hadleCheck = () => {
    setCheck(!check);

    if (itemClick.current) {
      if (!check) {
        itemClick.current.classList.remove("bg-violet-400");
        itemClick.current.classList.add("bg-violet-300");
        itemClick.current.children[0].classList.remove("bg-pink-400");
        itemClick.current.children[0].classList.add("bg-pink-300");
      } else {
        itemClick.current.classList.remove("bg-violet-300");
        itemClick.current.classList.add("bg-violet-400");
        itemClick.current.children[0].classList.remove("bg-pink-300");
        itemClick.current.children[0].classList.add("bg-pink-400");
      }
    }
  };
  return (
    <div
      ref={itemClick}
      onClick={() => hadleCheck()}
      className={`${className} w-[132px] bg-violet-400 rounded-[21px] relative shadow-[rgb(0,0,0,0.4)_-2px_-2px_5px_0px_inset] flex flex-col justify-between items-center`}
    >
      <div className="text-white w-full px-[20px] pt-2 bg-pink-400 text-center rounded-tl-[21px] rounded-tr-[21px] shadow-[0_10px_6px_2px_rgb(0,0,0,0.1)] fot-nunito text-[33.38px] leading-[45.51px] font-bold font-nunito">
        {day}
      </div>
      <div>
        <svg
          className="my-3 w-full h-full relative"
          width="59"
          height="59"
          viewBox="0 0 59 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.3181 31.1048C53.4726 17.2833 42.8791 5.96339 29.6568 5.82094C16.4345 5.67848 5.59049 16.7675 5.43599 30.5889C5.28149 44.4103 15.875 55.7302 29.0973 55.8727C42.3196 56.0151 53.1636 44.9262 53.3181 31.1048Z"
            fill="#B522E9"
          />
          <path
            d="M19.4567 58.9489C4.63593 53.2389 -2.95157 36.0074 2.51025 20.5151C7.98683 5.02268 24.4904 -2.94815 39.2964 2.74737C54.1171 8.44288 61.7193 25.6888 56.2428 41.1812C50.7662 56.6736 34.2626 64.6444 19.4567 58.9489ZM37.6726 7.35596C25.2875 2.58796 11.4854 9.25446 6.92399 22.2107C2.34787 35.1669 8.71015 49.5868 21.0952 54.3403C33.4655 59.1083 47.2677 52.4418 51.8438 39.4856C56.4051 26.5294 50.0576 12.1095 37.6726 7.35596Z"
            fill="#F761D6"
          />
          <path
            d="M4.1488 21.1373C9.52205 5.93479 25.5089 -2.02154 40.1082 3.06529C39.8425 2.94935 39.5621 2.84791 39.2964 2.73197C24.4904 -2.94905 7.98683 5.02177 2.51025 20.5141C-2.95157 36.0065 4.63593 53.238 19.4567 58.948C19.7371 59.0494 20.0028 59.1509 20.2833 59.2523C6.00877 53.238 -1.22445 36.3399 4.1488 21.1373Z"
            fill="#F579F8"
          />
          <path
            d="M37.6718 7.35511C37.4356 7.26815 37.1846 7.18119 36.9485 7.09424C48.8611 12.1231 54.8839 26.2387 50.3964 38.9341C45.9236 51.6294 32.5642 58.2814 20.3711 54.0496C20.6073 54.1511 20.8435 54.2525 21.0797 54.3395C33.4647 59.1075 47.2669 52.441 51.843 39.4848C56.4044 26.5286 50.0568 12.1086 37.6718 7.35511Z"
            fill="#CE11B0"
          />
          <path
            d="M21.5967 45.5115C20.5355 45.5115 19.6563 45.3055 18.9589 44.8934C18.2919 44.4814 17.8371 43.932 17.5946 43.2452C17.352 42.531 17.352 41.7618 17.5946 40.9377C17.8371 40.0861 18.3374 39.2345 19.0954 38.3829L34.7854 20.5408V22.6835H20.96C19.7775 22.6835 18.8831 22.4225 18.2768 21.9006C17.6704 21.3512 17.3672 20.5683 17.3672 19.5519C17.3672 18.5355 17.6704 17.7663 18.2768 17.2443C18.8831 16.7224 19.7775 16.4614 20.96 16.4614H38.6965C39.7577 16.4614 40.6218 16.6675 41.2888 17.0795C41.9861 17.4916 42.4561 18.041 42.6986 18.7277C42.9412 19.4145 42.9412 20.1837 42.6986 21.0353C42.4561 21.8869 41.9558 22.7384 41.1978 23.59L25.5078 41.4321V39.2894H40.0609C41.213 39.2894 42.0923 39.5504 42.6986 40.0723C43.3353 40.5943 43.6537 41.3635 43.6537 42.3799C43.6537 43.3963 43.3353 44.1792 42.6986 44.7286C42.0923 45.2505 41.213 45.5115 40.0609 45.5115H21.5967Z"
            fill="#8711A5"
          />
          <path
            d="M19.7187 43.6956C18.6576 43.6956 17.7783 43.4896 17.081 43.0775C16.414 42.6654 15.9592 42.116 15.7166 41.4293C15.4741 40.715 15.4741 39.9459 15.7166 39.1217C15.9592 38.2702 16.4595 37.4186 17.2174 36.567L32.9075 18.7249V20.8676H19.082C17.8996 20.8676 17.0052 20.6066 16.3988 20.0847C15.7924 19.5353 15.4893 18.7524 15.4893 17.7359C15.4893 16.7195 15.7924 15.9504 16.3988 15.4284C17.0052 14.9065 17.8996 14.6455 19.082 14.6455H36.8186C37.8798 14.6455 38.7439 14.8515 39.4109 15.2636C40.1082 15.6757 40.5782 16.2251 40.8207 16.9118C41.0633 17.5986 41.0633 18.3678 40.8207 19.2194C40.5782 20.0709 40.0779 20.9225 39.3199 21.7741L23.6299 39.6162V37.4735H38.183C39.3351 37.4735 40.2143 37.7345 40.8207 38.2564C41.4574 38.7784 41.7757 39.5475 41.7757 40.5639C41.7757 41.5804 41.4574 42.3633 40.8207 42.9127C40.2143 43.4346 39.3351 43.6956 38.183 43.6956H19.7187Z"
            fill="#F761D6"
          />
        </svg>
        <span className="font-nunito font-bold italic text-[29.2px] leading-[46.73px] tracking-wide text-white absolute left-[20%] bottom-0 pb-1 drop-shadow-xl">
          {count}
        </span>
      </div>
      {check && (
        <div className="absolute top-[50%] translate-y-[-50%]">
          <svg
            width="42"
            height="43"
            viewBox="0 0 42 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_2494_5758)">
              <ellipse
                cx="21.1167"
                cy="21.6406"
                rx="20.6421"
                ry="20.8594"
                fill="#32D543"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.6409 13.6628C35.3737 14.4034 35.3737 15.6041 34.6409 16.3446L20.5667 30.5669C19.8339 31.3075 18.6457 31.3075 17.9129 30.5669L8.5301 21.0854C7.79726 20.3448 7.79726 19.1442 8.5301 18.4036C9.26294 17.6631 10.4511 17.6631 11.1839 18.4036L19.2398 26.5442L31.987 13.6628C32.7199 12.9223 33.908 12.9223 34.6409 13.6628Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_i_2494_5758"
                x="-1.61133"
                y="-1.30469"
                width="43.3701"
                height="43.8047"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-2.08594" dy="-2.08594" />
                <feGaussianBlur stdDeviation="2.08594" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_2494_5758"
                />
              </filter>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

export default DailygiftItem;
