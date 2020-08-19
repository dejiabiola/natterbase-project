import React from 'react'
import './added-test-case.scss'
import TestCase from '../test-case/TestCase'
import { testCaseData } from '../../utils/test-case.data'

function AddedTestCase() {
  return (
    <section className="added-test-case">
      <h2>Added Test Case</h2>
      <div className="test-case-wrapper">
        <div className="cases">
          {testCaseData.map((data) => (
            <TestCase key={data.id} data={data} />
          ))}
        </div>
        <div class="button-wrapper">
          <button>New Test Case</button>
          <button>Test</button>
        </div>
      </div>
    </section>
  )
}

export default AddedTestCase
