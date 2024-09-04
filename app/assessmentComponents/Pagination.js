import React from 'react';
import "./pagination.css";

function Pagination() {
    return (
        <div className='pagination-container'>
            <img className='previous-symbol' src='Component 9.svg' />
            <a className='num1'>1</a>
            <a className='num2'>2</a>
            <a className='num2'>3</a>
            <a className='num2'>4</a>
            <a className='num2'>5</a>
            <a className='num2'>6</a>
            <a className='num2'>7</a>
            <a className='num2'>8</a>
            <img className='next-symbol' src='Component 10.svg' />
        </div>
    )
}

export default Pagination;
