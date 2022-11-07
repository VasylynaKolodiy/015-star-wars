import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ItemsPage from "../pages/ItemsPage/ItemsPage";
import ItemDetailPage from "../pages/ItemDetailPage/ItemDetailPage";

export const privateRoutes = [
  {
    path: "/",
    component: <HomePage/>,
    exact: true,
  },
  {
    path: "/:name",
    component: <ItemsPage/>,
    exact: true,
  },
  {
    path: "/:name/:id",
    component: <ItemDetailPage/>,
    exact: true,
  },
]