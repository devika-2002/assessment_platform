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
      <div className='assessment-container'>
        <div className='assessment'>
          <Filter />
          <Assessment />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default McqComponent;
