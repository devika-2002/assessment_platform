import React from 'react'
import Pagination from './Pagination'

function Header() {
  return (
    <div className='header-1'>
      <div className="col2">
        <img className="Logo" src="Logo Grp.svg" />
        <div className="text-AQ">QA</div>
      </div>

      <Pagination />

      <div className='col3'>
        <button className='submit-but'>Submit</button>
      </div>
    </div>
  )
}

export default Header
