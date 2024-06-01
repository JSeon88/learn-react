import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tv from '@/pages/Tv';
import Search from '../pages/Search';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tv',
        element: <Tv />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);

export default router;
