import Editor from "../components/Editor";
import { getFormattedDate } from "../util";

const Home = () => {
  return (
    <div>
      <Editor
        initData={{
          date: getFormattedDate(new Date()),
          emotionId: 1,
          content: "이전에 작성했던 일기",
        }}
        onSubmit={() => alert("작성 완료")}
      />
    </div>
  );
};

export default Home;
