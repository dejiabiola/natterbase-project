import React from 'react'
import Modules from '../modulesComponent/Modules'
import QuickView from '../quick-view/QuickView'
import './test-tab.scss'
import AddedTestCase from '../added-test-case/AddedTestCase'

function TestTab() {
  // Component for the test tab which is the active tab for this task
  return (
    <section className="test-tab">
      <Modules />
      <AddedTestCase />
      <QuickView />
    </section>
  )
}

export default TestTab
