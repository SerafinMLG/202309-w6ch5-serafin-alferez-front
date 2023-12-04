// import { useEffect } from 'react';
import { AppRoutes } from '../app.routes/app.routes';
// import { Comunication } from '../comunication/comunication';
// import { List } from '../list/list';
import './app.scss';

export function App() {
  // const { loginWithToken } = useUsers();

  // useEffect(() => {
  //   loginWithToken();
  // }, []);

  return (
    <>
      {/* <Header></Header> */}
      <AppRoutes></AppRoutes>;
      <h1>Holaa!!</h1>
    </>
  );
}


