import React from 'react';
import "./timer.css";

function timer() {
  return (
    <div className='timer-div'>
      
      <div className='time'>
        <div className='inside-div1'>
          <div className='inside-div2'>
            <div className='col-div1'>
              <div className='col-num1'>50</div>
              <div className='col-min'>min</div>
            </div>
            <div className='semicolon'>:</div>
            <div className='col-div2'>
              <div className='col-num2'>20</div>
              <div className='col-sec'>Sec</div>
            </div>
          </div>
        </div>
      </div>

      <div className='timer-text'>Remaining Time </div>
    </div>
  )
}

export default timer;
