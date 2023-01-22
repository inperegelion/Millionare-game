import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { ROUTE_GAME, ROUTE_ROOT } from './constants';
import Start from './pages/start';

import './App.css';

const router = createBrowserRouter([
  {
    path: ROUTE_ROOT,
    element: <Start />,
  },
  {
    path: ROUTE_GAME,
    element: <div>gamer</div>,
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
