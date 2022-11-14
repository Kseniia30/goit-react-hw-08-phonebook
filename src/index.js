import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import { Container } from 'components/App.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Provider store={store}>
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
          <App />
        </BrowserRouter>
      </Provider>
    </Container>
  </React.StrictMode>
);
