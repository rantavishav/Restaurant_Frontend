import { Redirect, Route, Switch } from 'react-router-dom';
import AdminLayout from '../Layout/adminLayout';
import { adminInnerRoutes } from '../../routes/MainRoutes';

const AdminMainContainer = () => {
  const routes = (() => adminInnerRoutes)();
  console.log('🚀 ~ file: AdminMainContainer.jsx ~ line 7 ~ AdminMainContainer ~ routes', routes);

  return (
    <AdminLayout>
      <Switch>
        {routes.map(route =>
          route.component ? (
            <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
              <route.component />
            </Route>
          ) : (
            route.redirectRoute && <Redirect key={route.name} to={route.path} />
          ),
        )}
      </Switch>
    </AdminLayout>
  );
};

export default AdminMainContainer;
