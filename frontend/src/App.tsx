import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { RootLayout } from './layout';
import { News } from './components/News';

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<div>ERROR</div>}>
      <Route index element={<News />} errorElement={<div>ERROR</div>} />
    </Route>
  )
);

export default App;
