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
    path: '/admin/analysis',
    name: 'Admin Analysis',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/analysis/analysis')),
  },
  {
    path: '/admin/customer',
    name: 'Admin Customer',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/customer/customer')),
  },
  {
    path: '/admin/dashboard',
    name: 'Admin Dashboard',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/dashboard/dashboard')),
  },
  {
    path: '/admin/foodDetails',
    name: 'Admin Food Details',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/foodDetails/foodDetails')),
  },
  {
    path: '/admin/foods',
    name: 'Admin Foods',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/foods/foods')),
  },
  {
    path: '/admin/orderList',
    name: 'Admin Order List',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/orderList/orderList')),
  },
  {
    path: '/admin/reviews',
    name: 'Admin Reviews',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/reviews/reviews')),
  },
  {
    path: '/admin/wallet',
    name: 'Admin Wallet',
    exact: true,
    component: React.lazy(() => import('../views/admin/pages/wallet/wallet')),
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
