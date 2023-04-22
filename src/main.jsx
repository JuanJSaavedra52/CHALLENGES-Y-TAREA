import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Registro } from "./Registro";
import reportWebVitals from './reportWebVitals';


/*ReactDOM.render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>,
    document.getElementById('root')
);*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Registro />
        </BrowserRouter>
    </Provider>
)
reportWebVitals();
