import React from 'react';
import ReactDOM from 'react-dom/client';
import './SymptomChecker.css'; 
import SymptomChecker from './SymptomChecker'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SymptomChecker />
  </React.StrictMode>
);