import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { guestRoutes } from './routes/MainRoutes';
import { Loader } from './components';
import { authenticationValidator } from './store/actions';

function App() {
  const { adminToken } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const pathname = window.location.pathname.split('/')[1];
  const redirectHandler = () => {
    const guestRoute = guestRoutes
      .filter(item => item.redirectRoute === undefined)
      .map(item => item.path);
    return !guestRoute.includes(`/${pathname}`) && localStorage.getItem('adminToken') == null ? (
      // eslint-disable-next-line react/jsx-filename-extension
      <Redirect to="/" />
    ) : null;
  };

  let mainContent = (
    <>
      {guestRoutes.map(
        route =>
          route.redirectRoute === undefined && (
            <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
              <route.component />
            </Route>
          ),
      )}
      {redirectHandler()}
    </>
  );
  if (adminToken) {
    mainContent = (
      <Route path="/" component={lazy(() => import('./views/admin/AdminMainContainer'))} />
    );
  }

  useEffect(() => {
    dispatch(authenticationValidator());
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>{mainContent}</Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
