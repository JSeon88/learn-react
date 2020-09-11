import React, {useState, useCallback, useRef} from 'react';
import ToDoTemplate from './components/ToDoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, done_type: true, subject: 'test1'},
    {id: 2, done_type: true, subject: 'test2'},
    {id: 3, done_type: false, subject: 'test3'},
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (subject) => {
      const todo = {
        id: nextId.current,
        done_type: false,
        subject,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? {...todo, done_type: !todo.done_type} : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <ToDoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </ToDoTemplate>
  );
}

export default App;
