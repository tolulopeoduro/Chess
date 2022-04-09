import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import './i18n'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Home from './containers/Home/Home';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/game' element = {<App/>}/>
          <Route path='/' exact element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
