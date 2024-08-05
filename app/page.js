import React from 'react';
import Header from './Components/Header';
import MainContenr from './Components/MainContainer';
import Footer from './Components/Footer';

function page() {
  return (
    <div className='main-div'>
      <Header/>
      <MainContenr/>
      <Footer/>
    </div>
  )
}

export default page;
