import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actorsActions from "../actions/actors";
import {Api} from "../api";

function* getActors(action) {
  try {
    const res = yield call(Api.actors.getActors, action.payload);
    yield put({type: actorsActions.GET_ACTORS_SUCCESS, payload: res.data.results});

  } catch (err) {
    yield put({ type: actorsActions.GET_ACTORS_FAIL, payload: { error: err.message } });
  }
}

function* getActor(action) {
  try {
    const res = yield call(Api.actor.getActor, action.payload);
    yield put({type: actorsActions.GET_ACTOR_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: actorsActions.GET_ACTOR_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(actorsActions.GET_ACTORS_REQUEST, getActors),
  takeLatest(actorsActions.GET_ACTOR_REQUEST, getActor),
])
