import { useSelector, useDispatch } from 'react-redux'; // There's also a 'useStore' hook

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  // You pass a function into 'useSelector' to retrieve the part of the state that you need in this component; in this case the 'counter'
  // 'useSelector' will automatically set-up a subscription to the Redux store for this component
  // So whenever the Redux store changes, this component will be re-executed
  // This in turn means that the 'counter' (below) will always be the latest version of 'state.counter'
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
