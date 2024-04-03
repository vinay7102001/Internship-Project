import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const arrayOfTime = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30',]

const SlotBoking = (props) => {
  const navigate = useNavigate()
  const [clickedDay, setClickedDay] = useState()
  const [clickedDate, setClickedDate] = useState()
  const [ClickedMonth, setClickedMonth] = useState()
  // const [flag, setFlag] = useState(true)
  const [slot, setSlot] = useState(undefined)

  const setSlotData = (val) => {
    setSlot(val)
    // console.log(val)
  }

  const RedirectPageToForm = () => {
    navigate('/enterdetail')
  }

  useEffect(() => {
    const newDate = new Date(props.data)
    setClickedDate(newDate.getDate())
    setClickedDay(daysOfWeek[newDate.getDay()])
    setClickedMonth(monthOfYear[newDate.getMonth()])
  }, [props.data])


  return (
    <>
      <div className={props.count ? 'basis-[24%] flex flex-col' : 'hidden'}>
        <p className='mt-20 mb-6 text-[0.95rem]'>{`${clickedDay},${ClickedMonth} ${clickedDate}`}</p>
        <div className='h-[23rem] w-full flex flex-col gap-4 overflow-y-auto'>
          {arrayOfTime.map((val) => {
            return <button className='mr-10 px-3 py-3 border-[1px] font-semibold border-blue-600 text-blue-600 rounded-md' onClick={() => { setSlotData(val) }}>{val}</button>
          })}
          {slot !== undefined ? <div className='absolute flex flex-row gap-3 bottom-5 right-12 text-[14px]'>
            <button className='bg-[#666666] text-white py-3 px-[1.25rem] rounded-sm'>{slot}</button>
            <button className='bg-blue-600 text-white py-3 px-[1.25rem] rounded-sm' onClick={RedirectPageToForm}>Next</button>
          </div> : ''}
        </div>
      </div>
    </>
  )
}

export default SlotBoking
