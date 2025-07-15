import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
// import RootLayout from './layout/RootLayout';
import HomePage from './components/pages/home/home';
import DetailsPage from './components/pages/details/details';

const router = createHashRouter([
  {
    path: '/',
    // element: <RootLayout />,
    children: [
      {
        index: true, // odpowiada za "/"
        element: <HomePage />,
      },
      {
        path: 'szczegoly/:id',
        element: <DetailsPage />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
 
};

export default App;
