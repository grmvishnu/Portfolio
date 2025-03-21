import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/playfair-display/400.css"; // Normal weight
import "@fontsource/playfair-display/500.css"; // Medium weight
import "@fontsource/playfair-display/600.css"; // Semi-bold weight
import "@fontsource/playfair-display/700.css"; // Bold weight
import "@fontsource/playfair-display/800.css"; // Extra-bold weight
import "@fontsource/playfair-display/900.css"; // Black weight

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
