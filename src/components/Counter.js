import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter); // This change is because the store (in 'index.js') now sets the value of 'reducer' to an object, and the 'counterSlice.reducer' value has a key of 'counter'. So the first 'counter' accesses the 'counterSlice.reducer', and the second 'counter' accesses the 'counter' state within this
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // Here we pass-in the payload data (can be any kind of value, for example an object if necessary)
    // It will be stored, by redux toolkit, in a field named 'payload'
    // So the automatically created action object will be something like '{ type: 'someUniqueIdentifier', payload: 5 }'
    dispatch(counterActions.increase(5))
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
