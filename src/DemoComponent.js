import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './demoComponent.scss'
import LogoAndCompanyInfo from './components/LogoAndCompanyInfo';
import CalendarData from './components/CalendarData';
import SlotBoking from './components/SlotBoking';
import Form from './components/InformationPage/Form';
import SchedulPage from './components/SchedulPages/SchedulPage';

const DemoComponent = (props) => {
  const [data, setData] = useState()
  const [count, setCount] = useState(0)
  const [timeData, setTimeData] = useState()
  const [finalPageTime, setFinalPageTime] = useState()
  const [timeZone, setTimeZone] = useState('Select Time Zone')

  const HandelDayChange = (val) => {
    // console.log(v, e)
    setData(val)
    setCount(1)
  }

  console.log(finalPageTime)
  return (
    <div className=" h-screen bg-slate-500 flex flex-col justify-center items-center ">
      <div className='lg:h-[87vh] lg:w-[62vw] md:w-[90vw] md:h-[87vh] w-[95vw] h-[87vh] flex justify-center overflow-y-scroll'>
        <div className={count ? props.page === 'form'
          ? 'mt-12 h-[170vh] sm:w-[95%] w-[100%] relative bg-white flex flex-col xl:flex-row  gap-3 shadow-2xl rounded-lg overflow-x-hidden'
          : `${props.page === 'Schedule' ? 'mt-5 h-[80vh]' : 'mt-12 h-[74vh]'} sm:w-[95%] w-[100%] relative bg-white flex flex-col xl:flex-row gap-3 shadow-2xl rounded-lg overflow-x-hidden`
          : 'mt-14 h-[74vh] sm:w-[85%] w-[100%] relative bg-white flex flex-col xl:flex-row gap-3 shadow-2xl rounded-lg overflow-x-hidden'}>

          <div className='absolute z-10 top-6 right-[-55px] rotate-[45deg]  flex flex-col bg-gray-600 text-white px-16 py-2 leading-[13px] shadow-[10px 10px]'>
            <p className='text-[9px]'>POWERED BY</p>
            <p className='text-[13px]'>Calendly</p>
          </div>

          {/* logo and meeting info start */}
          {props.page !== 'Schedule' ? <LogoAndCompanyInfo count={count} page={props.page} data={data} timeZone={timeZone} time={timeData} handelFinalPageTime={(val) => { setFinalPageTime(val) }} /> : ''}
          {/* logo and meeting info end */}
          {props.page === 'home' ?
            <div className={count ? 'basis-[63%] flex flex-col sm:flex-row justify-center gap-4 md:mt-8' : 'flex flex-col sm:flex-row justify-around gap-4 md:mt-8'}>
              <CalendarData count={count} HndelChange={HandelDayChange} timeZone={timeZone} modifyTimeZone={setTimeZone} />
              <SlotBoking count={count} data={data} handelTimeData={(val) => { setTimeData(val) }} timeZone={timeZone} />
            </div>
            : ''}

          {props.page === 'form' ?
            <>
              <Form />
            </>
            : ''}

          {props.page === 'Schedule' ?
            <SchedulPage timeInfo={finalPageTime} timeZone={timeZone} />
            : ''}

        </div>

      </div>



    </div>
  );
}

export default DemoComponent;
