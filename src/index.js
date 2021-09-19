import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/common/Header';
import Setup from './components/setting/Setup';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Setup />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
