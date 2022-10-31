import { combineReducers } from "redux";

import actors from "./actors";
import starships from "./starships";

const reducers = combineReducers({
  actors: actors,
  starships: starships,
});

export { reducers };
