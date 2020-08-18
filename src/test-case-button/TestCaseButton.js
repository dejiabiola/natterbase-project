import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './test-case-button.scss'

function getName(children) {
  switch(children) {
    case 'pass':
      return 'Pass';
    case 'failed':
      return 'Fail';
    case 'untested':
      return 'Untest';
    case 'retest':
      return 'Retest';
    default:
      return children;
  }
}

function TestCaseButton({ children }) {
  return (
    <div className="test-case-btn">
      <Dropdown.Toggle id="dropdown-basic">
        {getName(children)}
      </Dropdown.Toggle>
      <img src="" alt=""/>
    </div>
  )
}

export default TestCaseButton
