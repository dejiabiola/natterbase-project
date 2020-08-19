import React from 'react'
import './sideNav.scss'
import { Link } from 'react-router-dom'
import SideBarLogo from '../../assets/sidenav-icon.svg'
import FirstSideIcon from '../../assets/first-side-icon.svg'
import SecondSideIcon from '../../assets/second-side-icon.svg'
import ThirdSideIcon from '../../assets/third-side-icon.svg'
import LastSideIcon from '../../assets/last-side-icon.svg'
import Pn from '../../assets/pm.svg'
import Ji from '../../assets/ji.svg'
import Lg from '../../assets/lg.svg'
import Aw from '../../assets/aw.svg'
import Aw2 from '../../assets/aw2.svg'
import { connect } from 'react-redux'




const SideNavComponent = ({ sideNav }) => {

    return (
      <>
        <nav id="sidebar" className={!sideNav ? 'active' : ''}>
          <div className="sidebar-logo">
            <Link to="/" className="logo">
              <img src={SideBarLogo} alt="" />
            </Link>
          </div>
          <div className="side-bar-icons">
            <ul className="list-unstyled components">
              <li className="active top-icon">
                <Link to="/" className="">
                  <img src={FirstSideIcon} alt="" />
                </Link>
              </li>
              <li className="top-icon">
                <Link to="/" className="">
                  <img src={SecondSideIcon} alt="" />
                </Link>
              </li>
              <li className="top-icon">
                <Link to="/" className="">
                  <img src={ThirdSideIcon} alt="" />
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled components middle-side-icons">
              <li>
                <Link to="/" className="">
                  <img src={Pn} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/" className="">
                  <img src={Ji} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/" className="">
                  <img src={Lg} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/" className="">
                  <img src={Aw} alt="" />
                </Link>
              </li>
              <li>
                <Link to="/" className="">
                  <img src={Aw2} alt="" />
                </Link>
              </li>
            </ul>
            <div>
              <Link to="/" className="">
                <img src={LastSideIcon} alt="" />
              </Link>
            </div>
          </div>
        </nav>
      </>
    )
}

const mapStateToProps = ({ sideNav }) => {
  return {
    sideNav
  }
}


export default connect(mapStateToProps)(SideNavComponent)