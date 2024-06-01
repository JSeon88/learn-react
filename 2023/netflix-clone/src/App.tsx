import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { GlobalStyle } from './assets/styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
};

export default App;
