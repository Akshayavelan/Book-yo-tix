import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { Home } from './Home';
import { Start } from './Start';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BookTickets } from './BookTickets';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path:"/movie",
    element: <BookTickets />
  }
]);




const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
    <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
