import { createSlice, configureStore } from '@reduxjs/toolkit';
// You can also import 'createReducer'

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  }
});

// Even when you work with multiple slices, you ONLY HAVE ONE REDUX STORE, so you only call 'configureStore' once
// And this store must only have ONE ROOT REDUCER
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
