import React from 'react';
import ToDoTemplate from './components/ToDoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <ToDoTemplate>
      <TodoInsert />
      <TodoList />
    </ToDoTemplate>
  );
}

export default App;
