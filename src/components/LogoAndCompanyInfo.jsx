import React, { useEffect, useState } from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineCalendarToday } from "react-icons/md";
import { PiGlobeHemisphereEast } from "react-icons/pi";
import { BiArrowBack } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const LogoAndCompanyInfo = (props) => {
  const [slottime, setSlotTime] = useState()

  const navigate = useNavigate()
  // console.log(props.time)

  useEffect(() => {
    const val = props?.time?.slot
    console.log(val)
    console.log(val.slice(3, 5))
    console.log(val.slice(0, 3))
    console.log(parseInt(val.slice(0, 2)))

    if (val.slice(3, 5) === '00') {
      setSlotTime(`${val.slice(0, 3)}45`)

    }
    else {
      if (val.slice(0, 2) === '12') {
        setSlotTime('01:15')
      } else {
        let p = parseInt(val.slice(0, 2))
        p++
        if (p / 10) {
          setSlotTime(`${p}:15`)
        }
        else {
          setSlotTime(`0${p}:15`)
        }
      }
    }
  }, [props?.time?.slot])



  return (
    <>
      <div className={props.count ? 'basis-[37%] flex flex-col xl:border-r-2 border-b-2' : 'flex flex-col xl:border-r-2 border-b-2'}>
        <div className='h-[200px] flex justify-center items-center border-b-2'>
          {props.page === 'form' ?
            <div className='absolute top-5 left-5 p-2 border-[1px] border-gray-200 rounded-full cursor-pointer' onClick={() => { navigate('/') }}><FaArrowLeft size={20} className='text-blue-600' /></div>
            : ''}
          <img className='w-30 h-40 ' src='https://global.discourse-cdn.com/business7/uploads/fibery/original/2X/6/6cfd93782257bea97e161c9bc00d0ff9436cef37.png' />
        </div>
        <div className='basis-[100%] ml-8 flex flex-col justify-between '>
          <div className='flex flex-col md:items-center lg:items-start'>
            <h1 className='text-[1.5rem] font-semibold my-3'>Fibery Demo</h1>

            <div className=''>
              <div className='flex mb-3 text-xs items-end'><AiOutlineClockCircle className='inline text-gray-600' size={20} /> <span className='text-gray-600 ml-1 text-[0.9rem] font-medium'>45 min</span></div>
              {props.page === 'form' ? <>
                <div className='flex mb-3 text-xs items-center leading-5'><MdOutlineCalendarToday className='inline text-gray-600' size={20} /> <span className='text-gray-600 ml-1 text-[0.9rem] font-medium'>
                  {`${props?.time?.slot} - ${slottime}, ${props?.time?.clickedDay}, ${props?.time?.ClickedMonth} ${props?.time?.clickedDate}, ${props?.time?.ClickedYear}`}
                </span></div>
                <div className='flex mb-3 text-xs items-center leading-5'><PiGlobeHemisphereEast className='inline text-gray-600' size={20} /> <span className=' text-gray-600 ml-1 text-[0.9rem] font-medium'>Uk,Irenland,Lisbon Time</span></div>
              </> : ''}

            </div>
            <p className='hidden md:block text-wrap text-[0.9rem] mr-4 text-gray-600'>Book a meeting with our Fibery team. Talk to a real preson about how to get your processes set up with us 🦄 or not 💩</p>
          </div>
          <p className='hidden md:block ml-2 mb-6 text-[0.8rem] cursor-pointer text-blue-500'>Cookie settings</p>
        </div>
      </div >
    </>
  )
}

export default LogoAndCompanyInfo
