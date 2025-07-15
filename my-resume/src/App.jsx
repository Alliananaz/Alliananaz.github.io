// import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import Other from './Other.jsx'
import Referance from './Referance.jsx'



export default function App() {
  return (
    <>
      <div className='min-h-screen flex justify-center'> 
        <div className='w-full max-w-3xl flex flex-col p-10 shadow-lg rounded'> 
          <Header/>
          <Experience/>
          <Education/> 
          <Other/> 
          <Referance/>
        </div>
        
      </div>
    </>
  )
}