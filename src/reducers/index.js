import { combineReducers } from "redux";

import characters from "./characters";
import starships from "./starships";
import vehicles from "./vehicles";
import planets from "./planets";
import species from "./species";
import films from "./films";

const reducers = combineReducers({
  characters: characters,
  starships: starships,
  vehicles: vehicles,
  planets: planets,
  species: species,
  films: films,
});

export { reducers };
