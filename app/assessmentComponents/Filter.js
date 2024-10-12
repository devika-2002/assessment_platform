import React from 'react'
import "./filter.css"

function Filter() {
    return (
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
    )
}

export default Filter;