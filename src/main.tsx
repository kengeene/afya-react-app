import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/assets/css/index.css'
import TopBar from "@/components/TopBar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TopBar />
    <App />
  </React.StrictMode>
);
