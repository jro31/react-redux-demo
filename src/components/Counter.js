import { Component } from 'react';
import { connect } from 'react-redux';
// 'connect' allows you to connect class-based components to Redux
// Can also be used for functional components, but unnecessary as hooks are easier

import classes from './Counter.module.css';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  };

  decrementHandler() {
    this.props.decrement();
  };

  toggleCounterHandler() {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button> {/* We bind 'this' to make sure that the 'this' keyword used inside of the functions refers to the class */}
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
};

// The equivalent of 'useSelector()'
const mapStateToProps = state => { // Receives the 'Redux' state, then returns an object where the keys will be available as props in the receiving component ('Counter', on the last line of this file), and the values of those keys will be the logic for accessing the Redux state
  return {
    counter: state.counter, // Can be called in the component with 'this.props.counter'
  };
};

// The equivalent of 'useDispatch()'
const mapDispatchToProps = dispatch => { // Stores dispatch functions in props, so in the 'Counter' component, we have props which can be executed as functions, which will dispatch an action to the Redux store
  return {
    increment: () => dispatch({ type: 'increment' }), // Can be called in the component with 'this.props.increment();'
    decrement: () => dispatch({ type: 'decrement' }), // Can be called in the component with 'this.props.decrement();'
  };
};

// Connect will setup a 'subscription' to the Redux store (like 'useSelector()' does)
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // This syntax: 'connect()' returns a function, then we call that returned function, passing-in 'Counter' as an argument
