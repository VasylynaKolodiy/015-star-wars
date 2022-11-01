import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import ActorsPage from "../pages/ActorsPage/ActorsPage";
import ActorDetailPage from "../pages/ActorDetailPage/ActorDetailPage";
import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";

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
  {
    path: "/actors/:id",
    component: <ActorDetailPage/>,
    exact: true,
  },
  {
    path: "/starships",
    component: <StarshipsPage/>,
    exact: true,
  },
]