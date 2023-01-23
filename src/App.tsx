import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTE_GAME_TEMPLATE, ROUTE_OVER, ROUTE_ROOT } from './constants';
import Start from './pages/start';
import Game from './pages/game';
import Over from './pages/over';

import './App.css';

const router = createBrowserRouter([
  {
    path: ROUTE_ROOT,
    element: <Start />,
  },
  {
    path: ROUTE_GAME_TEMPLATE,
    element: <Game />,
  },
  {
    path: ROUTE_OVER,
    element: <Over />,
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
