import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("wrapper")!).render(
    <React.StrictMode>
        <HelmetProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </HelmetProvider>
    </React.StrictMode>
);
