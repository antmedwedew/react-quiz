import React from 'react';
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
