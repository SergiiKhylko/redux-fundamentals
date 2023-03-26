const redux = require("redux");

const initialState = {
  counter: 0,
  isCounterInvisible: false
}

const counterReducer = (state = initialState,
                          action) => {
  if (action.type === "INCR") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }

  if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.number
    };
  }

  if (action.type === "DECR") {
    return {
      ...state,
      counter: state.counter - 1
    };
  }

  if (action.type === "VSBLT") {
    return {
      ...state,
      isCounterInvisible: !state.isCounterInvisible
    }
  }

  return state;
};

const store = redux.legacy_createStore(counterReducer);

export default store;