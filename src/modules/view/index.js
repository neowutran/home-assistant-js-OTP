import currentView from './stores/current-view-store';
import * as _actions from './actions';
import * as _getters from './getters';

export function register(reactor) {
  reactor.registerStores({ currentView });
}

export const actions = _actions;
export const getters = _getters;
