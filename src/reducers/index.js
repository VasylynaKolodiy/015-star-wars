import { combineReducers } from "redux";

import actors from "./actors";
import starships from "./starships";
import vehicles from "./vehicles";

const reducers = combineReducers({
  actors: actors,
  starships: starships,
  vehicles: vehicles,
});

export { reducers };
