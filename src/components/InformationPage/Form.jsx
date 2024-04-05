import React from 'react'

const Form = () => {
  return (
    <>
      <form className='h-[100%] flex flex-col items-center ml-4 lg:items-start '>
        <div className='basis-[100%] flex flex-col'>
          <h1 className='mt-6 font-semibold text-[18px]'>Enter Detail</h1>

          <label className='mt-2 mb-2 text-[14px] font-semibold'>Name</label>
          <div className='flex xl:w-[25vw] w-[70vw] text-[1.1rem] mb-4 border-[1px] border-gray-400 rounded-md py-2 pl-2'>
            <input className='basis-[100%] min-w-0 placeholder:text-gray-700 focus:outline-none' type='text' placeholder='Name' />
          </div>
          <label className='mt-2 mb-2 text-[14px] font-semibold'>Email</label>
          <input className='xl:w-[25vw] w-[70vw]  text-[1.1rem] mb-2 border-[1px] border-gray-400 rounded-md py-2 pl-2 placeholder:text-gray-700 focus:outline-none' type='email' placeholder='E-mail' />

          <button className='w-[130px] mb-6 border-2 border-blue-500 text-[14px] text-blue-500 px-3 py-1 items-center rounded-full'>Add Guests</button>

          <label className='text-[14px] mb-3 font-semibold'>I want Fibery to work from:</label>

          <label className='flex pr-3 mb-3 text-gray-600' for='myself'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='myself' id='myself' value='myself' />
            🥕 Myself
          </label>
          <label className='flex pr-3 mb-3 text-gray-600' for='people'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='people' id='people' value='people' />
            🧑‍🤝‍🧑 &lt;10 people
          </label>
          <label className='flex pr-3 mb-3 text-gray-600' for='10-50people'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='10-50people' id='10-50people' value='10-50people' />
            🦄10-15 people
          </label>
          <label className='flex pr-3 mb-3 text-gray-600' for='50+people'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='50+people' id='50+people' value='50+people' />
            🦅50+people
          </label>


          <label className='text-[14px] mb-3 mt-3 font-semibold'>You are more about:</label>

          <label className='flex pr-3 mb-3 text-gray-600' for='Leadership'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='Leadership' id='Leadership' value='Leadership' />
            🗻Leadership
          </label>

          <label className='flex pr-3 mb-3 text-gray-600' for='pconsulting'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='pconsulting' id='pconsulting' value='pconsulting' />
            🦉Consulting
          </label>

          <label className='flex pr-3 mb-3 text-gray-600' for='product'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='product' id='product' value='product' />
            🌞 Product Managme
            nt</label>

          <label className='flex pr-3 mb-3 text-gray-600' for='design'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='design' id='design' value='design' />
            🎨 Design
          </label>

          <label className='flex pr-3 mb-3 text-gray-600' for='engineering'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='engineering' id='engineering' value='engineering' />
            💻 Enginnering
          </label>

          <label className='flex pr-3 mb-3 text-gray-600' for='sales'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='sales' id='sales' value='sales' />
            🎣 Sales
          </label>

          <label className='flex pr-3 mb-3 text-gray-600' for='market'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='market' id='market' value='market' />
            💣 Marketing
          </label>

          <label className='flex pr-3 mb-3 text-gray-600' for='human'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='human' id='human' value='human' />
            ♦️ Human Resources
          </label>

          <label className='flex pr-3 mb-3 text-gray-600' for='education'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='education' id='education' value='education' />
            📚Education
          </label>

          <label className='flex pr-3 mb-3 text-gray-600' for='else'>
            <input className='mr-1 border-2 w-4' type='checkbox' name='else' id='else' value='else' />
            ❓ Somthing else
          </label>

          <label className='text-[14px] mb-3 mt-4 font-semibold xl:w-[25vw] w-[70vw]' for='extra_info'>Please,share anything that will helps preparing for our meeting</label>
          <textarea name='extra_info' className='border-2 border-gray-300 mb-3 rounded-md xl:w-[25vw] w-[70vw] ' rows='3' cols='39'></textarea>


          <label className='text-[14px] mb-3 font-semibold xl:w-[25vw] w-[70vw]' for='workspace_info'>Please,share with us the name of your Fibery workspace(if any)</label>
          <input type='text' name='workspace_info' className='border-2 border-gray-300 mb-3 rounded-md xl:w-[25vw] w-[70vw]'></input>

          <button className='w-[150px] mb-6 bg-blue-600 text-[15px] text-white px-4 py-2 items-center rounded-full' >Schedule Event</button>


        </div>
      </form>
    </>
  )
}

export default Form
