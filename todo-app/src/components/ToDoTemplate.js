import React, {useState, useCallback, useEffect} from 'react';
import axios from 'axios';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import './ToDoTemplate.scss';

const ToDoTemplate = () => {
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
      if (subject.trim().length === 0) {
        alert('할 일을 입력해주세요.');
        return;
      }
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
      if (!validCheckId(id)) return;
      await axios.delete(`http://localhost:3001/todos/${id}`);
      await fetchData();
    },
    [todos],
  );

  const onToggle = useCallback(
    async (id) => {
      if (!validCheckId(id)) return;
      const todo = todos.find((todo) => todo.id === id);
      await axios.put(`http://localhost:3001/todos/${id}/done`, {
        done: !todo.done,
      });
      await fetchData();
    },
    [todos],
  );

  const validCheckId = (id) => {
    if (todos.findIndex((todo) => todo.id === id) === -1) {
      alert('잘못된 id입니다.');
      return false;
    }
    return true;
  };

  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
};

export default ToDoTemplate;
