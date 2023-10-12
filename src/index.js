import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NewSchedule from './pages/NewSchedule';
import MyCalendar from './pages/MyCalendar';
import Recommendation from './pages/Recommendation';
import FindLocation from './pages/FindLocation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> }, 
      { path: 'schedule', element: <NewSchedule /> },
      { path: 'calendar/:userId', element: <MyCalendar /> },
      { path: 'recommend', element: <Recommendation /> },
      { path: 'findlocation', element: <FindLocation /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} /> );
