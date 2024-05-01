import React from "react";

function page() {
  return (
    <>
      <div className="main">
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
        </div>
      </div>
    </>
  );
}

export default page;
