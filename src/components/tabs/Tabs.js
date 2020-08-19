import React from 'react'
import './tabs.scss'
import { Tab } from 'semantic-ui-react'
import Calendar from '../../assets/calendar.svg'
import TestTab from '../test-tab/TestTab'


// Panes to be rendered. For now, we only have one active pane
const panes = [
  {
    menuItem: 'Overview',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Teams',
    render: () => <Tab.Pane attached={false} >Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Test',
    render: () => <Tab.Pane attached={false} ><TestTab /></Tab.Pane>,
  },
  {
    menuItem: 'Files',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
  {
    menuItem: 'Progress',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  }
]


function Tabs() {
  // Renders the tabs on the page and the appropriate panes
  return (
    <div className="tabs">
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} activeIndex={2} />
      <div className="absolute">
        <img src={Calendar} alt=""/>
        <span>Project Deadline:</span>
        <span>10-june-2020</span>
      </div>
    </div>
  )
}

export default Tabs
