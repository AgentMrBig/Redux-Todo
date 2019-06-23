import React from 'react';
import ToDoList from './components/ToDoList';
import store from './store/index';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <ToDoList />
        </Provider>

      </header>
    </div>
  );
}

export default App;
