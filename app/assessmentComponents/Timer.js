import React from 'react';
import "./timer.css";

function timer() {
  return (
    <div className='timer-container'>
      <div className='timer'>
        <div className='inside-div1'>
          <div className='timer-div1'>
            <div>
              <div className='timer-col1'>50</div>
              <div className='timer-text1'>min</div>
            </div>
            <div className='timer-col2'>:</div>
            <div>
              <div className='timer-col3'>20</div>
              <div className='timer-text2'>Sec</div>
            </div>
          </div>
        </div>
      </div>

      <div className='timer-text'>Remaining Time </div>
    </div>
  )
}

export default timer;
