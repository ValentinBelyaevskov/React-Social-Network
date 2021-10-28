import './index.css';
import reportWebVitals from './reportWebVitals';
import { store, appState } from './redux/store';

// ! При вызове import, файл инициализируется

import { BrowserRouter as Router, } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const renderEntireTree = ({ store, appState }) => {
   ReactDOM.render(
      <React.StrictMode>
         <Router basename="/repo-name">
            <App
               state={store.state}
               dispatch={(action) => store.dispatch(action)}
               appState={appState}
            />
         </Router>
      </React.StrictMode>,
      document.getElementById('root')
   );
}

store.subscribe(() => renderEntireTree({ store, appState }));

renderEntireTree({ store, appState });

reportWebVitals();