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


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<MainPage/>}></Route>
          <Route path="/projects" element = {<Portfolio/>}></Route>
          <Route path="/resume" element = {<CVPage/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App