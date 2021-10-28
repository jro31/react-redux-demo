import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true,
};

// Note that Redux does NOT merge your state object, it takes the return, and replaces the existing state with it (so you have to return all state pieces)
const counterReducer = (state = initialState, action) => {
  // Should use a switch/case rather than all these 'if' statements
  if (action.type === 'increment') {
    // You should NEVER MUTATE THE EXISTING STATE (for example 'state.counter++; return state'). You should ALWAYS override it by returning a new state object.
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  };

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  };

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  };

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  };

  return state;
};

const store = createStore(counterReducer);

export default store;
