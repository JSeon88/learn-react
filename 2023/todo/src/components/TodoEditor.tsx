import { useRef, useState } from "react";

type Props = {
  onCreate: (content: string) => void;
};

const TodoEditor: React.FC<Props> = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // enter키 눌러 추가
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    // 등록폼 초기화
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기📝</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          type="text"
          onKeyDown={onKeyDown}
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo.."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
