import React from 'react';
import { createBrowserRouter } from 'react-router';
import root from '../layout/root';
import Home from '../pages/home/Home';
import ErrorPage from '../pages/errorPage/ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])