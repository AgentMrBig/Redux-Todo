import React from 'react';
import TodoList from './components/newTodoList';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <VisibleTodoList />
        <Footer />



      </header>
    </div>
  );
}

export default App;
