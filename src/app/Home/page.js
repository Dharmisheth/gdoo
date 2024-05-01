import React from "react";

function page() {
  return (
    <>
      <div className="main main overflow-auto">
        <div className="container">
          <div className="flex justify-between px-5 pt-14 ">
            <p className="text-3xl font-bold">Aries, Welcome to Gdooo</p>
            <svg
              className="mt-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          {/* <div className="pt-8">
            <div className="grid grid-flow-row justify-center px-4 relative">
              <div className="">
                <img src="/CardBG.png"></img>
                <div className="absolute top-0 card w-full rounded-xl"></div>
              </div>
              <div className="absolute top-0 left-8 right-0 p-4 ">
                <p className="font-bold text-[19px]">Win Exciting Prizes</p>
                <p className="font-normal text-[12px] pt-0.5">
                  Play Gacha Game and earn Sweetballs
                </p>
                <div className="font-bold pt-4">
                  <button className="submit1 text-sm rounded-full px-5 py-1">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div className="px-4 pt-8">
            <div class="image-container rounded-2xl">
              <img src="/CardBG.png" alt="Descriptive Alt Text" className="" />

              <div class="absolute inset-0 z-20 grid-flow-row px-8 pt-6 pb-5">
                <p class="text-black text-[19px] font-bold">
                  Win Exciting Prizes
                </p>
                <p class="text-black text-xs">
                  Play Gacha Game and earn Sweetballs
                </p>
                <div className="font-bold pt-3">
                  <button className="submit1 text-sm rounded-full px-6 py-1">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="grid grid-cols-4 gap-6 justify-center px-5">
              <div className="text-center">
                <button className="homebtn text-sm rounded-xl px-4 py-4">
                  <svg
                    className=""
                    width="29"
                    height="26"
                    viewBox="0 0 29 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.2666 12.3333L24.6007 15L21.9333 12.3333M24.9268 14.3333C24.9752 13.8956 25 13.4507 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25C16.7697 25 20.1334 23.2618 22.3333 20.5431M13 6.33333V13L17 15.6667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <p className="mt-3 text-xs flex justify-center">Check in</p>
              </div>

              <div className="text-center">
                <button className="homebtn text-sm rounded-xl px-4 py-4">
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6667 25V17.8C17.6667 17.0533 17.6667 16.6799 17.5214 16.3947C17.3935 16.1438 17.1896 15.9398 16.9387 15.812C16.6535 15.6667 16.2801 15.6667 15.5334 15.6667H11.8C11.0533 15.6667 10.6799 15.6667 10.3947 15.812C10.1438 15.9398 9.93984 16.1438 9.81201 16.3947C9.66669 16.6799 9.66669 17.0533 9.66669 17.8V25M1.66669 6.33333C1.66669 8.54247 3.45755 10.3333 5.66669 10.3333C7.87583 10.3333 9.66669 8.54247 9.66669 6.33333C9.66669 8.54247 11.4575 10.3333 13.6667 10.3333C15.8758 10.3333 17.6667 8.54247 17.6667 6.33333C17.6667 8.54247 19.4575 10.3333 21.6667 10.3333C23.8758 10.3333 25.6667 8.54247 25.6667 6.33333M5.93335 25H21.4C22.8935 25 23.6402 25 24.2107 24.7094C24.7124 24.4537 25.1204 24.0457 25.376 23.544C25.6667 22.9735 25.6667 22.2268 25.6667 20.7333V5.26667C25.6667 3.77319 25.6667 3.02646 25.376 2.45603C25.1204 1.95426 24.7124 1.54631 24.2107 1.29065C23.6402 1 22.8935 1 21.4 1H5.93335C4.43988 1 3.69314 1 3.12271 1.29065C2.62095 1.54631 2.213 1.95426 1.95734 2.45603C1.66669 3.02646 1.66669 3.77319 1.66669 5.26667V20.7333C1.66669 22.2268 1.66669 22.9735 1.95734 23.544C2.213 24.0457 2.62095 24.4537 3.12271 24.7094C3.69314 25 4.43988 25 5.93335 25Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <p className="mt-3  text-xs flex justify-center">Shop Now</p>
              </div>

              <div className="text-center">
                <button className="homebtn text-sm rounded-xl px-4 py-4">
                  <svg
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 8.66683V5.60016C25 4.10669 25 3.35996 24.7094 2.78952C24.4537 2.28776 24.0457 1.87981 23.544 1.62415C22.9735 1.3335 22.2268 1.3335 20.7333 1.3335H5.26667C3.77319 1.3335 3.02646 1.3335 2.45603 1.62415C1.95426 1.87981 1.54631 2.28776 1.29065 2.78952C1 3.35995 1 4.10669 1 5.60016V18.4002C1 19.8936 1 20.6404 1.29065 21.2108C1.54631 21.7126 1.95426 22.1205 2.45603 22.3762C3.02646 22.6668 3.77319 22.6668 5.26667 22.6668L20.7333 22.6668C22.2268 22.6668 22.9735 22.6668 23.544 22.3762C24.0457 22.1205 24.4537 21.7126 24.7094 21.2108C25 20.6404 25 19.8936 25 18.4002V15.3335M18.3333 12.0002C18.3333 11.3806 18.3333 11.0709 18.3846 10.8133C18.595 9.75541 19.4219 8.92849 20.4798 8.71807C20.7374 8.66683 21.0471 8.66683 21.6667 8.66683H24.3333C24.9529 8.66683 25.2626 8.66683 25.5202 8.71807C26.5781 8.92849 27.405 9.75541 27.6154 10.8133C27.6667 11.0709 27.6667 11.3806 27.6667 12.0002C27.6667 12.6197 27.6667 12.9295 27.6154 13.1871C27.405 14.2449 26.5781 15.0718 25.5202 15.2823C25.2626 15.3335 24.9529 15.3335 24.3333 15.3335H21.6667C21.0471 15.3335 20.7374 15.3335 20.4798 15.2823C19.4219 15.0718 18.595 14.2449 18.3846 13.1871C18.3333 12.9295 18.3333 12.6197 18.3333 12.0002Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <p className="mt-3 text-xs flex justify-center">Wallet</p>
              </div>

              <div className="text-center">
                <button className="homebtn text-sm rounded-xl px-4 py-4">
                  <svg
                    width="29"
                    height="24"
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16669 8.33317H27.8334V5.93317C27.8334 4.4397 27.8334 3.69296 27.5427 3.12253C27.287 2.62077 26.8791 2.21282 26.3773 1.95716C25.8069 1.6665 25.0602 1.6665 23.5667 1.6665H5.43335C3.93988 1.6665 3.19314 1.6665 2.62271 1.95715C2.12095 2.21282 1.713 2.62076 1.45734 3.12253C1.16669 3.69296 1.16669 4.4397 1.16669 5.93317V16.0665C1.16669 17.56 1.16669 18.3067 1.45734 18.8771C1.713 19.3789 2.12095 19.7869 2.62271 20.0425C3.19314 20.3332 3.93988 20.3332 5.43335 20.3332H13.1667M17.8334 22.9998L20.5333 22.4598C20.7687 22.4128 20.8864 22.3892 20.9962 22.3462C21.0936 22.308 21.1862 22.2584 21.2721 22.1985C21.3688 22.1311 21.4537 22.0462 21.6234 21.8764L27.1667 16.3332C27.9031 15.5968 27.9031 14.4029 27.1667 13.6665C26.4303 12.9301 25.2364 12.9301 24.5 13.6665L18.9568 19.2098C18.787 19.3795 18.7021 19.4644 18.6347 19.5611C18.5748 19.647 18.5252 19.7396 18.487 19.837C18.444 19.9467 18.4204 20.0645 18.3733 20.2999L17.8334 22.9998Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <p className="mt-3 text-xs flex justify-center">Membership</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="grid grid-flow-row justify-center px-4 relative">
              <div className="bg-black rounded-xl card1">
                <img src="/Capa.png" className="border rounded-xl"></img>
                <div className="absolute top-0 left-4 right-0 p-4">
                  <div className="grid grid-cols-2 gap-28 px-[17px] ">
                    <p className="font-bold text-white text-2xl">Gdooo</p>
                    <p className="font-normal text-xs text-white text-center pt-2">
                      Anti Matter
                    </p>
                  </div>
                  <div className="grid grid-flow-col gap-3 pt-3">
                    <div>
                      <img src="/profile.png" className="pl-3"></img>
                    </div>
                    <div className="pr-12">
                      <p className="font-bold text-[23px] text-white pb-3">
                        Steph Golik
                      </p>
                      <div className="grid grid-flow-row">
                        <p className="font-normal text-xs text-white">
                          ID No : 123456789
                        </p>
                        <p className="font-normal text-xs text-white">
                          Join : 08/08/2024
                        </p>
                        <p className="font-normal text-xs text-white">
                          Expire : 08/08/2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="px-5">
              <div className="grid justify-center gap-2 pt-8">
                <p className="font-semibold text-xl">Visit Popup Store</p>
                <div className="grid grid-flow-col gap-4">
                  <img src="/Rectangle.png"></img>
                  <img src="/Rectangle2.png"></img>
                </div>
              </div>
            </div>

            <div className="px-5">
              <div className="grid justify-center gap-2 pt-6">
                <p className="font-semibold text-xl">Play Gacha</p>
                <div className="grid grid-flow-col gap-4">
                  <img src="/Rectangle3.png"></img>
                  <img src="/Rectangle4.png"></img>
                </div>
              </div>
            </div>

            <div className="px-5">
              <div className="grid justify-center gap-2 pt-6">
                <p className="font-semibold text-xl">Latest Products</p>
                <div className="relative grid grid-flow-col gap-4">
                  <img src="/Rectangle5.png"></img>
                  <img src="/Rectangle6.png"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="absolute flex justify-center -bottom-[414px]">
              <button className="rounded-full  bg-black size-12 flex items-center justify-center">
                <svg
                  className=""
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 9V6C4 3.23858 6.23858 1 9 1C11.419 1 13.4367 2.71776 13.9 5M5.8 19H12.2C13.8802 19 14.7202 19 15.362 18.673C15.9265 18.3854 16.3854 17.9265 16.673 17.362C17 16.7202 17 15.8802 17 14.2V13.8C17 12.1198 17 11.2798 16.673 10.638C16.3854 10.0735 15.9265 9.6146 15.362 9.32698C14.7202 9 13.8802 9 12.2 9H5.8C4.11984 9 3.27976 9 2.63803 9.32698C2.07354 9.6146 1.6146 10.0735 1.32698 10.638C1 11.2798 1 12.1198 1 13.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="rounded-t-xl bg-[#FD9318] box px-1">
            <div className="pt-[9.75px] gap-1">
              <div className="grid grid-cols-4 justify-items-center">
                <div className="text-center pb-8">
                  <button>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.83331 21.4997V14.0997C9.83331 13.5397 9.83331 13.2597 9.94231 13.0457C10.0382 12.8576 10.1912 12.7046 10.3793 12.6087C10.5932 12.4997 10.8733 12.4997 11.4333 12.4997H14.2333C14.7934 12.4997 15.0734 12.4997 15.2873 12.6087C15.4755 12.7046 15.6284 12.8576 15.7243 13.0457C15.8333 13.2597 15.8333 13.5397 15.8333 14.0997V21.4997M11.851 3.26375L5.0687 8.53888C4.61533 8.8915 4.38865 9.06781 4.22534 9.28861C4.08068 9.4842 3.97291 9.70454 3.90734 9.93881C3.83331 10.2033 3.83331 10.4905 3.83331 11.0648V18.2997C3.83331 19.4198 3.83331 19.9799 4.0513 20.4077C4.24305 20.784 4.54901 21.09 4.92533 21.2818C5.35316 21.4997 5.91321 21.4997 7.03331 21.4997H18.6333C19.7534 21.4997 20.3135 21.4997 20.7413 21.2818C21.1176 21.09 21.4236 20.784 21.6153 20.4077C21.8333 19.9799 21.8333 19.4198 21.8333 18.2997V11.0648C21.8333 10.4905 21.8333 10.2033 21.7593 9.93881C21.6937 9.70454 21.5859 9.4842 21.4413 9.28861C21.278 9.06781 21.0513 8.8915 20.5979 8.53888L13.8156 3.26376C13.4643 2.9905 13.2886 2.85388 13.0947 2.80136C12.9235 2.75502 12.7431 2.75502 12.572 2.80136C12.378 2.85388 12.2023 2.9905 11.851 3.26375Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <p className="text-[10px] flex justify-center text-white">
                    Home
                  </p>
                </div>

                <div className="text-center">
                  <button>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 21V15.6C15.5 15.0399 15.5 14.7599 15.391 14.546C15.2951 14.3578 15.1422 14.2049 14.954 14.109C14.7401 14 14.4601 14 13.9 14H11.1C10.5399 14 10.2599 14 10.046 14.109C9.85785 14.2049 9.70487 14.3578 9.60899 14.546C9.5 14.7599 9.5 15.0399 9.5 15.6V21M3.5 7C3.5 8.65685 4.84315 10 6.5 10C8.15685 10 9.5 8.65685 9.5 7C9.5 8.65685 10.8431 10 12.5 10C14.1569 10 15.5 8.65685 15.5 7C15.5 8.65685 16.8431 10 18.5 10C20.1569 10 21.5 8.65685 21.5 7M6.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4802 21.5 18.9201 21.5 17.8V6.2C21.5 5.0799 21.5 4.51984 21.282 4.09202C21.0903 3.71569 20.7843 3.40973 20.408 3.21799C19.9802 3 19.4201 3 18.3 3H6.7C5.5799 3 5.01984 3 4.59202 3.21799C4.21569 3.40973 3.90973 3.71569 3.71799 4.09202C3.5 4.51984 3.5 5.07989 3.5 6.2V17.8C3.5 18.9201 3.5 19.4802 3.71799 19.908C3.90973 20.2843 4.21569 20.5903 4.59202 20.782C5.01984 21 5.57989 21 6.7 21Z"
                        stroke="#FECD95"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <p className="text-[10px] flex justify-center text-[#FECD95]">
                    Store
                  </p>
                </div>

                <div className="text-center">
                  <button>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1667 11H14.1667M16.1667 9V13M9.16667 12H9.15667M6.16667 10H6.15667M13.7177 5H10.6156C7.99074 5 6.6783 5 5.64813 5.49743C4.74112 5.9354 3.98752 6.63709 3.48604 7.51059C2.91648 8.5027 2.82297 9.81181 2.63596 12.43L2.38992 15.8745C2.26929 17.5634 3.60691 19 5.30013 19C6.16602 19 6.98718 18.6154 7.54151 17.9502L7.91667 17.5C8.25981 17.0882 8.43142 16.8823 8.62678 16.7159C9.03635 16.3672 9.53217 16.1349 10.0623 16.0436C10.3152 16 10.5832 16 11.1192 16H13.2141C13.7501 16 14.0182 16 14.271 16.0436C14.8012 16.1349 15.297 16.3672 15.7066 16.7159C15.9019 16.8823 16.0735 17.0882 16.4167 17.5L16.7918 17.9502C17.3462 18.6154 18.1673 19 19.0332 19C20.7264 19 22.0641 17.5634 21.9434 15.8745L21.6974 12.43C21.5104 9.81181 21.4169 8.5027 20.8473 7.51059C20.3458 6.63709 19.5922 5.9354 18.6852 5.49743C17.6551 5 16.3426 5 13.7177 5Z"
                        stroke="#FECD95"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <p className="text-[10px] flex justify-center text-[#FECD95]">
                    Mini Game
                  </p>
                </div>

                <div className="text-center">
                  <button>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5 21.5C20.5 20.1044 20.5 19.4067 20.3278 18.8389C19.94 17.5605 18.9395 16.56 17.6611 16.1722C17.0933 16 16.3956 16 15 16H10C8.60444 16 7.90665 16 7.33886 16.1722C6.06045 16.56 5.06004 17.5605 4.67224 18.8389C4.5 19.4067 4.5 20.1044 4.5 21.5M17 8C17 10.4853 14.9853 12.5 12.5 12.5C10.0147 12.5 8 10.4853 8 8C8 5.51472 10.0147 3.5 12.5 3.5C14.9853 3.5 17 5.51472 17 8Z"
                        stroke="#FECD95"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <p className="text-[10px] flex justify-center text-[#FECD95]">
                    Profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
