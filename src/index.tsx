import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/stateStore";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./page/NotFound";

const router = createBrowserRouter([
  {
    path: "/my-day",
    element: <App />,
  },
  {
    path: "/important",
    element: <App />,
  },
  {
    path: "/planned",
    element: <App />,
  },
  {
    path: "/assigned-to-me",
    element: <App />,
  },
  {
    path: "/tasks",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
