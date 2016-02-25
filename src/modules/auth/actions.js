import actionTypes from './action-types';

import { callApi } from '../api';
import { getters as streamGetters } from '../stream';
import { actions as streamActions } from '../stream';
import { actions as syncActions } from '../sync';

const DEFAULT_ERROR_MSG = 'Unexpected result from API';

/**
 * Fetch the loaded components as a way to validate the API.
 * Second argument is optional options object:
 *   - useStreaming: to enable streaming (default: true if supported)
 *   - rememberLogin: to store login in local storage (default: false)
 *   - host: host to target for API calls
 */
export function validate(reactor, authToken, otp, {
    useStreaming = reactor.evaluate(streamGetters.isSupported),
    rememberAuth = false,
    host = '',
  } = {}) {
  console.log("otp:");
  console.log(otp);
  reactor.dispatch(actionTypes.VALIDATING_AUTH_TOKEN, { authToken, otp, host });

  syncActions.fetchAll(reactor).then(
    () => {
      reactor.dispatch(actionTypes.VALID_AUTH_TOKEN, { authToken, host, otp, rememberAuth });

      if (__DEMO__) {
        // Show as if streaming active in UI
        reactor.dispatch('STREAM_START');
        // No need to start streaming/syncing
        return;
      }

      if (useStreaming) {
        streamActions.start(reactor, { syncOnInitialConnect: false });
      } else {
        syncActions.start(reactor, { skipInitialSync: true });
      }
    },

    ({ message = DEFAULT_ERROR_MSG } = {}) => {
      reactor.dispatch(actionTypes.INVALID_AUTH_TOKEN, { errorMessage: message });
    }
  );
}

export function logOut(reactor) {
  callApi(reactor, 'POST', 'log_out');
  reactor.dispatch(actionTypes.LOG_OUT, {});
}
