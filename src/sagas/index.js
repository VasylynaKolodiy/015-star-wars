import {all} from "redux-saga/effects";

import characters from "./characters";
import starships from "./starships";
import vehicles from "./vehicles";
import planets from "./planets";
import species from "./species";
import films from "./films";

export function* sagas() {
  yield all([
    characters,
    starships,
    vehicles,
    planets,
    species,
    films,
  ])
}
