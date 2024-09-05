import React from 'react';
import "./pagination.css";

function Pagination() {
    return (
        <div className='pagination-container'>
            <img className='previous-symbol' src='Component 9.svg' />
            <a className='num1'>1</a>
            <a className='dote-space1'>...</a>
            <a className='num2 num'>2</a>
            <a className='num3 num'>3</a>
            <a className='num4 num'>4</a>
            <a className='num5 num'>5</a>
            <a className='dote-space1'>...</a>
            <a className='num6 num'>6</a>
            <a className='num7 num'>7</a>
            <a className='num8 num'>8</a>
            <img className='next-symbol' src='Component 10.svg' />
        </div>
    )
}

export default Pagination;
