import React from 'react'
import './quick-view-card.scss'
import ShoppingBag from '../../assets/shoppin-bag.svg'

function QuickViewCard({ data: { title, number, color, above}}) {
  return (
    <div className={`${color ? color : ''} quickview-card`}>
      <div className="top">
        <img src={ShoppingBag} alt=""/>
        <span>{number}</span>
      </div>
      <div>
        <p class="mb-0">{above}</p>
        <p class="mb-0">{title}</p>
      </div>
    </div>
  )
}

export default QuickViewCard
