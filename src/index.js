import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import '../node_modules/bootswatch/dist/darkly/bootstrap.min.css';
import './index.css';
import { CLASS_CARD } from './utilities';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();


// TODO: !!
//console.log("Attack abilities", CLASS_CARD.flatMap(c => c.rerollAbilities[0]))
