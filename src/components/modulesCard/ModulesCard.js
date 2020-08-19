import React from 'react'
import './modulesCard.scss'
import ThreeDots from '../../assets/3dots.svg'
import Clock from '../../assets/clock.svg'
import ModuleImages from '../module-images/ModuleImages'

function ModulesCard({ data: { title, dueDate } }) {
  // Component for each module card
  return (
    <div className="modules-card">
      <div className="topdiv">
        <p className="mb-0">{title}</p>
        <img src={ThreeDots} alt="" className="pointer" />
      </div>
      <div className="bottomdiv">
        <div className="bottom-left">
          <img src={Clock} alt=""/>
          <p className="mb-0">{dueDate}</p>
        </div>
        <div className="bottom-right">
          <ModuleImages />
        </div>
      </div>
    </div>
  )
}

export default ModulesCard
