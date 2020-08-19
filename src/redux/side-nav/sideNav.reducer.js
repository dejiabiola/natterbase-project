import { SIDENAVTOGGLE } from './sideNav.actions'





export default function sideNavReducer(state=false, action) {
  switch(action.type) {
    case SIDENAVTOGGLE:
      return !state;
    default:
      return state;
  }
}