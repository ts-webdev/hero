import React from 'react';
import { createBrowserRouter } from 'react-router';
import root from '../layout/root';
import Home from '../pages/home/Home';
import Apps from '../pages/apps/Apps';
import ErrorPage from '../pages/errorPage/ErrorPage';
import AppDetails from '../pages/appDetails/AppDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: root,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/app-details/:id',
                Component: AppDetails
            }
        ]
    }
])