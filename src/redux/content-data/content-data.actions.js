// Declare types
export const UPDATE_TEST_CASE = 'UPDATE_TEST_CASE';


// Action creator to update the reducer when the state of test case changes
export function updateTestCase(testCase) {
  return {
    type: 'UPDATE_TEST_CASE',
    payload: testCase
  }
}