import { call, put, all, takeLatest } from "redux-saga/effects";
import * as starshipsActions from "../actions/starships";
import {Api} from "../api";

function* getStarships(action) {
  try {
    const res = yield call(Api.starships.getStarships, action.payload);
    yield put({type: starshipsActions.GET_STARSHIPS_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: starshipsActions.GET_STARSHIPS_FAIL, payload: { error: err.message } });
  }
}

function* getStarship(action) {
  try {
    const res = yield call(Api.starship.getStarship, action.payload);
    yield put({type: starshipsActions.GET_STARSHIP_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: starshipsActions.GET_STARSHIP_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(starshipsActions.GET_STARSHIPS_REQUEST, getStarships),
  takeLatest(starshipsActions.GET_STARSHIP_REQUEST, getStarship),
])
