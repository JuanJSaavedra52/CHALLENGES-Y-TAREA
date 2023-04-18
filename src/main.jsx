import React from "react";
import ReactDOM from "react-dom/client";
import FirstApp from "./FirstApp";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./pages/MainApp";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
)
