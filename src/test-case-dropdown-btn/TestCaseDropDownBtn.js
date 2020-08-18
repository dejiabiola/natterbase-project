import React from 'react'
import './test-case-dropdown-btn.scss'
import CheckedCircle from '../assets/checked-circle.svg'

function TestCaseDropDownBtn({ children, active }) {
  return (
    <div className="dropdown-btn">
      <button className={`${active ? 'active' : ''}`}>{children}</button>
      <img src={CheckedCircle} alt=""/>
    </div>
  )
}

export default TestCaseDropDownBtn
