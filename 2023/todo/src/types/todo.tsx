export type Todo = {
  id: number;
  isDone: boolean;
  content: string;
  createdDate: number;
};

type ActionType = "CREATE" | "UPDATE" | "DELETE";

export type Action = {
  type: ActionType;
  newItem?: Todo;
  targetId?: number;
};
