import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './test-case-button.scss'
import TestCaseArrow from '../../assets/test-case-arrow.svg'
import TestCaseDropdown from '../test-case-dropdown/TestCaseDropdown';

function getName(state) {
  // Switch on the state props passed from parent component to get the title of the button
  switch (state) {
    case 'pass':
      return 'Pass';
    case 'fail':
      return 'Fail';
    case 'untested':
      return 'Untest';
    case 'retest':
      return 'Retest';
    default:
      return state;
  }
}


//Function to render the buttons on the test case component. Also passes props to the dropdown
function TestCaseButton({ state, ...props }) {
  return (
    <div className="test-case-btn">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className={state}>
          {getName(state)}
          <img src={TestCaseArrow} alt="" />
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <TestCaseDropdown state={state} {...props} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default TestCaseButton
