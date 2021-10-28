import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';

// You don't have to wrap the '<App>' component with <Provider>; you can wrap lower-level components. But only components wrapped with <Provider> and their children, will have access to Redux
// The <Provider> component takes a 'store' prop, and we're passing-in our store here
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
