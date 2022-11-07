import { call, put, all, takeLatest } from "redux-saga/effects";
import * as speciesActions from "../actions/species";
import {Api} from "../api";

function* getSpecies(action) {
  try {
    const res = yield call(Api.species.getSpecies, action.payload);
    yield put({type: speciesActions.GET_SPECIES_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: speciesActions.GET_SPECIES_FAIL, payload: { error: err.message } });
  }
}

function* getSpecie(action) {
  try {
    const res = yield call(Api.species.getSpecie, action.payload);
    yield put({type: speciesActions.GET_SPECIE_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: speciesActions.GET_SPECIE_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(speciesActions.GET_SPECIES_REQUEST, getSpecies),
  takeLatest(speciesActions.GET_SPECIE_REQUEST, getSpecie),
])
