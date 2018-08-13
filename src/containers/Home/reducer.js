/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_TEST, GET_TEST_SUCCESS, GET_TEST_ERROR } from './constants';

export const initialState = fromJS({
  isLoading: false,
  data: '',
});

function homeReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case GET_TEST:
      return state.set('isLoading', true);
    case GET_TEST_SUCCESS:
      return state
        .set('isLoading', false)
        .set('data' ,payload.data );
    case GET_TEST_ERROR:
      return state
        .set('isLoading', false)
        .set('data' ,payload.error );
    default:
      return state;
  }
}

export default homeReducer;
