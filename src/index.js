import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeSectionOne from "./views/components/sections/homeSectionOne";
import HomeSectionTwo from './views/components/sections/homeSectionTwo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HomeSectionOne />
    <HomeSectionTwo />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
