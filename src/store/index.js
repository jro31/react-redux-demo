import { createSlice, configureStore } from '@reduxjs/toolkit';
// You can also import 'createReducer'

const initialState = {
  counter: 0,
  showCounter: true,
};

// Prepares a 'slice' of the global state
// For dispatching actions, 'createSlice' automatically creates unique action identifiers for our different reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState, // Equivalent to 'initialState: initialState' - The key is 'initialState', the value is the 'initialState' variable above
  reducers: { // Within this reducers map, you ARE allowed to mutate the state (behind the scenes we're not actually doing that; redux toolkit detects what we're doing and takes care of it for us)
    increment(state) { // Receives 'state' and 'action'; we can just ignore 'action', because we don't need it here
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // 'action.payload' is the '5' passed from 'dispatch(counterActions.increase(5))' in the Counter component
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 'configureStore' creates a store (same as 'createStore'). However, it makes merging multiple reducers into one reducer much easier.
const store = configureStore({
  reducer: counterSlice.reducer // Not a typo; this gives us access to the 'reducers' in our 'counterSlice'
  // If we had multiple reducers, we would assign the value for reducer as an object that contains all of them, for example 'reducer: { counter: counterSlice.reducer, another: another.reducer }'
});

// 'counterSlice.actions.toggleCounter()', for example, returns an object with a unique identifier, for example '{ type: 'someUniqueIdentifier }' (as opposed to '{ type: 'toggle' }' as it would have been before)
// Hence, anywhere that 'counterActions' is imported (in this case in the 'Counter' component), we can call 'dispatch(counterActions.toggleCounter()); to dispatch the 'toggleCounter' action (assuming 'const dispatch = useDispatch()' has been set)
export const counterActions = counterSlice.actions;
export default store;
