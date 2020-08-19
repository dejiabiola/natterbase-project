import React from 'react'
import './added-test-case.scss'
import TestCase from '../test-case/TestCase'
import { useSelector } from 'react-redux'

function AddedTestCase() {

  const testCaseData = useSelector(state => state.data.testCaseData)
  console.log(testCaseData)
  return (
    <section className="added-test-case">
      <h2>Added Test Case</h2>
      <div className="test-case-wrapper">
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
