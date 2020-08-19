import { SIDENAVTOGGLE } from './sideNav.actions'




// set sidenav closed to false as initail state then update later
export default function sideNavReducer(state=false, action) {
  switch(action.type) {
    case SIDENAVTOGGLE:
      return !state;
    default:
      return state;
  }
}