import React  from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";

import history from './utils/history'
import { Provider } from "react-redux";
import store from "./store/store";

import App from './App'

ReactDOM.render(
  <Provider store = {store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
)