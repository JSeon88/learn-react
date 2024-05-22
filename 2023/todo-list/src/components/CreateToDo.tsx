import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atom";

interface IForm {
  toDo: string;
}
const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleAdd = ({ toDo }: IForm) => {
    setToDos((oldVal) => [{ id: Date.now(), text: toDo, category }, ...oldVal]);

    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleAdd)}>
      <input type="text" placeholder="Write a to do" {...register("toDo")} />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
