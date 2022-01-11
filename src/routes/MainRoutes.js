import React from "react";

export const guestRoutes = [
  {
    path: "/",
    name: "Signin",
    exact: true,
    component: React.lazy(() => import("../views/admin/auth/index.jsx")),
  },
  // {
  //   path: "/forgot-password",
  //   name: "Forgot Password",
  //   exact: true,
  //   component: React.lazy(() =>
  //     import("../views/admin/auth/forgotPassword.jsx")
  //   ),
  // },
  // {
  //   path: "/reset-password",
  //   name: "Reset Password",
  //   exact: true,
  //   component: React.lazy(() =>
  //     import("../views/admin/auth/resetPassword.jsx")
  //   ),
  // },
  // {
  //   redirectRoute: true,
  //   name: "Login",
  //   path: "/",
  // },
];

// export const userRoutes = [
//   {
//     path: "/home",
//     name: "Home",
//     exact: true,
//     component: React.lazy(() => import("../../views/user/Feed/Feed")),
//   },
//   {
//     redirectRoute: true,
//     name: "Home",
//     path: "/home",
//   },
// ];
