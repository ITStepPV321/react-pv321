import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/authContext';
// import CounterProvider from './contexts/counterContext';
import CounterProvider from './contexts/counterContextWithReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/root.reducer';

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* using react Redux */}
    <Provider store={store}>
      {/* using Context */}
      <CounterProvider>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </CounterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
