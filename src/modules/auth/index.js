import authAttempt from './stores/auth-attempt-store';
import otpAttempt from './stores/auth-attempt-store';
import authCurrent from './stores/current-auth-store';
import otpCurrent from './stores/current-auth-store';
import rememberAuth from './stores/remember-auth-store';
import * as _actions from './actions';
import * as _getters from './getters';

export function register(reactor) {
  reactor.registerStores({
    authAttempt,
    authCurrent,
    otpCurrent,
    otpAttempt,
    rememberAuth,
  });
}

export const actions = _actions;
export const getters = _getters;
