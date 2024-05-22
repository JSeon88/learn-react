import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atom";

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
      {category !== "DOING" && (
        <button name="DOING" onClick={handleCategory}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={handleCategory}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={handleCategory}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
