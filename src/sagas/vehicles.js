import { call, put, all, takeLatest } from "redux-saga/effects";
import * as vehiclesActions from "../actions/vehicles";
import {Api} from "../api";

function* getVehicles(action) {
  try {
    const res = yield call(Api.vehicles.getVehicles, action.payload);
    yield put({type: vehiclesActions.GET_VEHICLES_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: vehiclesActions.GET_VEHICLES_FAIL, payload: { error: err.message } });
  }
}

function* getVehicle(action) {
  try {
    const res = yield call(Api.vehicles.getVehicle, action.payload);
    yield put({type: vehiclesActions.GET_VEHICLE_SUCCESS, payload: res.data});

  } catch (err) {
    yield put({ type: vehiclesActions.GET_VEHICLE_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(vehiclesActions.GET_VEHICLES_REQUEST, getVehicles),
  takeLatest(vehiclesActions.GET_VEHICLE_REQUEST, getVehicle),
])
