/*
 *
 * Home actions
 *
 */

import { GET_TEST, GET_TEST_SUCCESS, GET_TEST_ERROR } from './constants';

export function getTest({ resolve, reject }) {
  return {
    type: GET_TEST,
    payload: { resolve, reject },
  };
}

export function getTestSuccess(data) {
  return {
    type: GET_TEST_SUCCESS,
    payload: { data },
  }
}


export function getTestError(error) {
  return {
    type: GET_TEST_ERROR,
    payload: { error },
  }
}