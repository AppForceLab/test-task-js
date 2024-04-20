import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import { Layout } from './components/layout/Layout/Layout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Favorites from './pages/Favorites/Favorites';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="*" element={<Home />} />
  </Route>
));


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;