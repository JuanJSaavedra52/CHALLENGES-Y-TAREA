import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Registro } from './Registro';

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <MainApp />
  </BrowserRouter>
);

reportWebVitals();*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
          <Registro />
      </BrowserRouter>
  </Provider>
)
reportWebVitals();
/*ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)*/

// const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  // <>
    //  <MainApp /> 
  // </>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();