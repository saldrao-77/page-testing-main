// App.jsx
import React from "react";
import { createRoot } from 'react-dom/client'
import { StrictMode } from "react";
import PhoneDemoPage from "./PhoneDemoPage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhoneDemoPage />
  </StrictMode>,
)