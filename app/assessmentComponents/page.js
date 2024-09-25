import React from 'react';
import Header from './Header';
import "./assessment.css";
import Assessment from './Assessment';
import Footer from "../Components/Footer";
import Filter from './Filter';

function McqComponent() {
  return (
    <div className='mcq-div'>
      <Header />
      <div className='assessment-row'>
        <div className='assessment-container'>
          <Filter />

          <div className='assessment'>
            <Assessment />
            <Assessment />
            <Assessment />
            <Assessment />
            <Assessment />
          </div>
        </div>
      </div>
      <div className='assessment-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default McqComponent;
