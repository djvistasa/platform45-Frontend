import { takeEvery, call, put, all } from 'redux-saga/effects';
import { getResource } from '../../utils/request';
import { GET_TEST_URL, GET_TEST } from './constants';
import { getTestSuccess, getTestError } from './actions';


export function* getTest({ payload: { resolve, reject }}) {
  const { data, error } = yield call(getResource, GET_TEST_URL);
  if(!error && data) {
    yield call(resolve, data);
    yield put(getTestSuccess(data));
  } else {
    yield call(reject, error);
    yield put(getTestError(error));
  }
}
// Individual exports for testing
export default function* testSaga() {
  yield all([
    takeEvery(GET_TEST, getTest),
  ])
}
