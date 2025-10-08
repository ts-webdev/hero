import React from 'react';
import { createBrowserRouter } from 'react-router';
import root from '../layout/root';
import Home from '../pages/home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: root,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])