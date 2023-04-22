import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./pages/MainApp";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { App } from "./App";

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
