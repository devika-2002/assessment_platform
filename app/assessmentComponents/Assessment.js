import React from 'react';

function Assessment() {
  return (
    <div className='Mcq-que'>
      <div className='div2'>
        <div className='div3'>
          <div className='question1'>Question 1</div>
          <div className='score_text'>Score +1</div>
        </div>
        <div className='div4'>
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
    </div>
  )
}

export default Assessment;
