import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { guestRoutes } from "./routes/MainRoutes";
import { Loader } from "./components";
// import LoginContainer from "./views/admin/auth";

function App() {
  const mainContent = (
    <>
      {guestRoutes.map(
        (route) =>
          route.redirectRoute === undefined && (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              element={
                <Suspense fallback={<Loader />}>
                  <route.component />
                </Suspense>
              }
            ></Route>
          )
      )}
    </>
  );
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginContainer />} /> */}
          {mainContent}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
