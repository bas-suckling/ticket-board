import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from '@apollo/client'
import connection from './Connection'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider connection={connection}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
