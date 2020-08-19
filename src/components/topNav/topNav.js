import React from 'react'
import FCMBLogo from '../../assets/fcmb.svg'
import Search from '../../assets/search.svg'
import Badge from '../../assets/badge.svg'
import ProfilePic from '../../assets/profile-pic.svg'
import OwnerStuff from '../../assets/owner-stuff.svg'
import NotificationBell from '../../assets/bell.svg'
import Hamburger from '../../assets/hamburger.svg'
import '../sideNav/sideNav.scss'
import ArrowDown from '../../assets/arrow-down.svg'
import RightBurger from '../../assets/right-burger.svg'
import { connect } from 'react-redux'
import { toggleSideNav } from '../../redux/side-nav/sideNav.actions'

const TopNav = ({ toggleSideNav }) => {
  // Top nav component
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        {/* Left hamburger for side nav */}
          <button type="button" id="sidebarCollapse" className="btn hambugger shadow-none" onClick={toggleSideNav}>
            <img src={Hamburger} alt="" />
            <span className="sr-only">Toggle Menu</span>
          </button>
          {/* right hanburger for mobile nav */}
          <button className="btn d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src={RightBurger} alt="" />
          </button>


          <div className="collapse navbar-collapse pl-4" id="navbarSupportedContent" >
            <div className="fcmb-wrapper nav navbar-nav">
              <img src={FCMBLogo} alt="" />
              <div className="vertical-line"></div>
            </div>
            <div className="input-wrapper">
              <img src={Search} alt="" className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="ml-auto d-flex top-nav-right-side">
              <img src={NotificationBell} alt="" className="bell" />
              <img src={OwnerStuff} alt="" className="owner-stuff" />
              <img src={Badge} alt="" className="badge-stuff" />
              <img src={ProfilePic} alt="" className="profile-pic" />
              <div className="profile-name">
                <p className="mb-0">Mark Dawn</p>
                <span>Markdawn@natterbase</span>
                <img src={ArrowDown} alt="" className="arrow-down" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )

}

// To toggle navigation for the side nav hamburger
const mapDispatchToProps = (dispatch) => ({
  toggleSideNav: () => dispatch(toggleSideNav())
})

export default connect(null, mapDispatchToProps)(TopNav)
