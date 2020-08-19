import React from 'react'
import './quick-view.scss'
import QuickViewCard from '../quick-view-card/QuickViewCard'
import { useSelector } from 'react-redux'

// Main section for the quickview section
function QuickView() {
  // get the data from the redux store and render
  const quickViewData = useSelector(state => state.data.quickViewData)

  return (
    <section className="quickview">
      <h2>Quick Overview</h2>
      <div className="cards">
      <div className="quickview-cards-wrapper">
        {quickViewData.map((data, index) => (
          <QuickViewCard key={index} data={data} />
        ))}
        
      </div>
      </div>
    </section>
  )
}

export default QuickView
