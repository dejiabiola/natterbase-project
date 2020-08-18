import React from 'react'
import './test-case.scss'
import TestCaseDropdown from '../test-case-dropdown/TestCaseDropdown'
import TestCaseButton from '../test-case-button/TestCaseButton'

function TestCase({ data }) {
  return (
    <div>
      {/* <TestCaseDropdown {...data} /> */}
      <TestCaseButton>
        {data.state}
      </TestCaseButton>
    </div>
  )
}

export default TestCase
