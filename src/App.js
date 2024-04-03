import { Routes, Route } from "react-router-dom";
import React from "react";
import DemoComponent from "./DemoComponent";
import CalendarData from './components/CalendarData';
import SlotBoking from './components/SlotBoking';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DemoComponent page='home' />} />
        <Route path='/enterdetail' element={<DemoComponent page='form' />} />
      </Routes>
    </>
  );
}

export default App;
