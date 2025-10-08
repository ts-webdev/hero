import React from 'react';
import { createBrowserRouter } from 'react-router';
import root from '../layout/root';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: root
    }
])