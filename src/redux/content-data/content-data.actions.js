export const UPDATE_TEST_CASE = 'UPDATE_TEST_CASE';


export function updateTestCase(testCase) {
  return {
    type: 'UPDATE_TEST_CASE',
    payload: testCase
  }
}