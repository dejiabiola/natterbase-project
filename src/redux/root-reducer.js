import sideNavReducer from './side-nav/sideNav.reducer'
import contentDatareducer from './content-data/content-data.reducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Configure redux persist config, using local storage to store the data. Avoid storing sidenav state;
const persistConfig = {
  key: 'natterbase-dashboard',
  storage,
  blacklist: ['sideNav']
}

// Combine all reducers into the root reducer
const rootReducer = combineReducers({
  sideNav: sideNavReducer,
  data: contentDatareducer
})

export default persistReducer(persistConfig, rootReducer)