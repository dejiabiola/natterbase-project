import React from 'react'
import TopNav from '../../components/topNav/topNav'
import './mainPage.scss'
import Content from '../../components/content/Content'


function MainPage() {
  // Main page component includes everything rendered minus the sidebar
  return (
    <div className="main-page">
      <TopNav />
      <Content />
    </div>
  )
}

export default MainPage
