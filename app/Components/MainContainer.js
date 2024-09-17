import React from 'react';

function MainContenr() {
  return (
    <>
      <div className='text-mcq'>MCQ Test Portal</div>
      <div className='box-page'>
        <div className='text-box'>

          <div className='text-1'>Instructions</div>
          <div className='text-2'>Please read the instructions carefully before you begin:</div>
          <div className='text-3'>
            <ul>
              <li>Timing: The test is timed. You have [specified time] minutes to complete all questions.</li>
              <li>Questions: The test comprises [number of questions] multiple-choice questions (MCQs).</li>
              <li>Navigation: You can navigate between questions using the 'Next' and 'Previous' buttons.</li>
              <li>Selection: Choose the best answer for each question. You can change your answers anytime before submitting.</li>
              <li>Submission: Once you have answered all questions, click the 'Submit' button. You must submit before the timer runs out.</li>
              <li className='text-3-text'>Review: After submission, you may review your answers and scores.</li>
            </ul>
          </div>

          <div className='text-4'>Please ensure a stable internet connection. If you encounter any issues, contact support immediately.</div>
          <div className='text-5'>
            <div>Click 'Lets Start' to begin the test. </div>
            <b>Good luck!</b>
          </div>

        </div>
        <div className='border-line'></div>
        <div className='button-box'>
          <a href='./assessmentComponents'>
            <button className="button-box1">Lets Start!</button>
          </a>
        </div>

      </div>
    </>
  )
}

export default MainContenr;
