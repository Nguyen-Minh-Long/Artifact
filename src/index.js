import React from 'react';
import ReactDOM from 'react-dom';
import Snowfall from 'react-snowfall'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';




ReactDOM.render(
  <React.StrictMode>
    <Snowfall
      //Positioning
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }}
      // Controls the number of snowflakes that are created (default 150)
      snowflakeCount={300}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);