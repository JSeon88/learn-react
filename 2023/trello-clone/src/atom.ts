import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    "To do": ["a", "b", "c"],
    Done: ["d", "e"],
    Doing: ["f"],
  },
});
