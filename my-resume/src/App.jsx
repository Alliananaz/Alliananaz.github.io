// import { useState } from 'react'
import './App.css'
import Header from './CV/Header.jsx'
import Experience from './CV/Experience.jsx'
import Education from './CV/Education.jsx'
import Other from './CV/Other.jsx'
import Referance from './CV/Referance.jsx'
import BackButton from './CV/BackButton.jsx'
import Forside from './Forside/Forside.jsx'
import Portfolio from './Portfolio.jsx'



export default function App() {
  return (
    <>
      <Portfolio/>
      
      {/* <div className='relative min-h-screen '>
        <BackButton/>
        <div className='min-h-screen flex justify-center'> 
          <div className='w-full max-w-2xl my-10 flex flex-col space-y-10'> 
            <Header/>
            <Experience/>
            <Education/> 
            <Other/> 
            <Referance/>
          </div>
        </div>
      </div> */}

      {/* <div className='relative min-h-screen '>
        
        <div className='min-h-screen flex justify-center'> 
          <div className='w-full max-w-3xl my-10 flex flex-col space-y-10'> 
            <Forside/>
          </div>
        </div>
      </div> */}
      
    </>
  )
}