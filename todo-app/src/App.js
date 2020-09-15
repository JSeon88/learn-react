import React, {useState, useCallback, useRef, useEffect} from 'react';
import axios from 'axios';
import ToDoTemplate from './components/ToDoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/todos');
      setTodos(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onInsert = useCallback(
    async (subject) => {
      await axios({
        method: 'post',
        url: 'http://localhost:3001/todos',
        data: {
          subject,
        },
      });
      await fetchData();
    },
    [todos],
  );

  const onRemove = useCallback(
    async (id) => {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      await fetchData();
    },
    [todos],
  );

  const onToggle = useCallback(
    async (id) => {
      const todo = todos.find((todo) => todo.id === id);
      await axios.put(`http://localhost:3001/todos/${id}/done`, {
        done: !todo.done,
      });
      await fetchData();
    },
    [todos],
  );

  return (
    <ToDoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </ToDoTemplate>
  );
};

export default App;
