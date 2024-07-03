import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'expense',
        element: <h2 className="text-white">Gas Bajo</h2>,
      },
    ],
  },
  {
    path: 'signIn',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
