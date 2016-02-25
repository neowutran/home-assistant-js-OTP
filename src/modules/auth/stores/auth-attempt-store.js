/**
 * Stores info on current auth attempt.
 */
import { Store, toImmutable } from 'nuclear-js';
import actionTypes from '../action-types';

const INSTANCE = new Store({
  getInitialState() {
    return toImmutable({
      isValidating: false,
      authToken: false,
      otp: false,
      host: null,
      isInvalid: false,
      errorMessage: '',
    });
  },

  initialize() {
    /* eslint-disable no-use-before-define */
    this.on(actionTypes.VALIDATING_AUTH_TOKEN, startValidate);
    this.on(actionTypes.VALID_AUTH_TOKEN, validateSuccess);
    this.on(actionTypes.INVALID_AUTH_TOKEN, validateFail);
    /* eslint-enable no-use-before-define */
  },
});

export default INSTANCE;

// using True as string to workaround a bug.

function startValidate(state, { authToken, otp, host }) {
  return toImmutable({
    authToken,
    otp,
    host,
    isValidating: true,
    isInvalid: false,
    errorMessage: '',
  });
}

function validateSuccess(state, {}) {
  return INSTANCE.getInitialState();
}

function validateFail(state, { errorMessage }) {
  return state.withMutations(mState =>
    mState
      .set('isValidating', false)
      .set('isInvalid', true)
      .set('errorMessage', errorMessage)
  );
}
