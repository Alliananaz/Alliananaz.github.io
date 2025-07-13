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
      <div className='mb-10'> {/*change later !!!! */}
        <Header/>
        <hr/>
        <Experience/>
        <Education/> 
        <Other/> 
        <Referance/>
      </div>
    </>
  )
}