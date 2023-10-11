import Editor from "../components/Editor";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Editor onSubmit={() => alert("작성 완료")} />
    </div>
  );
};

export default Home;
