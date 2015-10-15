'use strict';

const saveState = function saveState(save) {
  let currentState;

  window.addEventListener('unload', () => {
    if (!currentState) {
      return;
    }

    save(currentState);
  });

  return store => next => action => {
    let result = next(action);
    currentState = store.getState();
    return result;
  }
}

export default saveState;
