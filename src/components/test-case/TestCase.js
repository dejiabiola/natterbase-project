import React from 'react'
import './test-case.scss'
import TestCaseButton from '../test-case-button/TestCaseButton'

// Component for each rendered test case card
function TestCase({ data }) {
  return (
    <div className="test-case">
      <p className="mb-0">{data.title}</p>
      <TestCaseButton {...data} />
    </div>
  )
}

export default TestCase
