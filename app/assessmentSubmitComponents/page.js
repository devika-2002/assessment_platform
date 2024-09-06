import React from 'react'
import Header from '../Components/Header';
import "./submit.css"
import Submit from "./Submit";
import Footer from '../Components/Footer';

function submitPage() {
  return (
    <div className='submit-row'>
      <Header/>
      <Submit/>
      <Footer/>
    </div>
  )
}

export default submitPage;
