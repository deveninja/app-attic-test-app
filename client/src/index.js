import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import en from '@shopify/polaris/locales/en.json';
import {AppProvider} from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={en} theme={{colorScheme: "light"}}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
