import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import Contact from './routes/Contact';
import SectionTree from './components/SectionThree';
import SectionOne from './components/SectionOne';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);