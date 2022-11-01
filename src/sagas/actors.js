import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actorsActions from "../actions/actors";
import {Api} from "../api";

function* getActors(action) {
  try {
    const res = yield call(Api.actors.getActors, action.payload);
    yield put({type: actorsActions.GET_ACTORS_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: actorsActions.GET_ACTORS_FAIL, payload: { error: err.message } });
  }
}

function* getActor(action) {
  try {
    console.log(33333)
    console.log(Api.actor.getActor, 'Api.actor.getActor')
    console.log(Api.actor, 'Api.actor')
    console.log(Api, 'Api')
    const res = yield call(Api.actor.getActor, action.payload);
    console.log(res, 'res')
    yield put({type: actorsActions.GET_ACTOR_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: actorsActions.GET_ACTOR_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(actorsActions.GET_ACTORS_REQUEST, getActors),
  takeLatest(actorsActions.GET_ACTOR_REQUEST, getActor),
])
