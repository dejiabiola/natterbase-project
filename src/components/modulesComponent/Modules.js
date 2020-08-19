import React from 'react'
import './modules.scss'
import ModulesCard from '../modulesCard/ModulesCard'
import ThreeDots from '../../assets/3dots.svg'
import { useSelector } from 'react-redux'

// Main component for the modules section
function Modules() {
  // get the modules data from the redux store
  const modulesData = useSelector(state => state.data.modulesData);

  return (
    <section className='modules'>
      <div className='header-wrapper'>
        <h2 className="mb-0">Modules</h2>
        <img src={ThreeDots} alt="" className="pointer" />
      </div>
      <div className="cards-container scroll">
      {modulesData.map((data, index) => (
        <ModulesCard key={index} data={data} />
      ))}
      </div>
    </section>
  )
}

export default Modules
