import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Benefits from "./components/Benefits.jsx";
import FAQs from "./components/FAQs.jsx";
import Support from "./components/Support.jsx";
import Refer from "./components/Refer.jsx";
import Modal from "./components/Modal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Refer /> },
      { path: "/Benefits", element: <Benefits /> },
      { path: "/FAQs", element: <FAQs /> },
      { path: "/Support", element: <Support /> },
      { path: "/Modal", element: <Modal /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
