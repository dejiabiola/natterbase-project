import React from 'react'
import './modulesCard.scss'
import ThreeDots from '../../assets/3dots.svg'
import Clock from '../../assets/clock.svg'
import Pictures from '../../assets/pictures.svg'
import Pic4 from '../../assets/pic4.svg'

function ModulesCard({ data: { title, dueDate } }) {
  
  return (
    <div className="modules-card">
      <div className="topdiv">
        <p class="mb-0">{title}</p>
        <img src={ThreeDots} alt="" className="pointer" />
      </div>
      <div className="bottomdiv">
        <div className="bottom-left">
          <img src={Clock} alt=""/>
          <p class="mb-0">{dueDate}</p>
        </div>
        <div className="bottom-right">
          {/* <img src={Pictures} alt=""/> */}
        </div>
      </div>
    </div>
  )
}

export default ModulesCard
