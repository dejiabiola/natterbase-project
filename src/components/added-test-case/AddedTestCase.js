import React from 'react'
import './added-test-case.scss'
import TestCase from '../test-case/TestCase'
import { useSelector } from 'react-redux'

// Main component for the added testcase section
function AddedTestCase() {
  // Get testcase data from the redux store
  const testCaseData = useSelector(state => state.data.testCaseData)

  return (
    <section className="added-test-case">
      <h2>Added Test Case</h2>
      <div className="test-case-wrapper">
      {/* loop through the data and render each test case passing in the data */}
        <div className="cases">
          {Object.values(testCaseData).map((data) => (
            <TestCase key={data.id} data={data} />
          ))}
        </div>
        <div className="button-wrapper">
          <button>New Test Case</button>
          <button>Test</button>
        </div>
      </div>
    </section>
  )
}

export default AddedTestCase
