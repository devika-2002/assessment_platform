import React from 'react';
import Pagination from './Pagination';

function Header() {
  return (
    <div className='header-main-div'>
      <div className='header-1'>
        <div className='header-div1'>

          <div className='header-col-1'>
            <img className="Logo-1" src="Logo Grp.svg" />
            <div className="text-AQ-1">QA</div>
          </div>

          <div className='header-col-2'>
            <Pagination />
          </div>
        </div>
        <div className='header-div2'>
          <button className='sub-button'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Header;
