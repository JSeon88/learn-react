import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atom";
import { CATEGORY } from "../constants/todos";

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const handleCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.name as IToDo["category"];

    setToDos((oldToDos) => {
      return oldToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: target } : toDo
      );
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== CATEGORY.DOING && (
        <button name={CATEGORY.DOING} onClick={handleCategory}>
          Doing
        </button>
      )}
      {category !== CATEGORY.TO_DO && (
        <button name={CATEGORY.TO_DO} onClick={handleCategory}>
          To Do
        </button>
      )}
      {category !== CATEGORY.DONE && (
        <button name={CATEGORY.DONE} onClick={handleCategory}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
