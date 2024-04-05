import { Routes, Route } from "react-router-dom";
import React from "react";
import DemoComponent from "./DemoComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<DemoComponent page='home' />} />
        <Route path='/enterdetail' element={<DemoComponent page='form' />} />
      </Routes>
      {/* <div className="h-screen flex justify-center items-center bg-slate-500">
        <div className="flex justify-center  w-[60vw] h-[80vh] border-2 overflow-auto">
          <div className="flex-row min-w-[50vw] max-w-[55vw] h-[100vh] flex border mt-[66px]">
            <div className="border-2 border-red-400">
              <div className="border-2 h-[10%] border-blue-400">
                hello
              </div>
              <div className="border-2 h-[90%] border-green-400">
                hello
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
