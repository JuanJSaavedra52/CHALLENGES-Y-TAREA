import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./pages/MainApp";

ReactDOM.render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>,
    document.getElementById('root')
);

// ReactDOM.createRoot(document.getElementById('root')).render(
    // <BrowserRouter>
        // <MainApp />
    // </BrowserRouter>
// )
