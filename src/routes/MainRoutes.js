import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const guestRoutes = [
  {
    path: '/',
    name: 'Signin',
    exact: true,
    component: React.lazy(() => import('../views/admin/auth/index')),
  },
  {
    redirectRoute: true,
    name: 'Signin',
    path: '/',
  },
];
export const adminInnerRoutes = [
  {
    path: '/admin/dashboard',
    name: 'Admin Dashboard',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/dashboard')),
  },
  {
    redirectRoute: true,
    name: 'Admin Dashboard',
    path: '/admin/dashboard',
  },
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
