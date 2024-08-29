import React from 'react';
import "./filter.css";

function Filter() {
  return (
    <div>
      <div className='div1'>
        <div className='text1'>Filters</div>
        <div className='col4'>
          <div className='text2'>Question Score</div>
          <div className='col5'>
            <div className='All-score'>All</div>
            <div className='score score1'>10</div>
            <div className='score score2'>15</div>
            <div className='score score3'>20</div>
          </div>
          <div className='col6'>
            <div className='text3'>Questions Attempted</div>
            <div className='col7'>
              <div className='text4'>All(40)</div>
              <div className='text5'>Attempted(3)</div>
              <div className='text6'>Unattempted (37)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
