import React from 'react'
import TopNav from '../../components/topNav/topNav'
import './mainPage.scss'
import Content from '../../components/content/Content'
// import RightNav from '../../components/right-nav/RightNav'

function MainPage() {
  // Main page component includes everything rendered minus the sidebar
  return (
    <div id="content">
      <TopNav />
      <Content />
      {/* <RightNav /> */}
    </div>
  )
}

export default MainPage
