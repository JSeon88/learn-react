import { atom, selector } from "recoil";
import { CATEGORY, CategoryType } from "./constants/todos";

export interface IToDo {
  id: number;
  text: string;
  category: CategoryType;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<CategoryType>({
  key: "category",
  default: CATEGORY.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});
