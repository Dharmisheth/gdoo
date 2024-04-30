// import React from "react";

// function page() {
//   return (
//     <>
//       <div className="main">
//         <div className="container2 relative">
//           <div className="abc">
//             <div className=" flex absolute top-7 justify-center w-full">
//               <div className="grid grid-flow-row gap-2 text-center pt-7">
//                 <img src="/App_Store.png"></img>
//                 <div>
//                   <p className="text-white font-bold text-2xl">
//                     Verification complete
//                   </p>
//                   <p className="font-normal text-gray-200 text-sm">
//                     Your Phone number has been verified.
//                   </p>
//                 </div>

//                 <div className="flex flex-col justify-between">
//                   <button
//                     type="submit"
//                     className="submit1 rounded-full px-3 py-3 font-bold"
//                   >
//                     <p>Go to Home</p>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default page;

import React from 'react'

function page() {
  return (
    <>
    <div className='main'>
        <div className='container2'>
            <div className=''>
                <div className='bcd flex-col flex items-center'>
                    <img src='/App_Store.png' className='size-5.3/12'></img>
                    <p className='font-bold text-2xl text-white pt-[26.11px]'>Verification complete</p>
                    <p className='font-normal text-sm text-gray-50 pt-[12px]'>Your Phone number has been verified.</p>
                </div>
                <div className='flex flex-col justify-between pb-14 pl-[22px] pr-[22px]'>
                    <button className='submit1 rounded-full px-3 py-3 font-bold'><p>Go to Home</p></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page