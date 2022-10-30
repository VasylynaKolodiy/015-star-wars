import { combineReducers } from "redux";

import actors from "./actors";

const reducers = combineReducers({
  actors: actors,
});

export { reducers };
