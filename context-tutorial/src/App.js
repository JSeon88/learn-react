import React from "react";

import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/Color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
