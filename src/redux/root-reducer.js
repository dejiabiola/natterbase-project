import sideNavReducer from './side-nav/sideNav.reducer'
import contentDatareducer from './content-data/content-data.reducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'natterbase-dashboard',
  storage,
  blacklist: ['sideNav']
}

const rootReducer = combineReducers({
  sideNav: sideNavReducer,
  data: contentDatareducer
})

export default persistReducer(persistConfig, rootReducer)