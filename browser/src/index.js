import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // Every time you load the page with useEffect, this will make every component run twice. It's how it shows errors.
    <React.StrictMode>
        <browser>
            <App />
        </browser>
    </React.StrictMode>
);