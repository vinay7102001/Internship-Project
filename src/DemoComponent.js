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

  const HandelDayChange = (val) => {
    // console.log(v, e)
    setData(val)
    setCount(1)
  }


  return (
    <div className=" h-screen bg-slate-500 flex flex-col justify-center items-center ">
      <div className={count ? 'w-[58vw] relative bg-white flex flex-row gap-3 shadow-2xl rounded-lg' : 'w-[50vw] relative bg-white flex flex-row gap-3 shadow-2xl rounded-lg'}>
        {/* logo and meeting info start */}
        <LogoAndCompanyInfo count={count} />
        {/* logo and meeting info end */}
        {props.page === 'home' ?
          <>
            <CalendarData count={count} HndelChange={HandelDayChange} />
            <SlotBoking count={count} data={data} />
          </>
          : ''}

        {props.page === 'form' ?
          <>
            <Form />
          </>
          : ''}

      </div>

    </div>
  );
}

export default DemoComponent;
