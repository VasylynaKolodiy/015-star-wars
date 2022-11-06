import { combineReducers } from "redux";

import characters from "./characters";
import starships from "./starships";
import vehicles from "./vehicles";

const reducers = combineReducers({
  characters: characters,
  starships: starships,
  vehicles: vehicles,
});

export { reducers };
