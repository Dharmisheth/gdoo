import React from 'react'

function Card() {
  return (
    <div className="pt-8">
    <div className="grid grid-flow-row justify-center px-4 relative">
      <div className="bg-black rounded-xl shadow-[#454545_0px_4px_0px_0px]">
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
  )
}

export default Card