import React from 'react';
import Pagination from './Pagination';
import Timer from './Timer';
function Header() {
  return (
    <div className='header-1'>
      <div className="col2">
        <img className="Logo" src="Logo Grp.svg" />
        <div className="text-AQ">QA</div>
      </div>
      <Timer/>
      <Pagination />

      <div className='col3'>
        <a className='' href='./assessmentSubmitComponents'>
          <button className='submit-but'>Submit</button>
        </a>
      </div>
    </div>
  )
}

export default Header;
