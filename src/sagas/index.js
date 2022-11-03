import {all} from "redux-saga/effects";

import actors from "./actors";
import starships from "./starships";
import vehicles from "./vehicles";

export function* sagas() {
  yield all([
    actors,
    starships,
    vehicles,
  ])
}
