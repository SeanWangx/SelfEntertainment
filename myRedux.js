function createStore (reducer) {
  let state = undefined;
  let listeners = [];
  const getState = () => state;
  const subscribe = listen => {
    let isExit = listeners.includes(listen);
    if (!isExit) listeners.push(listen);
    return (() => {
      listeners = listeners.filter(l => l !== listen);
    });
  }
  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }
  dispatch();
  return { getState, dispatch, subscribe };
}
function reducer (state = { todos: [] }, action = {}) {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, action.todo ]
      };
    default:
      return state;
  }
}
let store = createStore(reducer);
console.log(store.getState());
store.subscribe(() => {
  console.log('subscribe', store.getState());
});
store.dispatch({ type: 'ADD', todo: '面试'});
