import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Footer from "./components/shared/footer/Footer";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import LogIn from "./components/author/login/LogIn";
import Register from "./components/author/register/Register";
import AuthProvider from "./components/providers/AuthProvider";
import Card from "./components/card/Card";
import Recipes from "./components/card/Recipes";
import PrivetRout from "./components/route/PrivetRout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch(`https://bd-chef-data-nahid-nh14.vercel.app/data`)
      },

      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element: <LogIn></LogIn>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/recipes/:id',
        element:<PrivetRout><Recipes></Recipes></PrivetRout>,
        loader:()=> fetch(`https://bd-chef-data-nahid-nh14.vercel.app/data`)
      },

    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
);