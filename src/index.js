import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './Store/Reducers/';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}


// const store = createStore( // without persisted state
//   allReducers,    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(
  allReducers,
  persistedState,//
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* provider is redux */}

      <AuthContextProvider>
        {/* Authcontext is for useContext & createContext */}

        {/* <BrowserRouter basename='/react_sandbox'> */}
        <BrowserRouter>

          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

