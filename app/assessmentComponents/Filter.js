import React from 'react';
import "./filter.css";
import Timer from "./Timer";

function Filter() {
  return (
    <div>

      <div className='timer-filter-text'>
        <Timer />
        <div className='mobile-only'>
          
          <div className='mobile-filter-line'>
            <div className='border-line1'></div>
            <div className='border-line2'></div>
            <div className='border-line3'></div>
          </div>

          <div className='mobile-filter-text'>Filters</div>
        </div>

      </div>

      <div className='filter-container'>
        <div className='filter-text'>Filters</div>
        <div className='quesrion-score'>
          <div className='question-score-text'>Question Score</div>
          <div className='score'>
            <div className='all-text'>All</div>
            <div className='score-num1'>10</div>
            <div className='score-num1'>15</div>
            <div className='score-num1'>20</div>
          </div>
        </div>

        <div className='questions-attempted-div'>
          <div className='questions-attempted-text'>Questions Attempted</div>
          <div className='questions-attempted'>
            <div className='all-que'>All(40)</div>
            <div className='attempted-que'>Attempted(3)</div>
          </div>
          <div className='unattempted-que'>Unattempted(37)</div>
        </div>
      </div>
    </div>

  )
}

export default Filter;
