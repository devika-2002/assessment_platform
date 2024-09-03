import React from 'react';
import Header from './Header';
import "./assessment.css";
import Assessment from './Assessment';
import Footer from "../Components/Footer";
import Filter from './Filter';
import Timer from './Timer';

function McqComponent() {
  return (
    <div className='mcq-div'>
      <Header />
      {/* <div className='assessment-div1'>
        <div className='assessment-div2'>
          <Filter />
          <Assessment />
          <Assessment />
          <Assessment />
          <Assessment />
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default McqComponent;
