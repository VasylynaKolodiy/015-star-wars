import {all} from "redux-saga/effects";

import actors from "./actors";

export function* sagas() {
  yield all([
    actors,
  ])
}
