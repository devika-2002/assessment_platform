import React from 'react'
import Header from './Header';
import "./assessment.css";
import Assessment from './Assessment'
import Footer from "../Components/Footer"
function McqComponent() {
  return (
    <div className='mcq-div'>
      <Header/>
      <Assessment/>
      <div></div>
      <Footer/>
    </div>
  )
}

export default McqComponent;
