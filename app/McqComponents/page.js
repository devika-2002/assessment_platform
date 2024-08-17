import React from 'react'
import Header from './Header'
import "./mcq.css"
import Mcq from './Mcq'
import Footer from "../Components/Footer"
function McqComponent() {
  return (
    <div className='mcq-div'>
      <Header/>
      <Mcq/>
      <div id="space"></div>
      <Footer/>
    </div>
  )
}

export default McqComponent;
