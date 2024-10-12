import React from 'react';
import Timer from "./Timer";
import Filter from './Filter';
import "./timerfilter.css";

function TimerFilter() {
  return (
    <div className='timer-filter-container'>
      <div className='timer-filter-text'>
        <Timer />
        <div>
          <div className='mobile-only'>
            <div className='mobile-filter-line'>
              <div className='border-line1'></div>
              <div className='border-line2'></div>
              <div className='border-line3'></div>
            </div>
            <div className='mobile-filter-text'>Filters</div>
          </div>
          <Filter />
        </div>
      </div>
    </div>

  )
}

export default TimerFilter;
