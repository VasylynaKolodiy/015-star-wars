import React from "react";
import HomePage from "../pages/HomePage/HomePage";

import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";
import StarshipDetailPage from "../pages/StarshipsPage/StarshipDetailPage/StarshipDetailPage";
import VehiclesPage from "../pages/VehiclesPage/VehiclesPage";
import VehicleDetailPage from "../pages/VehicleDetailPage/VehicleDetailPage";
import ItemsPage from "../pages/ItemsPage/ItemsPage";

export const privateRoutes = [
  {
    path: "/",
    component: <HomePage/>,
    exact: true,
  },
  // {
  //   path: "/actors",
  //   component: <ActorsPage/>,
  //   exact: true,
  // },
  // {
  //   path: "/actors/:id",
  //   component: <ActorDetailPage/>,
  //   exact: true,
  // },
  // {
  //   path: "/starships",
  //   component: <StarshipsPage/>,
  //   exact: true,
  // },
  // {
  //   path: "/starships/:id",
  //   component: <StarshipDetailPage/>,
  //   exact: true,
  // },
  // {
  //   path: "/vehicles",
  //   component: <VehiclesPage/>,
  //   exact: true,
  // },
  // {
  //   path: "/vehicles/:id",
  //   component: <VehicleDetailPage/>,
  //   exact: true,
  // },

  {
    path: "/:name",
    component: <ItemsPage/>,
    exact: true,
  },
]