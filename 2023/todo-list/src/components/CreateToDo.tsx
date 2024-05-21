import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IForm {
  toDo: string;
}
const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleAdd = ({ toDo }: IForm) => {
    setToDos((oldVal) => [
      { id: Date.now(), text: toDo, category: "TO_DO" },
      ...oldVal,
    ]);

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
