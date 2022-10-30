import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ActorsPage from "../pages/ActorsPage/ActorsPage";

export const privateRoutes = [
  {
    path: "/",
    component: <HomePage/>,
    exact: true,
  },
  {
    path: "/actors",
    component: <ActorsPage/>,
    exact: true,
  },

]