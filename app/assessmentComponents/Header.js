import React from 'react';
import Pagination from './Pagination';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-row'>
        <div className='logo-pagination'>

          <div className='logo-container'>
            <img className="Logo-1" src="Logo Grp.svg" />
            <div className="text-AQ-1">QA</div>
          </div>

          <div className='header-pagination'>
            <Pagination />
          </div>
        </div>
        <div className='submit-container'>
          <button className='sub-button'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Header;
