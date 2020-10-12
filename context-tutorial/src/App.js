import React from "react";

import CountBox from "./components/CountBox";
import { CountProvider } from "./contexts/Count";

const App = () => {
  return (
    <CountProvider>
      <div>
        <CountBox />
      </div>
    </CountProvider>
  );
};

export default App;
