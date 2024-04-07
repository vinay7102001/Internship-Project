import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { HiCheckCircle } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";
import { PiGlobeHemisphereEast } from "react-icons/pi";
import Profile from '../../images/prfile.jpg'
import Google from '../../images/google_logo.svg'
import Microsoft from '../../images/microsoft_logo.png'

const SchedulPage = (props) => {
  const { name } = useParams()
  // console.log(name)
  const navigate = useNavigate()

  useEffect(() => {
    if (props.timeInfo === undefined) {
      navigate('/')
    }
  }, [props.timeInfo])

  return (
    <>
      <div className='w-[100%] flex flex-col items-center sm:items-start'>
        <div className='w-[100%] flex flex-col justify-center items-center'>
          <div className='sm:w-[63%] w-[90%] lg:w-[48%] flex items-center flex-col mt-6'>

            <div>
              <img src={Profile} className='h-14 w-14 object-cover object-center rounded-full' />
            </div>

            <div className='mt-6 flex items-center justify-center text-[1.4rem] font-semibold'><HiCheckCircle className='text-green-700' />You are scheduled</div>
            <div className='w-[100%] flex flex-col items-center justify-center border-b-[1px] border-gray-400'>
              <p className='mt-2 text-[0.9rem] text-gray-700'>A calendar invitation has been sent to your email address.</p>
              <div className='w-[100%] pl-3 pt-2 border-[1px] rounded-lg border-gray-400 mb-6'>
                <p className='text-[1.3rem] font-semibold mb-1'>Fibery</p>
                <div className='mb-2 flex flex-row items-center text-gray-500 font-medium'><BsPerson size={22} className='mr-2' />{name}</div>
                <div className='mb-2 flex flex-row items-center text-gray-500 font-medium'><MdOutlineCalendarToday className='text-gray-500 mr-2' size={22} />{props.timeInfo}</div>
                <div className='mb-2 flex flex-row items-center text-gray-500 font-medium'><PiGlobeHemisphereEast className=' text-gray-500 mr-2' size={22} />{props.timeZone}</div>
                <div className='mb-4 flex flex-row items-center text-gray-500 font-medium'><BsCameraVideoFill className='text-gray-500 mr-2' size={22} />Web conferencing details to follow</div>
              </div>
            </div>


            <div className='w-[100%] mt-6 flex flex-col text-[0.9rem]'>
              <p className='font-semibold'>Schedule your own meetings with Calendly for free</p>
              <p>Eliminate the back-and-forth emails for finding time.</p>
            </div>

            <div className='w-[100%] flex fex-col gap-3 mt-3'>
              <button className='w-[48%] flex items-center justify-center px-1 py-2 border-[1px] border-black rounded-full'><img src={Google} className='hidden sm:block w-4 h-4 mr-2' /><span className='text-[0.8rem]'>Sign up with Google</span></button>
              <button className='w-[48%] flex items-center justify-center px-1 py-2 border-[1px] border-black rounded-full'><img src={Microsoft} className='hidden sm:block w-4 h-4 mr-2' /><span className='text-[0.8rem]'>Sign up with Microsoft</span></button>
            </div>
            <p className='text-[0.75rem] text-blue-500 mt-4'>Sign up with work email</p>
          </div>
        </div>
        <div className='text-[0.75rem] text-blue-500 ml-5 mb-5'>Cookie settings</div>
      </div>
    </>
  )
}

export default SchedulPage
