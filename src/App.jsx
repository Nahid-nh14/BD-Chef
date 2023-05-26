// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/shared/footer/Footer'
import Navbar from './components/shared/navbar/Navbar'
import Card from './components/card/Card'
// import Test from './components/test'

function App() {


  return (
    <>
  <Navbar></Navbar>
  <Outlet></Outlet>
  <Footer></Footer>
  {/* <Card></Card> */}
  {/* <Test></Test> */}
    </>
  )
}

export default App
