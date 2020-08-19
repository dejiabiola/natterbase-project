import { modulesData } from '../../utils/modules.data'
import { quickViewData } from '../../utils/quickview.data'
import { testCaseData } from '../../utils/test-case.data'
import { UPDATE_TEST_CASE } from './content-data.actions'

// Get initial state from the predefined utility data;
const INITIAL_STATE = {
  modulesData,
  quickViewData,
  testCaseData
}


export default function contentDataReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    // update the test case state in reducer
    case UPDATE_TEST_CASE:
      const { id, newState } = action.payload;
      return {
        ...state,
        testCaseData: {
          ...state.testCaseData,
          [id]: {
            ...state.testCaseData[id],
            state: newState
          }
        }
      }
    default:
      return state;
  }
}