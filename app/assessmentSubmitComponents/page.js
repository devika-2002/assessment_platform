import React from 'react'
import Header from '../Components/Header';
import "./submit.css"
import Submit from "./Submit";

function submitPage() {
  return (
    <div>
      <Header/>
      <div className='sub-div'>
      <Submit/>
      </div>
    </div>
  )
}

export default submitPage;
