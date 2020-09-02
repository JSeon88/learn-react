import React, { Component } from "react";
//import EventPractice from "./EventPractice";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }

  //return <EventPractice />;
}

export default App;
