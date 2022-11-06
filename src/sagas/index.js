import {all} from "redux-saga/effects";

import characters from "./characters";
import starships from "./starships";
import vehicles from "./vehicles";

export function* sagas() {
  yield all([
    characters,
    starships,
    vehicles,
  ])
}
