import React, { useState } from 'react'
import Calendar from 'react-calendar';
import { FaEarthAmericas } from "react-icons/fa6";
import TimeZoneArray from '../components/TimeZone'
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";


const CalendarData = (props) => {
  // const [timeZone, setTimeZone] = useState('Select Time Zone')
  const [flag, setFlag] = useState(false)
  const date = new Date()

  const ChangeTimeZone = (e) => {
    props.modifyTimeZone(e.target.value)
    setFlag(!flag)
  }


  return (
    <>
      <div className={props.count ? 'basis-[61%] flex justify-center items-start' : 'flex justify-center'}>
        <div className='basis-[80%] md:basis-[70%] xl:basis-[100%] flex flex-col mt-2 xl:mt-0 mr-2 ml-3'>
          <p className='font-semibold mb-5 text-xl'>Select a Date & Time</p>
          <Calendar
            className='change_layout'
            minDetail='decade'
            next2Label={null}
            onClickDay={(val) => { props.HndelChange(val) }}
            prev2Label={null}
            showNeighboringMonth={false}
            tileClassName='chanage_button'
            value={[date, new Date(2024, 3, (date.getDate() + 30))]}//it take month as month-1
          />
          <div>
            <h1 className='mt-4 text-[14px] font-semibold'>Time Zone</h1>
            {/* <p className='flex ml-3 mt-2 text-xs items-end xl:mb-0 mb-5'><FaEarthAmericas size={18} /> <span className='ml-2'>Uk,Ireland,Lisbon Time(16:54)</span> </p> */}
            {/* <label for="lang">Language</label> */}
            {/* <label for="lang">Uk,Ireland,Lisbon Time</label>
            <select name="languages" id="lang" size={2}>
              {TimeZoneArray.map((val) => {
                return <option value={val}>{val}</option>
              })}
            </select> */}
            <div className='relative w-[100%] ml-3 text-xs'>
              <button className='flex mt-2 items-center xl:mb-0 mb-5' onClick={() => { setFlag(!flag) }}><FaEarthAmericas size={18} /> <span className='ml-2'>{props.timeZone}</span> <span className='ml-2'>{flag ? <BiSolidUpArrow size={10} /> : <BiSolidDownArrow size={10} />}</span></button>
              {flag ? <div className='flex flex-col items-start h-[30vh] w-[80%vw] absolute bottom-6 left-[-1rem] overflow-auto bg-white'>
                {TimeZoneArray.map((val) => {
                  return <button className='text-sm py-1 ml-4' onClick={(e) => { ChangeTimeZone(e) }} value={val}>{val}</button>
                })}
              </div> : ''}
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default CalendarData
