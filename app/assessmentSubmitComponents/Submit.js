import React from 'react'

function Submit() {
  return (
    <div className='submit-container'>

      <div className='logo-successfull'>
        <img className='submission-logo' src='Group 32.svg' />
      </div>

      <div className='submit-text-container'>
        <div className='sub-text-col1'>Successfully Sumbitted</div>
        <div className='sub-text-col2'>Thank you for completing the test! </div>
        <div className='sub-text-col3'>Review your results and keep practicing. Great job and keep up the hard work!</div>
      </div>

      <div className='check-score-btn'>
        <button className='submit-butn'>Check Your Score</button>

      </div>
    </div>
  )
}

export default Submit
