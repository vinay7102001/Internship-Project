import React from 'react'
import Calendar from 'react-calendar';
import { FaEarthAmericas } from "react-icons/fa6";

const CalendarData = (props) => {
  return (
    <>
      <div className={props.count ? 'basis-[61%] flex justify-center' : 'flex justify-center'}>
        <div className='basis-[80%] md:basis-[70%] xl:basis-[100%] flex flex-col mt-2 xl:mt-7 mr-2 ml-3'>
          <p className='font-semibold mb-5 text-xl'>Select a Date & Time</p>
          <Calendar
            className='change_layout'
            minDetail='decade'
            next2Label={null}
            onClickDay={(val) => { props.HndelChange(val) }}
            prev2Label={null}
            showNeighboringMonth={false}
            tileClassName='chanage_button'
            value={[new Date(), new Date(2024, 3, 10)]}//it take month as month-1
          />
          <div>
            <h1 className='mt-4 text-[14px] font-semibold'>Time Zone</h1>
            <p className='flex ml-3 mt-2 text-xs items-end xl:mb-0 mb-5'><FaEarthAmericas size={18} /> <span className='ml-2'>Uk,Ireland,Lisbon Time(16:54)</span> </p>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default CalendarData
