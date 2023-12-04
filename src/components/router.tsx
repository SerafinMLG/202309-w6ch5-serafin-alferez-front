import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages/home/home'));
// const Details = lazy(() => import('../../pages/details/details'));
// const Favorites = lazy(() => import('../../pages/favorites/favorites'));
// const ErrorMsg = lazy(() => import('../../pages/errorpage/errorpage'));
// const EditForm = lazy(() => import('../../pages/edit_form/edit_form_page'));
// const FavDetails = lazy(() => import('../../pages/fav_details/fav_details'));

export function Router() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
