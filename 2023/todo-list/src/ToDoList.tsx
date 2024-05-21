import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  toDo: string;
}
interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [toDos, setToDos] = useRecoilState(toDoState);

  const handleAdd = ({ toDo }: IForm) => {
    setToDos((oldVal) => [
      { id: Date.now(), text: toDo, category: "TO_DO" },
      ...oldVal,
    ]);

    setValue("toDo", "");
  };
  return (
    <>
      <div className="todo">
        <h1>ToDo List</h1>
        <div>
          <form onSubmit={handleSubmit(handleAdd)}>
            <input
              type="text"
              placeholder="Write a to do"
              {...register("toDo")}
            />
            <button>Add</button>
          </form>
        </div>
      </div>
      <div className="todo-list">
        <ul>
          {toDos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ToDoList;
