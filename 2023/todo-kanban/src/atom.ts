import { atom } from "recoil";

export interface Todo {
  id: number;
  text: string;
}

interface ToDoState {
  [key: string]: Todo[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    "To do": [],
    Doing: [],
    Done: [],
  },
});
