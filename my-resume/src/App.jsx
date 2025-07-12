// import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Experience from './Experience.jsx'
import Education from './Education.jsx'



export default function App() {
  return (
    <>
      <div className='mb-20'> {/*change later !!!! */}
        <Header/>
        <Experience/>
        <Education/> 
      </div>
      
    </>
  )
}