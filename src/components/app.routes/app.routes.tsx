import { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';


// const Home = lazy(() => import(''));
// const Details = lazy(() => import(''));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        {/* <Routes> */}
          {/* <Route path="/" element={<Home></Home>}></Route> */}
          {/* <Route path="/home" element={<Home></Home>}></Route> */}
          {/* <Route path="/details/:id" element={<Details></Details>}></Route> */}
        {/* </Routes> */}
      </Suspense>
    </main>
  )
}
