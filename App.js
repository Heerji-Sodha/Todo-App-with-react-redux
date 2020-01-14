import React from 'react';
import Home from './Container/Home/Home';
import { Provider } from 'react-redux';
import  { store ,persistor } from './Store'
import { PersistGate } from 'redux-persist/integration/react'

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Home/>
      </PersistGate>
      </Provider>
     
    </div>
  );
}

export default App;
