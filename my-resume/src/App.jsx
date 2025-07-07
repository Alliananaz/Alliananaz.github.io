// import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'

export default function App() {
  return (
    <>
      <Header/>
      <div className='resume space-y-6 mt-6'>
        <h1 className="font-bold text-red-500"> Period💅</h1>
        
        <h1 className="text-red-500 underline">Hello Tailwind</h1>
      </div> 
      {/* <hr className="my-3 border-t border-gray-400" />  border line */}
      <div className="flex flex-col w-full h-full mt-6">
          <div className="flex flex-row">
              <div className="flex-1 flex border justify-center items-center">A</div>
              <div className="flex-1 flex border justify-center items-center">B</div>
              <div className="flex-1 flex border justify-center items-center">C</div>
          </div>
          <div className="flex border justify-center items-center">D</div>
      </div>
    </>
  )
}