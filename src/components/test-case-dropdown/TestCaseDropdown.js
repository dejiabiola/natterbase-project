import React from 'react'
import { Input } from 'semantic-ui-react'
import './test-case-dropdown.scss'
import TestCaseDropDownBtn from '../test-case-dropdown-btn/TestCaseDropDownBtn'
import InputDown from '../../assets/input-down.svg'
import InputSearch from '../../assets/input-search.svg'
import { updateTestCase } from '../../redux/content-data/content-data.actions'
import { connect } from 'react-redux'




function TestCaseDropdown({ id, state, updateTestCase }) {

  const handleClick = (id, newState) => {
    updateTestCase({id, newState})
  }

  return (
    <div className="test-case-dropdown">
      <div className="input-wrapper">
        <Input iconPosition="left" placeholder='Search name' />
        <img src={InputSearch} alt="" className='first' />
        <img src={InputDown} alt="" className="last" />
      </div>
      <div className="options d-flex flex-column">
        <div onClick={() => handleClick(id, 'pass')}>
          <TestCaseDropDownBtn active={state === 'pass' ? true : false}>Pass</TestCaseDropDownBtn>
        </div>
        <div onClick={() => handleClick(id, 'fail')}>
          <TestCaseDropDownBtn active={state === 'fail' ? true : false}>Failed</TestCaseDropDownBtn>
        </div>
        <div onClick={() => handleClick(id, 'retest')}>
          <TestCaseDropDownBtn active={state === 'retest' ? true : false}>Retest</TestCaseDropDownBtn>
        </div>
        <div onClick={() => handleClick(id, 'untested')}>
          <TestCaseDropDownBtn active={state === 'untested' ? true : false}>Untest</TestCaseDropDownBtn>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateTestCase: (testCase) => dispatch(updateTestCase(testCase))
}) 

export default connect(null, mapDispatchToProps)(TestCaseDropdown);
