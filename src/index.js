import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from '@apollo/client'
import {gqlClient} from './Connection'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={gqlClient}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
