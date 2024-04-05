import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './demoComponent.scss'
import LogoAndCompanyInfo from './components/LogoAndCompanyInfo';
import CalendarData from './components/CalendarData';
import SlotBoking from './components/SlotBoking';
import Form from './components/InformationPage/Form';

const DemoComponent = (props) => {
  const [data, setData] = useState()
  const [count, setCount] = useState(0)
  const [timeData, setTimeData] = useState({ slot: '12:00' })

  const HandelDayChange = (val) => {
    // console.log(v, e)
    setData(val)
    setCount(1)
  }

  // console.log(timeData)
  return (
    <div className=" h-screen bg-slate-500 flex flex-col justify-center items-center ">
      <div className='lg:h-[87vh] lg:w-[62vw] md:w-[90vw] md:h-[87vh] w-[95vw] h-[87vh] flex justify-center overflow-y-scroll'>
        <div className={count ? props.page === 'form'
          ? 'mt-12 h-[170vh] sm:w-[95%] w-[100%] relative bg-white flex flex-col xl:flex-row  gap-3 shadow-2xl rounded-lg overflow-x-hidden'
          : 'mt-12 h-[74vh] sm:w-[95%] w-[100%] relative bg-white flex flex-col xl:flex-row gap-3 shadow-2xl rounded-lg overflow-x-hidden'
          : 'mt-24 h-[74vh] sm:w-[85%] w-[100%] relative bg-white flex flex-col xl:flex-row gap-3 shadow-2xl rounded-lg overflow-x-hidden'}>

          <div className='absolute z-10 top-6 right-[-55px] rotate-[45deg]  flex flex-col bg-gray-600 text-white px-16 py-2 leading-[13px] shadow-[10px 10px]'>
            <p className='text-[9px]'>POWERED BY</p>
            <p className='text-[13px]'>Calendly</p>
          </div>

          {/* logo and meeting info start */}
          <LogoAndCompanyInfo count={count} page={props.page} data={data} time={timeData} />
          {/* logo and meeting info end */}
          {props.page === 'home' ?
            <div className={count ? 'basis-[63%] flex flex-col sm:flex-row justify-center gap-4 md:items-center' : 'flex flex-col sm:flex-row justify-around gap-4 md:items-center'}>
              <CalendarData count={count} HndelChange={HandelDayChange} />
              <SlotBoking count={count} data={data} handelTimeData={(val) => { setTimeData(val) }} />
            </div>
            : ''}

          {props.page === 'form' ?
            <>
              <Form />
            </>
            : ''}

        </div>

      </div>



    </div>
  );
}

export default DemoComponent;
