// import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // strict mode breaks reanimated
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
