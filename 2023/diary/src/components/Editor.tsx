import React, { useEffect, useState } from "react";
import "./Editor.css";
import { emotionList, getFormattedDate } from "../util";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";
import { DiaryType } from "../types";

const Editor = ({
  initData,
  onSubmit,
}: {
  initData: DiaryType;
  onSubmit: (state: DiaryType) => void;
}) => {
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });
  const navigator = useNavigate();

  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
      });
    }
  }, [initData]);

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = (): void => {
    onSubmit(state);
  };

  const handleOnGoBack = () => {
    navigator(-1);
  };

  const handlerChangeEmotion = (emotionId: number) => {
    setState({
      ...state,
      emotionId,
    });
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <input type="date" value={state.date} onChange={handleChangeDate} />
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((emotion) => (
            <EmotionItem
              key={emotion.id}
              {...emotion}
              onClick={handlerChangeEmotion}
              isSelected={state.emotionId === emotion.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text={"취소하기"} onClick={handleOnGoBack} />
        <Button text={"작성 완료"} type={"positive"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Editor;
