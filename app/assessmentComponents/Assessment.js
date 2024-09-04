import React from 'react';

function Assessment() {
  return (
    <div className='Mcq-container'>
      <div className='question-score'>
        <div className='question1-text'>Question 1</div>
        <div className='score_text'>Score +1</div>
      </div>
      <div className='mcq-que-div'>
        <div className='mcq-div1'>
          <div className='mcq-que1'>Which of the following committees recommended inclusion of fundamental duties ?</div>

          <div className='mcq-option'>
            <div className='option1'>
              <div class="circle1"></div>
              <div className='text-option-1'>Tarapore Committee</div>
            </div>
            <div className='option2'>
              <div class="circle2"></div>
              <div className='text-option-2'>Radha Krishnan Committee </div>
            </div>
            <div className='option3'>
              <div class="circle3"></div>
              <div className='text-option-3'>Swaran Singh Committee </div>
            </div>
            <div className='option4'>
              <div class="circle4"></div>
              <div className='text-option-4'>Balwantrai Mehta Committee </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assessment;
