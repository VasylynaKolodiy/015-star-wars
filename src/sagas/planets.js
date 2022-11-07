import { call, put, all, takeLatest } from "redux-saga/effects";
import * as planetsActions from "../actions/planets";
import {Api} from "../api";

function* getPlanets(action) {
  try {
    const res = yield call(Api.planets.getPlanets, action.payload);
    yield put({type: planetsActions.GET_PLANETS_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: planetsActions.GET_PLANETS_FAIL, payload: { error: err.message } });
  }
}

function* getPlanet(action) {
  try {
    const res = yield call(Api.planets.getPlanet, action.payload);
    yield put({type: planetsActions.GET_PLANET_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: planetsActions.GET_PLANET_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(planetsActions.GET_PLANETS_REQUEST, getPlanets),
  takeLatest(planetsActions.GET_PLANET_REQUEST, getPlanet),
])
