import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Links from './route';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Links/>
  </Provider>,
  document.getElementById('react-container')
);
