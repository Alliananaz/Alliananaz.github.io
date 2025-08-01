// import { useState } from 'react'
import './App.css'
// import Header from './pages/CV/Header.js'
// import Experience from './pages/CV/Experience.js'
// import Education from './pages/CV/Education.js'
// import MainPage from './pages/MainPage.jsx'
// import Referance from './pages/CV/Referance.js'
// import BackButton from './components/BackButton.jsx'
// import Forside from './Forside/Forside.jsx'
// import Portfolio from './pages/ProjectsPage/Portfolio.jsx'
// import CVPage from './pages/CV/CVPage.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage.jsx'
import CVPage from './pages/CV/CVPage.jsx'
import Portfolio from './pages/ProjectsPage/Portfolio.jsx'



export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<MainPage/>}></Route>
          <Route path="/projects" element = {<Portfolio/>}></Route>
          <Route path="/resume" element = {<CVPage/>}></Route>
        </Routes>
      </Router>

      {/* <Portfolio/> */}
      
      {/* <CVPage/> */}
      {/* <MainPage/> */}

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