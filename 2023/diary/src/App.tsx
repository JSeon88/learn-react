import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { useReducer, useRef } from "react";
import { DiaryType } from "./types";
import { getFormattedDate } from "./util";

type Action = {
  type: string;
  data?: DiaryType;
  targetId?: number;
};

const reducer = (state: DiaryType[], action: Action) => {
  switch (action.type) {
    case "CREATE": {
      if (action.data) {
        return [action.data, ...state];
      } else {
        return state;
      }
    }
    case "UPDATE": {
      const { targetId } = action;
      if (!targetId) {
        return state;
      }
      return state.map((item) => {
        if (action.data && item.id === targetId) {
          return { ...action.data };
        } else {
          return item;
        }
      });
    }
    case "DELETE": {
      const { targetId } = action;
      if (!targetId) {
        return state;
      }
      return state.filter((it) => {
        if (it.id) {
          return it.id !== targetId;
        }
        return it;
      });
    }
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = ({ content, emotionId }: DiaryType) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: getFormattedDate(new Date()),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = ({ id, content, emotionId }: DiaryType) => {
    dispatch({
      type: "UPDATE",
      targetId: id,
      data: {
        id,
        date: getFormattedDate(new Date()),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId: number) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
