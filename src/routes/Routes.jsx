import React from 'react';
import { createBrowserRouter } from 'react-router';
import root from '../layout/root';
import Home from '../pages/home/Home';
import Apps from '../pages/apps/Apps';
import ErrorPage from '../pages/errorPage/ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: root,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                loader: ()=> fetch('./appData.json'),
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            }
        ]
    }
])