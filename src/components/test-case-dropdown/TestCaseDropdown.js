import React from 'react'
import { Input } from 'semantic-ui-react'
import './test-case-dropdown.scss'
import TestCaseDropDownBtn from '../test-case-dropdown-btn/TestCaseDropDownBtn'
import InputDown from '../../assets/input-down.svg'
import InputSearch from '../../assets/input-search.svg'

function TestCaseDropdown({ id, state, title }) {
  return (
    <div className="test-case-dropdown">
      <div className="input-wrapper">
        <Input  iconPosition="left" placeholder='Search name' />
        <img src={InputSearch} alt="" className='first' />
        <img src={InputDown} alt="" className="last" />
      </div>
      <div className="options d-flex flex-column">
        <TestCaseDropDownBtn active={state === 'pass' ? true : false}>Pass</TestCaseDropDownBtn>
        <TestCaseDropDownBtn active={state === 'fail' ? true : false}>Failed</TestCaseDropDownBtn>
        <TestCaseDropDownBtn active={state === 'retest' ? true : false}>Retest</TestCaseDropDownBtn>
        <TestCaseDropDownBtn active={state === 'untested' ? true : false}>Untest</TestCaseDropDownBtn>
      </div>
    </div>
  )
}

export default TestCaseDropdown
