import {all} from "redux-saga/effects";

import actors from "./actors";
import starships from "./starships";

export function* sagas() {
  yield all([
    actors,
    starships,
  ])
}
