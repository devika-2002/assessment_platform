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

            <div>
              <input type='radio' name='committee' value="Tarapore Committee" />
              <label>Tarapore Committee</label>
            </div>

            <div className='opti-2'>
              <input type='radio' name='committee' value="Radha Krishnan Committee" />
              <label>Radha Krishnan Committee</label>
            </div>

            <div className='opti-2'>
              <input type='radio' name='committee' value="Swaran Singh Committee" />
              <label>Swaran Singh Committee</label>
            </div>

            <div className='opti-2'>
              <input type='radio' name='committee' value="Balwantrai Mehta Committee" />
              <label>Balwantrai Mehta Committee</label>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Assessment;
