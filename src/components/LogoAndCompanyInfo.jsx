import React from 'react'
import { PiClockThin } from "react-icons/pi";

const LogoAndCompanyInfo = (props) => {

  return (
    <>
      <div className={props.count ? 'basis-[37%] flex flex-col' : 'flex flex-col'}>
        <div className='flex justify-center items-center border-r-2 border-b-2'>
          <img className='w-30 h-40 ' src='https://global.discourse-cdn.com/business7/uploads/fibery/original/2X/6/6cfd93782257bea97e161c9bc00d0ff9436cef37.png' />
        </div>
        <div className='h-[50vh] ml-8 flex flex-col justify-between border-r-2'>
          <div className=''>
            <h1 className='text-[1.5rem] font-semibold my-3'>Fibery Demo</h1>
            <div className='flex mb-2 text-xs items-end'><PiClockThin className='inline' size={20} /> <span className='text-gray-600 ml-1 text-[0.9rem] font-medium'>45 min</span></div>
            <p className='text-wrap text-[1rem] mr-4'>Book a meeting with our Fibery team. Talk to a real preson about how to get your processes set up with us 🦄 or not 💩</p>
          </div>
          <p className='ml-2 mb-4 text-[0.8rem] cursor-pointer text-blue-500'>Cookie settings</p>
        </div>
      </div>
    </>
  )
}

export default LogoAndCompanyInfo
