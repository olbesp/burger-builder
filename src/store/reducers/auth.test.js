import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userID: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  });

  it('should store the token upon login', () => {
    expect(reducer({
      token: null,
      userID: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, { 
      type: actionTypes.AUTH_SUCCESS,
      token: 'some-token',
      userID: 'some-user-id'
    })).toEqual({
      token: 'some-token',
      userID: 'some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/'
    })
  });
});